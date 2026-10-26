"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { type Producto } from "@/components/TarjetaProducto";
import { formatearPrecio, obtenerProducto, obtenerPorId } from "@/data/datos";

export default function DetalleProducto() {
  // Si la URL es /productos/3, entonces slug = "3"
  const { slug } = useParams<{ slug: string }>();

  const [producto, setProducto] = useState<Producto | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const encontrado = obtenerProducto(slug);
    setProducto(encontrado ?? null);
    setCargando(false);
  }, [slug]);

  // Mientras busca el producto
  if (cargando) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    );
  }

  // Si el producto no existe
  if (!producto) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">El producto que buscas no existe.</div>
        <Link href="/productos" className="btn btn-primary">Volver a productos</Link>
      </div>
    );
  }

  // Si lo encontró, muestra el detalle
  const categoria = obtenerPorId("categorias", producto.categoriaId);
  const enOferta = producto.precioOferta !== null;
  const imagen = producto.imagen ? producto.imagen : "producto_sin_foto.png";

  return (
    <div className="container py-5">
      <Link href="/productos" className="btn btn-link px-0 mb-3">
        <i className="bi bi-arrow-left me-1"></i>Volver a productos
      </Link>

      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={"/imagenes_productos/" + imagen}
            alt={producto.nombre}
            className="img-fluid rounded shadow-sm w-100"
          />
        </div>

        <div className="col-md-6">
          {categoria && <span className="badge bg-secondary mb-2">{categoria.nombre}</span>}
          <h1 className="h3">{producto.nombre}</h1>

          {enOferta ? (
            <p className="fs-4">
              <span className="text-decoration-line-through text-secondary me-2">
                {formatearPrecio(producto.precio)}
              </span>
              <span className="fw-bold text-danger">{formatearPrecio(producto.precioOferta)}</span>
            </p>
          ) : (
            <p className="fs-4 fw-bold text-primary">{formatearPrecio(producto.precio)}</p>
          )}

          <p>{producto.descripcion}</p>

          <p className={producto.stock > 0 ? "text-success" : "text-danger"}>
            {producto.stock > 0 ? `Disponible: ${producto.stock} unidades` : "Sin stock"}
          </p>

          <button className="btn btn-success btn-lg" disabled={producto.stock === 0}>
            <i className="bi bi-cart-plus me-2"></i>Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}