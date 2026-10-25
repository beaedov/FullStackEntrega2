
export const instant = false;
import { notFound } from "next/navigation"

// debe ser asincrono (async) para poder esperar la respuesta de la API
export default async function Producto({ params }) {
    const { slug } = await params;
    const url = "http://localhost:4000/products/" + slug;
    const response = await fetch(url);
    const producto = await response.json();
    const imagen = producto.image_name? producto.image_name : "producto_sin_foto.png";
    const url_imagen = "/imagenes_productos/" + imagen ;

    if (!producto.id) {
        notFound();
    }
    else {
        return (
            <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
                <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

                    <h2>
                        {producto.name}  - {producto.price}
                        <br />
                        Hay en stock : {producto.stocked? "Si" : "No"}
                    </h2>
                    <img width={300} src={url_imagen} alt={producto.name} />

                </main>
            </div>
        );
    }
}