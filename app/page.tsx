import Link from "next/link";

// Servicios que ofrece el taller (más adelante vendrán del archivo de datos)
const servicios = [
  {
    icono: "bi-tools",
    titulo: "Reparación",
    texto: "Reparamos fugas, panales tapados y estanques dañados en radiadores de todo tipo.",
  },
  {
    icono: "bi-droplet-half",
    titulo: "Mantención",
    texto: "Limpieza, lavado del sistema de refrigeración y cambio de refrigerante.",
  },
  {
    icono: "bi-box-seam",
    titulo: "Venta",
    texto: "Radiadores nuevos y alternativos para autos, camionetas, camiones y maquinaria.",
  },
];

// Tarjeta reutilizable para mostrar un servicio
function TarjetaServicio({ icono, titulo, texto }: { icono: string; titulo: string; texto: string }) {
  return (
    <div className="col-12 col-md-4">
      <div className="card h-100 border-0 shadow-sm text-center p-4 tarjeta-servicio">
        <i className={`bi ${icono} icono-servicio text-primary`}></i>
        <h3 className="h5 mt-3">{titulo}</h3>
        <p className="text-secondary mb-0">{texto}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Portada */}
      <section className="hero py-5">
        <div className="container py-lg-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-7">
              <h1 className="display-5 fw-bold">Tu motor siempre a la temperatura correcta</h1>
              <p className="lead my-4">
                Más de 20 años reparando y vendiendo radiadores en el puerto.
                Diagnóstico rápido y garantía en todos nuestros trabajos.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <Link href="/productos" className="btn btn-light btn-lg">
                  Ver productos
                </Link>
                <Link href="/contacto" className="btn btn-outline-light btn-lg">
                  Cotizar reparación
                </Link>
              </div>
            </div>
            <div className="col-lg-5 text-center">
              <img
                src="/RDP.jpg"
                alt="Radiadores del Puerto"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Nuestros servicios</h2>
        <div className="row g-4">
          {servicios.map((s) => (
            <TarjetaServicio key={s.titulo} icono={s.icono} titulo={s.titulo} texto={s.texto} />
          ))}
        </div>
      </section>

      {/* Llamado a la acción */}
      <section className="bg-white py-5">
        <div className="container text-center">
          <h2 className="h3">¿Tu auto se está calentando?</h2>
          <p className="text-secondary">Tráelo al taller o escríbenos y te ayudamos a encontrar el problema.</p>
          <Link href="/contacto" className="btn btn-primary btn-lg">
            <i className="bi bi-chat-dots me-2"></i>Contáctanos
          </Link>
        </div>
      </section>
    </>
  );
}
