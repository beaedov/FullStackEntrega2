"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { obtenerArticulo } from "@/data/blog";

export default function DetalleBlog() {
  const { id } = useParams<{ id: string }>();
  const articulo = obtenerArticulo(id);

  // Si el artículo no existe
  if (!articulo) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">El artículo que buscas no existe.</div>
        <Link href="/blog" className="btn btn-primary">Volver al blog</Link>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: 760 }}>
      <Link href="/blog" className="btn btn-link px-0 mb-3">
        <i className="bi bi-arrow-left me-1"></i>Volver al blog
      </Link>

      <h1 className="h2 mt-2">{articulo.titulo}</h1>
      <p className="text-secondary">{articulo.fecha}</p>

      {articulo.contenido.map((parrafo, i) => (
        <p key={i} className="lh-lg">{parrafo}</p>
      ))}

    </div>
  );
}