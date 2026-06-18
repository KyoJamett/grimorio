export const FormatInfo = ({ formato }) => {
  return (
    <div className="container-md my-4">
      <h3>Sobre el bloque</h3>
      <p className="justificado">{formato.intro}</p>
      <p className="justificado">{formato.details}</p>
    </div>
  );
};
