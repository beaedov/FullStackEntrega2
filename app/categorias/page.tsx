import TarjetaProducto from "@/components/TarjetaProducto";
import { categorias, productos } from "@/data/datos";

export default function Categorias() {
  return (
    <div className="container py-5">
      <h1 className="h2 mb-4">Categorías</h1>

      {categorias.map((categoria) => {
        // Solo los productos de esta categoría
        const productosDeCategoria = productos.filter(
          (producto) => producto.categoriaId === categoria.id
        );

        return (
          <section key={categoria.id} className="mb-5">
            <h2 className="h4 border-bottom pb-2 mb-3">{categoria.nombre}</h2>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
              {productosDeCategoria.map((producto) => (
                <TarjetaProducto key={producto.id} producto={producto} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}