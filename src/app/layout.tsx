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
  title: "Void & Key | Technology Solutions, Managed Operations & Cybersecurity",
  description:
    "Void & Key engineers modern web platforms, managed back-office systems, and proactive cybersecurity architectures that drive enterprise velocity and operational clarity.",
  keywords: [
    "enterprise software engineering",
    "managed IT operations",
    "cloud architecture consulting",
    "cybersecurity solutions",
    "business process outsourcing",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/vod-key-favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/vod-key-favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/images/vod-key-favicon.png", sizes: "180x180", type: "image/png" },
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
        <title>Void and Key – Unlocking Your Digital Outreach</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/vod-key-favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/images/vod-key-favicon.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/images/vod-key-favicon.png" sizes="180x180" />
      </head>
      <body className="bg-ink text-white font-body antialiased selection:bg-amber selection:text-black">
        {children}
      </body>
    </html>
  );
}
