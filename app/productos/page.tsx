"use client";

import { useEffect, useState } from "react";
import TarjetaProducto, { type Producto } from "@/components/TarjetaProducto";
import Buscador from "@/components/Buscador";
import { obtenerProductos } from "@/data/datos";

export default function Productos() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    setProductos(obtenerProductos());
  }, []);

  // Solo los productos que el nombre se escribio
  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container py-5">
      <h1 className="h2 mb-4">Productos</h1>

      <Buscador valor={busqueda} alCambiar={setBusqueda} />

      {productosFiltrados.length === 0 ? (
        <div className="alert alert-info">
          No encontramos productos que coincidan con "{busqueda}".
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {productosFiltrados.map((producto) => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </div>
  );
}