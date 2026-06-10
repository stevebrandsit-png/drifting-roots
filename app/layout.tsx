import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Drifting Roots",
  description: "Grit • Resilience • Recovery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dr-void text-dr-concrete antialiased min-h-screen flex flex-col justify-between">
        
        {/* Global Header */}
        <header className="border-b border-dr-asphalt py-6 px-8 flex justify-between items-center bg-dr-void/80 backdrop-blur-sm sticky top-0 z-50">
          <a href="/" className="text-2xl font-black text-dr-bone tracking-tighter uppercase cursor-pointer hover:text-dr-accent transition-all">
            Drifting Roots
          </a>
          <nav className="flex gap-6 text-xs font-bold tracking-widest uppercase">
            <a href="/" className="hover:text-dr-bone transition-all cursor-pointer">Home</a>
            <a href="/style-guide" className="hover:text-dr-bone transition-all cursor-pointer">Style Guide</a>
          </nav>
        </header>

        {/* Dynamic Page Content (This changes depending on what page you are on) */}
        <div className="flex-grow">
          {children}
        </div>

        {/* Global Footer */}
        <footer className="border-t border-dr-asphalt py-8 px-8 text-center text-[10px] uppercase tracking-widest text-dr-concrete/50">
          <p>© 2026 Drifting Roots • Built with Grit & Next.js</p>
        </footer>

      </body>
    </html>
  );
}