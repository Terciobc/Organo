import "./CampoTexto.css";

const CampoTexto = (props) => {
  const aoDigitado = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        onChange={aoDigitado}
        placeholder={props.placeholder}
        required={props.required}
        value={props.valor}
      />
    </div>
  );
};

export default CampoTexto;
