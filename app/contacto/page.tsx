export default function Contacto() {
  return (
    <div className="container py-5">
      <h1 className="h2 mb-2">Contacto</h1>
      <p className="text-secondary mb-4">
        ¿Tienes dudas o quieres cotizar una reparación? Escríbenos o visítanos en el taller.
      </p>

      <div className="row g-4">
        {/* Columna izquierda*/}
        <div className="col-12 col-lg-5">
          <div className="card h-100 border-0 shadow-sm p-4">
            <h2 className="h5 mb-3">Radiadores del Puerto</h2>
            <ul className="list-unstyled mb-0">
              <li className="mb-3">
                <i className="bi bi-geo-alt text-primary me-2"></i>
                Av. Brasil 1234, Valparaíso
              </li>
              <li className="mb-3">
                <i className="bi bi-telephone text-primary me-2"></i>
                +56 9 1234 5678
              </li>
              <li className="mb-3">
                <i className="bi bi-envelope text-primary me-2"></i>
                contacto@radiadoresdelpuerto.cl
              </li>
              <li>
                <i className="bi bi-clock text-primary me-2"></i>
                Lun a Vie 9:00 a 18:30
              </li>
            </ul>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="col-12 col-lg-7">
          <div className="card border-0 shadow-sm p-4">
            <h2 className="h5 mb-3">Envíanos un mensaje</h2>
            <form>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" id="nombre" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="email" id="correo" className="form-control" required />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea id="mensaje" className="form-control" rows={4} required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="bi bi-send me-2"></i>Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}