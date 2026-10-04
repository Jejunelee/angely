import Image from "next/image";

export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes,
  speed,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
  speed?: number;
}) {
  return (
    <div
      className={`relative overflow-hidden ${speed ? "has-parallax" : ""} ${className}`}
      data-speed={speed}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}
