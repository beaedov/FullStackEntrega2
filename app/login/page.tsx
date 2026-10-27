"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { obtenerTodos } from "@/data/datos";

type Usuario = { id: string; nombre: string; correo: string; clave: string; rol: string };

export default function Login() {
  const router = useRouter();

  // Estado: lo que el usuario escribe y el mensaje de error
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [error, setError] = useState("");

  function iniciarSesion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // evita que la página se recargue

    // Validación de campos vacíos
    if (!correo || !clave) {
      setError("Debes ingresar tu correo y contraseña.");
      return;
    }

    // Buscamos el usuario en la "base de datos"
    const usuarios: Usuario[] = obtenerTodos("usuarios");
    const usuario = usuarios.find((u) => u.correo === correo && u.clave === clave);

    if (!usuario) {
      setError("Correo o contraseña incorrectos.");
      return;
    }

    // Guardamos quién inició sesión (sin la contraseña)
    localStorage.setItem(
      "radiadores_sesion",
      JSON.stringify({ id: usuario.id, nombre: usuario.nombre, rol: usuario.rol })
    );
    router.push("/");
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-5">
          <div className="card border-0 shadow-sm p-4">
            <h1 className="h3 text-center mb-4">Iniciar sesión</h1>

            {/* Solo se muestra si hay un error */}
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={iniciarSesion}>
              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo</label>
                <input
                  type="email"
                  id="correo"
                  className="form-control"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="clave" className="form-label">Contraseña</label>
                <input
                  type="password"
                  id="clave"
                  className="form-control"
                  value={clave}
                  onChange={(e) => setClave(e.target.value)}
                />
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