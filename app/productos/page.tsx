"use client";

import { useEffect, useState } from "react";
import TarjetaProducto, { type Producto } from "@/components/TarjetaProducto";
import { obtenerProductos } from "@/data/datos";

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);

  useEffect(() => {
    setProductos(obtenerProductos());
  }, []);

  return (
    <div className="container py-5">
      <h1 className="h2 mb-4">Productos</h1>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productos.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}