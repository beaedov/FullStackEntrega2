"use client";

import { useEffect, useState } from "react";
import TarjetaProducto, { type Producto } from "@/components/TarjetaProducto";
import { obtenerProductosEnOferta } from "@/data/datos";

export default function Ofertas() {
  const [ofertas, setOfertas] = useState<Producto[]>([]);

  useEffect(() => {
    setOfertas(obtenerProductosEnOferta());
  }, []);

  return (
    <div className="container py-5">
      <h1 className="h2">
        <i className="bi bi-tag-fill text-danger me-2"></i>Ofertas
      </h1>
      <p className="text-secondary mb-4">Precios rebajados en radiadores y repuestos.</p>

      {ofertas.length === 0 ? (
        <div className="alert alert-info">Por ahora no tenemos productos en oferta.</div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {ofertas.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}