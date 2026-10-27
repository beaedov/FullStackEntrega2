// Barra de búsqueda
export default function Buscador() {
  return (
    <div className="input-group mb-4">
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
      <input type="text" className="form-control" placeholder="Buscar productos..." />
    </div>
  );
}