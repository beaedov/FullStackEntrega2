import Link from "next/link";
export const instant = false;


function ItemProducto({ producto }) {
  const url = "productos/" + producto.id;
  const imagen = producto.image_name? producto.image_name : "producto_sin_foto.png";
  const url_imagen = "/imagenes_productos/" + imagen ;

  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        <img src={url_imagen} alt={producto.name} className="card-img-top" style={{ height: 180, objectFit: "cover" }} />
        <div className="card-body">
          <h3 className="h6 card-title">{producto.name}</h3>
          <p className="fw-bold text-primary">{producto.price}</p>
          <Link className="btn btn-sm btn-outline-primary" href={url}>Ver detalles</Link>
        </div>
      </div>
    </div>
  )
}


function ListaProductos({ productos }) {
  const lista = [];
  productos.forEach(producto => {
    lista.push(
      <ItemProducto producto={producto} key={producto.id}/>
    );
  });
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {lista}
    </div>
  );
}


export default async function Productos() {
  const url = "http://localhost:4000/products/" ;
  const response = await fetch(url);
  const productos = await response.json();
  return (
    <div className="container py-5">

        <h1 className="h2 mb-4">Productos</h1>
        <ListaProductos productos={productos} />
      </div>
  );
}