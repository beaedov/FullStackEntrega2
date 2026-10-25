"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Enlaces del menú principal de la tienda
const enlaces = [
  { href: "/", texto: "Inicio" },
  { href: "/productos", texto: "Productos" },
  { href: "/ofertas", texto: "Ofertas" },
  { href: "/nosotros", texto: "Nosotros" },
  { href: "/blog", texto: "Blog" },
  { href: "/contacto", texto: "Contacto" },
];

// Barra de navegación responsiva. En pantallas chicas se colapsa
// y se abre con el botón "hamburguesa" (estado local: abierto).
export default function Navbar() {
  const [abierto, setAbierto] = useState(false);
  const rutaActual = usePathname();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/" onClick={() => setAbierto(false)}>
          <i className="bi bi-thermometer-snow text-info me-2"></i>
          Radiadores del Puerto
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto(!abierto)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${abierto ? "show" : ""}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {enlaces.map((enlace) => (
              <li className="nav-item" key={enlace.href}>
                <Link
                  href={enlace.href}
                  className={`nav-link ${rutaActual === enlace.href ? "active" : ""}`}
                  onClick={() => setAbierto(false)}
                >
                  {enlace.texto}
                </Link>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-wrap gap-2">
            <Link className="btn btn-success" href="/carrito" onClick={() => setAbierto(false)}>
              <i className="bi bi-cart3 me-1"></i> Carrito $0
            </Link>
            <Link className="btn btn-outline-light" href="/login" onClick={() => setAbierto(false)}>
              Iniciar sesión
            </Link>
            <Link className="btn btn-info" href="/registro" onClick={() => setAbierto(false)}>
              Crear cuenta
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
