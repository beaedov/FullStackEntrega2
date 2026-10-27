// Datos estáticos de Radiadores del Puerto

export const categorias = [
  { id: "1", nombre: "Radiadores para autos" },
  { id: "2", nombre: "Radiadores para camiones" },
  { id: "3", nombre: "Repuestos y accesorios" },
  { id: "4", nombre: "Servicios de taller" },
];

export const productos = [
  {
    id: "1",
    nombre: "Radiador Toyota Yaris 2014-2020",
    categoriaId: "1",
    precio: 89990,
    precioOferta: 74990,
    stock: 8,
    stockCritico: 3,
    descripcion: "Radiador de aluminio con estanques plásticos.",
    imagen: "toyotaRadiador.jpg",
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
    imagen: "camionRadiador.jpg",
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
    imagen: "refrigerante.jpg",
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
    imagen: "fugaRadiador.jpg",
  },
];

// Muestra el precio con formato chileno: 89990 → "$89.990"
export function formatearPrecio(valor) {
  return "$" + Number(valor).toLocaleString("es-CL");
}