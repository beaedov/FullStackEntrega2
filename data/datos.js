// BD simulada de Radiadores del Puerto

const categoriasIniciales = [
  { id: "1", nombre: "Radiadores para autos", icono: "bi-car-front" },
  { id: "2", nombre: "Radiadores para camiones", icono: "bi-truck" },
  { id: "3", nombre: "Repuestos y accesorios", icono: "bi-gear" },
  { id: "4", nombre: "Servicios de taller", icono: "bi-tools" },
];

const productosIniciales = [
  {
    id: "1",
    nombre: "Radiador Toyota Yaris 2014-2020",
    categoriaId: "1",
    precio: 89990,
    precioOferta: 74990,
    stock: 8,
    stockCritico: 3,
    descripcion: "Radiador de aluminio con estanques plásticos.",
    imagen: "",
  },
  {
    id: "2",
    nombre: "Radiador camión Mercedes-Benz Atego",
    categoriaId: "2",
    precio: 459990,
    precioOferta: null,
    stock: 2,
    stockCritico: 1,
    descripcion: "Radiador de cobre-bronce para uso pesado.",
    imagen: "",
  },
  {
    id: "3",
    nombre: "Refrigerante orgánico 4 litros",
    categoriaId: "3",
    precio: 14990,
    precioOferta: null,
    stock: 25,
    stockCritico: 8,
    descripcion: "Refrigerante listo para usar, protege hasta -36 °C.",
    imagen: "",
  },
  {
    id: "4",
    nombre: "Reparación de fuga en radiador",
    categoriaId: "4",
    precio: 35000,
    precioOferta: null,
    stock: 99,
    stockCritico: 0,
    descripcion: "Soldadura y sellado de fugas. Incluye prueba de presión.",
    imagen: "",
  },
];


const usuariosIniciales = [
  {
    id: "1",
    nombre: "Admin",
    apellidos: "Radiadores del Puerto",
    correo: "admin@radiadoresdelpuerto.cl",
    clave: "admin123",
    rol: "admin",
  },
  {
    id: "2",
    nombre: "Benjamin",
    apellidos: "Aedo",
    correo: "benja@gmail.cl",
    clave: "cliente123",
    rol: "cliente",
  },
];

const ordenesIniciales = [];

// junta todas las tablas en un solo objeto
const datosIniciales = {
  categorias: categoriasIniciales,
  productos: productosIniciales,
  usuarios: usuariosIniciales,
  ordenes: ordenesIniciales,
};

// Persistencia con localStorage 

const PREFIJO = "radiadores_";

// Devuelve true solo si el código corre en el navegador
function hayNavegador() {
  return typeof window !== "undefined";
}

// Guarda una lista completa en el localStorage
function guardarColeccion(coleccion, lista) {
  if (!hayNavegador()) return;
  window.localStorage.setItem(PREFIJO + coleccion, JSON.stringify(lista));
}

// Lee una lista del localStorage.
function leerColeccion(coleccion) {
  const iniciales = datosIniciales[coleccion];
  if (!hayNavegador()) return iniciales;

  const guardado = window.localStorage.getItem(PREFIJO + coleccion);
  if (guardado === null) {
    guardarColeccion(coleccion, iniciales);
    return iniciales;
  }
  return JSON.parse(guardado);
}



// CRUD 

// Calcula el siguiente id: busca el más alto y le suma 1
function nuevoId(lista) {
  let mayor = 0;
  lista.forEach((item) => {
    if (Number(item.id) > mayor) {
      mayor = Number(item.id);
    }
  });
  return String(mayor + 1);
}

// LEER todos
export function obtenerTodos(coleccion) {
  return leerColeccion(coleccion);
}

// LEER uno por su id
export function obtenerPorId(coleccion, id) {
  const lista = leerColeccion(coleccion);
  return lista.find((item) => item.id === String(id));
}

// CREAR
export function crear(coleccion, datos) {
  const lista = leerColeccion(coleccion);
  const nuevo = { ...datos, id: nuevoId(lista) };
  lista.push(nuevo);
  guardarColeccion(coleccion, lista);
  return nuevo;
}

// ACTUALIZAR
export function actualizar(coleccion, id, cambios) {
  const lista = leerColeccion(coleccion);
  const posicion = lista.findIndex((item) => item.id === String(id));
  if (posicion === -1) return null;

  lista[posicion] = { ...lista[posicion], ...cambios };
  guardarColeccion(coleccion, lista);
  return lista[posicion];
}

// ELIMINAR
export function eliminar(coleccion, id) {
  const lista = leerColeccion(coleccion);
  const nuevaLista = lista.filter((item) => item.id !== String(id));
  guardarColeccion(coleccion, nuevaLista);
  return nuevaLista.length < lista.length;
}

// Ayudas para las páginas 

export function obtenerProductos() {
  return obtenerTodos("productos");
}

export function obtenerProducto(id) {
  return obtenerPorId("productos", id);
}

// 89990 → "$89.990"
export function formatearPrecio(valor) {
  return "$" + Number(valor).toLocaleString("es-CL");
}

// Solo los productos que tienen precio de oferta
export function obtenerProductosEnOferta() {
  return obtenerProductos().filter((p) => p.precioOferta !== null);
}

