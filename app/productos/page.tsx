import Link from "next/link";
export const instant = false;


function ItemProducto({ producto }) {
  const url = "productos/" + producto.id;
  const imagen = producto.image_name? producto.image_name : "producto_sin_foto.png";
  const url_imagen = "/imagenes_productos/" + imagen ;

  return (
    <div>
      <img width={100} src={url_imagen} alt={producto.name} />
      <br />
      {producto.name} - {producto.price} - <br />
      <Link className="underline" href={url}>ver detalles</Link>
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
    <div className="grid h-56 grid-cols-3 content-start gap-4">
      {lista}
    </div>
  );
}


export default async function Productos() {
  const url = "http://localhost:4000/products/" ;
  const response = await fetch(url);
  const productos = await response.json();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

        <h2>
          <ListaProductos productos={productos} />
        </h2>
      </main>
    </div>
  );
}