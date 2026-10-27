import Link from "next/link";
import { notFound } from "next/navigation";
import { formatearPrecio } from "@/data/datos";
import { productos } from "@/data/datos";

export const instant = false;

// Le dice a Next qué productos existen
export function generateStaticParams() {
  return productos.map((producto) => ({ slug: producto.id }));
}

export default async function DetalleProducto({ params }: PageProps<"/productos/[slug]">) {
  const { slug } = await params;
  const producto = productos.find((p) => p.id === slug);

  if (!producto) {
    notFound();
  }

  const categoria = categorias.find((c) => c.id === producto.categoriaId);

  return (
    <div className="container py-5">
      <Link href="/productos" className="btn btn-link px-0 mb-3">
        <i className="bi bi-arrow-left me-1"></i>Volver a productos
      </Link>

      <div className="row g-4">
        <div className="col-md-6">
          <img
            src={"/imagenes_productos/" + producto.imagen}
            alt={producto.nombre}
            className="img-fluid rounded shadow-sm w-100"
          />
        </div>

        <div className="col-md-6">
          <span className="badge bg-secondary mb-2">{categoria?.nombre}</span>
          <h1 className="h3">{producto.nombre}</h1>

          {producto.precioOferta ? (
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
          <p className="text-success">Disponible: {producto.stock} unidades</p>

          <button className="btn btn-success btn-lg">
            <i className="bi bi-cart-plus me-2"></i>Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}