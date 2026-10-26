import Link from "next/link";
import { articulos } from "@/data/blog";

export default function Blog() {
  return (
    <div className="container py-5">
      <h1 className="h2">Blog</h1>
      <p className="text-secondary mb-4">Consejos para cuidar el sistema de refrigeración de tu vehículo.</p>

      <div className="row g-4">
        {articulos.map((articulo) => (
          <div className="col-md-6" key={articulo.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <i className={`bi ${articulo.icono} fs-1 text-primary`}></i>
                <h2 className="h5 mt-2">{articulo.titulo}</h2>
                <p className="text-secondary small">{articulo.fecha}</p>
                <p>{articulo.resumen}</p>
                <Link href={"/blog/" + articulo.id} className="btn btn-outline-primary mt-auto align-self-start">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}