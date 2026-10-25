import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Radiadores del Puerto",
  description: "Venta y reparación de radiadores",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body className="d-flex flex-column min-vh-100 bg-light">
        <Navbar />
        <main className="flex-grow-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
