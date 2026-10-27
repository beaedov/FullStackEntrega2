import Link from "next/link";

export default function Login() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card border-0 shadow-sm p-4">
            <h1 className="h3 text-center mb-4">Iniciar sesión</h1>

            <form>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input type="email" id="correo" className="form-control" required />
              </div>

              <div className="mb-3">
                <label htmlFor="clave" className="form-label">Contraseña</label>
                <input type="password" id="clave" className="form-control" required />
              </div>

              <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
            </form>

            <p className="text-center mt-3 mb-0">
              ¿No tienes cuenta? <Link href="/registro">Regístrate aquí</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}