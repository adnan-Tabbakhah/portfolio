import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adnan Tabbakhah - Front-End Developer Portfolio",
  description:
    "Professional portfolio of Adnan Tabbakhah, Front-End Developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`inter-variable  antialiased`}>{children}</body>
    </html>
  );
}
