
type BuscadorProps = {
  valor: string;
  alCambiar: (texto: string) => void;
};

export default function Buscador({ valor, alCambiar }: BuscadorProps) {
  return (
    <div className="input-group mb-4">
      <span className="input-group-text">
        <i className="bi bi-search"></i>
      </span>
      <input
        type="text"
        className="form-control"
        placeholder="Buscar productos..."
        value={valor}
        onChange={(e) => alCambiar(e.target.value)}
      />
    </div>
  );
}