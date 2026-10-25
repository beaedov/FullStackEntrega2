import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi tienda Maipú",
  description: "Generado en clases",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ofertas">ofertas</Link></li>
            <li><Link href="/productos">productos</Link></li>
            <li><Link href="/productos/verduras">verduras</Link></li>
            <li><Link href="/nosotros">nosotros</Link></li>
            <li><Link href="/contacto">contacto</Link></li>
          </ul>
        </nav>
        {children}
        </body>
    </html>
  );
}
