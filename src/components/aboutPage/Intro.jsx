export const Intro = ({ intro }) => {
  return (
    <div className="container my-4">
      <h2>Biblioteca Eterna</h2>
      <h6 className="cursiva">Sabiduría Infinita</h6>
      <p className="justificado">{intro.text}</p>
    </div>
  );
};
