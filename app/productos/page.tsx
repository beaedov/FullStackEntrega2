import TarjetaProducto from "@/components/TarjetaProducto";
import Buscador from "@/components/Buscador";
import { productos } from "@/data/datos";

export default function Productos() {
  return (
    <div className="container py-5">
      <h1 className="h2 mb-4">Productos</h1>

      <Buscador />

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {productos.map((producto) => (
          <TarjetaProducto key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}