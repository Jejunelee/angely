import Link from "next/link";

const variants = {
  brown: "bg-brown text-cream hover:bg-charcoal",
  gold: "bg-gold text-brown hover:bg-tan",
  white: "bg-white text-brown hover:bg-cream",
  text: "bg-transparent text-brown px-0 hover:opacity-70",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  href,
  children,
  variant = "brown",
  uppercase = false,
  className: classNameProp = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  uppercase?: boolean;
  className?: string;
}) {
  const className = `inline-flex min-h-12 items-center justify-center px-6 font-sans font-medium transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(93,55,34,0.18)] ${
    uppercase ? "text-[15px] tracking-[0.16em] uppercase" : "text-[18px] tracking-[0.01em]"
  } ${variants[variant]} ${classNameProp}`;

  if (href.startsWith("#") || href.startsWith("http")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
