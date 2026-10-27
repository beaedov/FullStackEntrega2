import TarjetaProducto from "@/components/TarjetaProducto";
import { productos } from "@/data/datos";

// Solo los productos que tienen precio de oferta
const ofertas = productos.filter((producto) => producto.precioOferta !== null);

export default function Ofertas() {
  return (
    <div className="container py-5">
      <h1 className="h2">
        <i className="bi bi-tag-fill text-danger me-2"></i>Ofertas
      </h1>
      <p className="text-secondary mb-4">Precios rebajados en radiadores y repuestos.</p>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {ofertas.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}