const valores = [
  { icono: "bi-award", titulo: "Experiencia", texto: "Más de 20 años trabajando con radiadores de todo tipo." },
  { icono: "bi-shield-check", titulo: "Garantía", texto: "Todos nuestros trabajos tienen 6 meses de garantía." },
  { icono: "bi-lightning-charge", titulo: "Rapidez", texto: "Diagnóstico el mismo día y reparaciones en 24 a 48 horas." },
];

export default function Nosotros() {
  return (
    <div className="container py-5">
      {/* Historia */}
      <div className="row align-items-center g-4 mb-5">
        <div className="col-12 col-lg-7">
          <h1 className="h2 mb-3">Sobre nosotros</h1>
          <p>
            Radiadores del Puerto nació en 2004 como un pequeño taller familiar en Valparaíso.
            Hoy reparamos y vendemos radiadores para autos, camionetas, camiones y maquinaria
            de toda la región.
          </p>
          <p className="mb-0">
            Nuestro objetivo es simple: que tu vehículo vuelva a la ruta rápido, a un precio
            justo y con un trabajo bien hecho.
          </p>
        </div>
        <div className="col-12 col-lg-5 text-center">
          <i className="bi bi-tools text-primary" style={{ fontSize: "8rem" }}></i>
        </div>
      </div>

      {/* Valores */}
      <h2 className="h4 text-center mb-4">¿Por qué elegirnos?</h2>
      <div className="row g-4">
        {valores.map((valor) => (
          <div className="col-12 col-md-4" key={valor.titulo}>
            <div className="card h-100 border-0 shadow-sm text-center p-4">
              <i className={`bi ${valor.icono} text-primary`} style={{ fontSize: "2.5rem" }}></i>
              <h3 className="h5 mt-3">{valor.titulo}</h3>
              <p className="text-secondary mb-0">{valor.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}