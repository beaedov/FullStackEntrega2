"use client";

import Link from "next/link";
import { useState } from "react";
import { crear, obtenerTodos } from "@/data/datos";

type Usuario = { correo: string };

export default function Registro() {
  // Estado: un objeto con todos los campos del formulario
  const [form, setForm] = useState({
    nombre: "",
    apellidos: "",
    correo: "",
    clave: "",
    confirmar: "",
  });
  const [error, setError] = useState("");
  const [registrado, setRegistrado] = useState(false);

  // Actualiza el campo que el usuario está escribiendo (usa el "name" del input)
  function manejarCambio(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function registrar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Validaciones
    if (!form.nombre || !form.apellidos || !form.correo || !form.clave) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    if (form.clave !== form.confirmar) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    const usuarios: Usuario[] = obtenerTodos("usuarios");
    if (usuarios.some((u) => u.correo === form.correo)) {
      setError("Ya existe una cuenta con ese correo.");
      return;
    }

    // Si todo está bien, guardamos el usuario en la "base de datos"
    crear("usuarios", {
      nombre: form.nombre,
      apellidos: form.apellidos,
      correo: form.correo,
      clave: form.clave,
      rol: "cliente",
    });
    setError("");
    setRegistrado(true);
  }

  // Si ya se registró, mostramos el mensaje de éxito en vez del formulario
  if (registrado) {
    return (
      <div className="container py-5">
        <div className="alert alert-success text-center mx-auto" style={{ maxWidth: 500 }}>
          <h1 className="h4">¡Cuenta creada con éxito!</h1>
          <p>Ya puedes iniciar sesión.</p>
          <Link href="/login" className="btn btn-success">Iniciar sesión</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card border-0 shadow-sm p-4">
            <h1 className="h3 text-center mb-4">Crear cuenta</h1>

            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={registrar}>
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" id="nombre" name="nombre" className="form-control"
                    value={form.nombre} onChange={manejarCambio} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="apellidos" className="form-label">Apellidos</label>
                  <input type="text" id="apellidos" name="apellidos" className="form-control"
                    value={form.apellidos} onChange={manejarCambio} />
                </div>
                <div className="col-12">
                  <label htmlFor="correo" className="form-label">Correo</label>
                  <input type="email" id="correo" name="correo" className="form-control"
                    value={form.correo} onChange={manejarCambio} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="clave" className="form-label">Contraseña</label>
                  <input type="password" id="clave" name="clave" className="form-control"
                    value={form.clave} onChange={manejarCambio} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="confirmar" className="form-label">Repetir contraseña</label>
                  <input type="password" id="confirmar" name="confirmar" className="form-control"
                    value={form.confirmar} onChange={manejarCambio} />
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