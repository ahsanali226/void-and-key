import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Void & Key — The Key To All Your Problems",
  description:
    "Void & Key delivers modern, scalable digital solutions engineered to solve complex problems with precision, security, and performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-ink text-white font-body">{children}</body>
    </html>
  );
}
