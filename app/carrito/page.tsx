import Link from "next/link";
import { productos, formatearPrecio } from "@/data/datos";

// Productos de ejemplo que están en el carrito
const carrito = [
  { productoId: "1", cantidad: 1 },
  { productoId: "3", cantidad: 2 },
];

export default function Carrito() {
  // Junta cada item del carrito con los datos de su producto
  const items = carrito.map((item) => {
    const producto = productos.find((p) => p.id === item.productoId)!;
    const precio = producto.precioOferta ?? producto.precio;
    return { ...item, producto, precio, subtotal: precio * item.cantidad };
  });

  // Suma todos los subtotales
  let total = 0;
  items.forEach((item) => {
    total = total + item.subtotal;
  });

  return (
    <div className="container py-5">
      <h1 className="h2 mb-4">
        <i className="bi bi-cart3 me-2"></i>Carrito de compras
      </h1>

      <div className="table-responsive">
        <table className="table align-middle bg-white shadow-sm">
          <thead className="table-dark">
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.productoId}>
                <td>{item.producto.nombre}</td>
                <td>{formatearPrecio(item.precio)}</td>
                <td>{item.cantidad}</td>
                <td>{formatearPrecio(item.subtotal)}</td>
                <td>
                  <button className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
        <Link href="/productos" className="btn btn-outline-secondary">
          Seguir comprando
        </Link>
        <div className="d-flex align-items-center gap-3">
          <span className="fs-4 fw-bold">Total: {formatearPrecio(total)}</span>
          <button className="btn btn-success btn-lg">Comprar ahora</button>
        </div>
      </div>
    </div>
  );
}