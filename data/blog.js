// Artículos del blog de RDP

export const articulos = [
  {
    id: "1",
    titulo: "¿Por qué se calienta el motor de mi auto?",
    fecha: "2026-10-10",
    resumen: "Las 5 causas más comunes del recalentamiento y cómo detectarlas a tiempo.",
    icono: "bi-thermometer-high",
    contenido: [
      "El recalentamiento del motor es una de las fallas más comunes que recibimos en el taller, y si no se atiende a tiempo puede terminar en una reparación muy costosa.",
      "La causa más frecuente es el bajo nivel de refrigerante, ya sea por una fuga en el radiador, en las mangueras o en la bomba de agua. Revisa el nivel con el motor frío al menos una vez al mes.",
      "Otras causas habituales son un radiador con el panal tapado por sarro, un termostato que no abre, un electroventilador que no funciona o una tapa de radiador que ya no mantiene la presión.",
      "Si ves que la aguja de temperatura sube más de lo normal, detén el auto en un lugar seguro y no abras la tapa del radiador con el motor caliente. Tráelo al taller y te hacemos un diagnóstico.",
    ],
  },
  {
    id: "2",
    titulo: "¿Cada cuánto cambiar el refrigerante?",
    fecha: "2026-10-20",
    resumen: "Por qué el refrigerante pierde sus propiedades y cuándo conviene cambiarlo.",
    icono: "bi-droplet-half",
    contenido: [
      "El refrigerante no solo evita que el motor se caliente: también protege el sistema contra la corrosión y el congelamiento.",
      "Con el tiempo pierde esas propiedades. Como regla general, se recomienda cambiarlo cada 2 años o cada 40.000 km, lo que ocurra primero, aunque siempre conviene revisar el manual del vehículo.",
      "Nunca mezcles refrigerantes de distinto tipo o color, y evita rellenar solo con agua: el agua de la llave deja sarro que tapa el panal del radiador.",
      "En Radiadores del Puerto hacemos el lavado completo del sistema y el cambio de refrigerante en menos de una hora.",
    ],
  },
];

// Busca un artículo por su id
export function obtenerArticulo(id) {
  return articulos.find((a) => a.id === String(id));
}