import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-franie",
  weight: ["300", "400", "600", "700", "800"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-aeonik",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Void & Key — Unlocking your Digital Outreach",
  description:
    "Void & Key delivers modern, scalable digital solutions engineered to solve complex problems with precision, security, and performance.",
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/logo.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" sizes="180x180" />
      </head>
      <body className="bg-ink text-white font-body antialiased selection:bg-amber selection:text-black">
        {children}
      </body>
    </html>
  );
}
