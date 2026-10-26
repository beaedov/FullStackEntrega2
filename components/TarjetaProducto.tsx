import Link from "next/link";
import { formatearPrecio } from "@/data/datos";

// Forma que tiene un producto (los mismos campos de datos.js)
export type Producto = {
  id: string;
  nombre: string;
  categoriaId: string;
  precio: number;
  precioOferta: number | null;
  stock: number;
  stockCritico: number;
  descripcion: string;
  imagen: string;
};

// Tarjeta que muestra UN producto. Lo recibe por props.
export default function TarjetaProducto({ producto }: { producto: Producto }) {
  const enOferta = producto.precioOferta !== null;
  const imagen = producto.imagen ? producto.imagen : "producto_sin_foto.png";

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        {enOferta && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">Oferta</span>
        )}

        <img
          src={"/imagenes_productos/" + imagen}
          alt={producto.nombre}
          className="card-img-top"
          style={{ height: 180, objectFit: "cover" }}
        />

        <div className="card-body d-flex flex-column">
          <h3 className="h6">{producto.nombre}</h3>

          {enOferta ? (
            <p>
              <span className="text-decoration-line-through text-secondary me-2">
                {formatearPrecio(producto.precio)}
              </span>
              <span className="fw-bold text-danger">{formatearPrecio(producto.precioOferta)}</span>
            </p>
          ) : (
            <p className="fw-bold text-primary">{formatearPrecio(producto.precio)}</p>
          )}

          <Link className="btn btn-sm btn-outline-primary mt-auto" href={"/productos/" + producto.id}>
            Ver detalles
          </Link>
        </div>
      </div>
    </div>
  );
}