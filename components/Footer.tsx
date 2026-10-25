import Link from "next/link";

// Pie de página que se muestra en todas las vistas de la tienda
export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-auto">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold">
              <i className="bi bi-thermometer-snow text-info me-2"></i>
              Radiadores del Puerto
            </h5>
            <p className="text-secondary mb-0">
              Venta, reparación y mantención de radiadores para autos, camiones y
              maquinaria.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="text-uppercase">Navegación</h6>
            <ul className="list-unstyled">
              <li><Link className="link-light" href="/productos">Productos</Link></li>
              <li><Link className="link-light" href="/ofertas">Ofertas</Link></li>
              <li><Link className="link-light" href="/nosotros">Nosotros</Link></li>
              <li><Link className="link-light" href="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="text-uppercase">Contacto</h6>
            <ul className="list-unstyled text-secondary">
              <li><i className="bi bi-envelope me-2"></i>contacto@radiadoresdelpuerto.cl</li>
              <li><i className="bi bi-telephone me-2"></i>+56 9 1234 5678</li>
              <li><i className="bi bi-clock me-2"></i>Lun a Vie 9:00 a 18:30</li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />
        <p className="text-center text-secondary small mb-0">
          © {anio} Radiadores del Puerto. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
