
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
            <div className="container py-5">

                    <h2>
                        {producto.name}  - {producto.price}
                        <br />
                        Hay en stock : {producto.stocked? "Si" : "No"}
                    </h2>
                    <img width={300} src={url_imagen} alt={producto.name} />

                </div>
        );
    }
}