import type { Metadata } from "next";
import localFont from "next/font/local";
import { Motion } from "@/components/motion";
import { Preloader } from "@/components/preloader";
import "./globals.css";

const ortica = localFont({
  src: [
    {
      path: "../fonts/Ortica/OrticaLinear-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Ortica/OrticaLinear-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ortica",
});

const aegean = localFont({
  src: "../fonts/Tan-Aegan/TANAEGEAN-Regular.otf",
  weight: "400",
  style: "normal",
  variable: "--font-aegean",
});

const termina = localFont({
  src: [
    {
      path: "../fonts/Termina/TerminaTest-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Termina/TerminaTest-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-termina",
});

export const metadata: Metadata = {
  title: "Dreamers & Doers — Life in Progress",
  description:
    "A six-week live cohort for ambitious women who are ready to stop putting the thing off and start building it.",
  icons: {
    icon: [{ url: "/NewIcon.webp", type: "image/webp" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${ortica.variable} ${aegean.variable} ${termina.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Motion />
        {children}
      </body>
    </html>
  );
}
