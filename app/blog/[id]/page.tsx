import Link from "next/link";
import { notFound } from "next/navigation";
import { articulos } from "@/data/blog";

export const instant = false;

// Le dice a Next qué artículos existen (/blog/1, /blog/2...)
export function generateStaticParams() {
  return articulos.map((articulo) => ({ id: articulo.id }));
}

export default async function DetalleBlog({ params }: PageProps<"/blog/[id]">) {
  const { id } = await params;
  const articulo = articulos.find((a) => a.id === id);

  if (!articulo) {
    notFound();
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