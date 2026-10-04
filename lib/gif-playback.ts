const speed = 1.2;

type Frame = {
  left: number;
  top: number;
  width: number;
  height: number;
  delayCs: number;
  dispose: number;
  transparent: number | null;
  indexes: Uint8Array;
};

type Gif = {
  width: number;
  height: number;
  palette: Uint8Array;
  frames: Frame[];
};

export function playGifOnce(
  bytes: Uint8Array,
  canvas: HTMLCanvasElement,
  signal?: AbortSignal,
  playbackSpeed = speed,
) {
  const gif = parseGif(bytes);
  canvas.width = gif.width;
  canvas.height = gif.height;
  const context = canvas.getContext("2d", { alpha: true });
  if (!context) return Promise.resolve();

  const image = context.createImageData(gif.width, gif.height);
  const pixels = image.data;
  let previousDispose = 0;
  let previous = { left: 0, top: 0, width: 0, height: 0 };

  return gif.frames.reduce((chain, frame) => {
    return chain.then(
      () =>
        new Promise<void>((resolve) => {
          if (signal?.aborted) {
            resolve();
            return;
          }
          if (previousDispose === 2) clearRect(pixels, gif.width, previous);
          blit(pixels, gif.width, gif.palette, frame);
          context.putImageData(image, 0, 0);
          previousDispose = frame.dispose;
          previous = frame;
          const timer = window.setTimeout(resolve, (frame.delayCs * 10) / playbackSpeed);
          signal?.addEventListener(
            "abort",
            () => {
              window.clearTimeout(timer);
              resolve();
            },
            { once: true },
          );
        }),
    );
  }, Promise.resolve());
}

function parseGif(bytes: Uint8Array): Gif {
  let offset = 6;
  const width = read16(bytes, offset);
  const height = read16(bytes, offset + 2);
  const packed = bytes[offset + 4];
  offset += 7;
  const paletteSize = packed & 0x80 ? 2 ** ((packed & 7) + 1) : 0;
  const palette = bytes.slice(offset, offset + paletteSize * 3);
  offset += paletteSize * 3;

  const frames: Frame[] = [];
  let delayCs = 10;
  let dispose = 0;
  let transparent: number | null = null;

  while (offset < bytes.length) {
    const marker = bytes[offset];
    if (marker === 0x3b) break;
    if (marker === 0x21) {
      const label = bytes[offset + 1];
      offset += 2;
      if (label === 0xf9) {
        const block = bytes[offset];
        const flags = bytes[offset + 1];
        delayCs = read16(bytes, offset + 2) || 10;
        dispose = (flags >> 2) & 7;
        transparent = flags & 1 ? bytes[offset + 4] : null;
        offset += block + 1;
        if (bytes[offset] === 0) offset += 1;
      } else {
        offset = skipSubBlocks(bytes, offset);
      }
      continue;
    }
    if (marker !== 0x2c) break;

    const left = read16(bytes, offset + 1);
    const top = read16(bytes, offset + 3);
    const frameWidth = read16(bytes, offset + 5);
    const frameHeight = read16(bytes, offset + 7);
    offset += 9;
    const imagePacked = bytes[offset];
    offset += 1;
    if (imagePacked & 0x80) offset += 3 * 2 ** ((imagePacked & 7) + 1);
    const minCodeSize = bytes[offset];
    offset += 1;
    const compressed = readSubBlocks(bytes, offset);
    offset = compressed.next;
    frames.push({
      left,
      top,
      width: frameWidth,
      height: frameHeight,
      delayCs,
      dispose,
      transparent,
      indexes: lzw(minCodeSize, compressed.data, frameWidth * frameHeight),
    });
  }

  return { width, height, palette, frames };
}

function blit(pixels: Uint8ClampedArray, width: number, palette: Uint8Array, frame: Frame) {
  for (let y = 0; y < frame.height; y += 1) {
    for (let x = 0; x < frame.width; x += 1) {
      const index = frame.indexes[y * frame.width + x];
      if (index === frame.transparent) continue;
      const pixel = ((frame.top + y) * width + frame.left + x) * 4;
      const color = index * 3;
      pixels[pixel] = palette[color];
      pixels[pixel + 1] = palette[color + 1];
      pixels[pixel + 2] = palette[color + 2];
      pixels[pixel + 3] = 255;
    }
  }
}

function clearRect(
  pixels: Uint8ClampedArray,
  width: number,
  rect: { left: number; top: number; width: number; height: number },
) {
  for (let y = 0; y < rect.height; y += 1) {
    for (let x = 0; x < rect.width; x += 1) {
      const pixel = ((rect.top + y) * width + rect.left + x) * 4;
      pixels[pixel + 3] = 0;
    }
  }
}

function lzw(minCodeSize: number, data: Uint8Array, expected: number) {
  const clear = 1 << minCodeSize;
  const end = clear + 1;
  let codeSize = minCodeSize + 1;
  let nextCode = end + 1;
  let dictionary = Array.from({ length: clear }, (_, index) => [index]);
  let bits = 0;
  let bitCount = 0;
  let position = 0;
  let previous: number[] | null = null;
  const output = new Uint8Array(expected);
  let written = 0;

  const read = () => {
    while (bitCount < codeSize) {
      if (position >= data.length) return null;
      bits |= data[position] << bitCount;
      bitCount += 8;
      position += 1;
    }
    const code = bits & ((1 << codeSize) - 1);
    bits >>= codeSize;
    bitCount -= codeSize;
    return code;
  };

  while (written < expected) {
    const code = read();
    if (code === null || code === end) break;
    if (code === clear) {
      dictionary = Array.from({ length: clear }, (_, index) => [index]);
      codeSize = minCodeSize + 1;
      nextCode = end + 1;
      previous = null;
      continue;
    }
    let entry = dictionary[code];
    if (!entry && previous && code === nextCode) entry = previous.concat(previous[0]);
    if (!entry) break;
    for (const value of entry) output[written++] = value;
    if (previous) {
      dictionary[nextCode] = previous.concat(entry[0]);
      nextCode += 1;
      if (nextCode === 1 << codeSize && codeSize < 12) codeSize += 1;
    }
    previous = entry;
  }

  return output;
}

function readSubBlocks(bytes: Uint8Array, offset: number) {
  const chunks: Uint8Array[] = [];
  let size = 0;
  while (bytes[offset] !== 0) {
    const length = bytes[offset];
    chunks.push(bytes.slice(offset + 1, offset + 1 + length));
    size += length;
    offset += 1 + length;
  }
  const data = new Uint8Array(size);
  let cursor = 0;
  for (const chunk of chunks) {
    data.set(chunk, cursor);
    cursor += chunk.length;
  }
  return { data, next: offset + 1 };
}

function skipSubBlocks(bytes: Uint8Array, offset: number) {
  while (bytes[offset] !== 0) offset += 1 + bytes[offset];
  return offset + 1;
}

function read16(bytes: Uint8Array, offset: number) {
  return bytes[offset] | (bytes[offset + 1] << 8);
}
