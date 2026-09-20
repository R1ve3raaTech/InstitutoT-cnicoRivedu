import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rivedu.com"),
  title: "Instituto Técnico Rivedu",
  description: "Cursos y capacitaciones para su desarrollo personal y profesional.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Instituto Técnico Rivedu",
    description: "Cursos y capacitaciones para su desarrollo personal y profesional.",
    locale: "es_CR",
    type: "website",
    url: "https://rivedu.com/",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
