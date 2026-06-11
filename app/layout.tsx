import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

// Configure the mechanical, 90s aesthetic font
const spaceMono = Space_Mono({ 
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Drifting Roots | Subculture Gear",
  description: "Roots shatter concrete. Gear for the subculture of survivors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 1. Injects the Space Mono font globally 
        2. Highlights text in your custom Rust Orange (dr-accent)
      */}
      <body className={`${spaceMono.className} antialiased selection:bg-dr-accent selection:text-dr-bone`}>
        {children}
      </body>
    </html>
  );
}