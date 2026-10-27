import Link from "next/link";

export default function Registro() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm p-4">
            <h1 className="h3 text-center mb-4">Crear cuenta</h1>

            <form>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" id="nombre" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="apellidos" className="form-label">Apellidos</label>
                  <input type="text" id="apellidos" className="form-control" required />
                </div>
                <div className="col-12">
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input type="email" id="correo" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="clave" className="form-label">Contraseña</label>
                  <input type="password" id="clave" className="form-control" minLength={6} required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="confirmar" className="form-label">Repetir contraseña</label>
                  <input type="password" id="confirmar" className="form-control" minLength={6} required />
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100 mt-4">Crear cuenta</button>
            </form>

            <p className="text-center mt-3 mb-0">
              ¿Ya tienes cuenta? <Link href="/login">Inicia sesión</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}