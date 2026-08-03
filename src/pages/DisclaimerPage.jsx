export const DisclaimerPage = () => {
  return (
    <div className="page-full-height">
      <div
        className="border rounded overflow-hidden madera text-light mx-auto mt-2"
        style={{
          flex: 1, // ← crece dentro de app-background
          width: "100%",
          maxWidth: "100vw",
          backgroundColor: "rgba(101, 67, 33, 0.75)",
          backgroundBlendMode: "multiply",
          padding: "2rem",
        }}
      >
        <div className="container my-4">
          <h3 className="bold">Descargo de responsabilidad</h3>
          <p className="mt-5 mb-4">
            Este sitio web es un proyecto portafolio personal creado de manera
            independiente y por lo tanto, no es oficial. Utiliza nombres y
            marcas asociado a Mitos y Leyendas, propiedad de Fenix Entertainment
            S.P.A. (Klu!) y sus respectivos titulares.
          </p>
          <p className="mb-4">
            Este sitio no está patrocinado ni respaldado por Fenix Entertainment
            S.P.A., Klu!, ni por ningún titular de los derechos de Mitos y
            Leyendas. Todas las marcas, nombres de cartas, ilustraciones y demás
            contenido perteneciente al juego son propiedad de sus respectivos
            dueños y se utilizan aquí únicamente con fines informativos e
            ilustrativos.
          </p>
          {/*<p className="mb-4">
            La opción de donaciones tiene como único fin colaborar con los
            costos de mantenimiento y hosting del sitio; en ningún caso
            constituye un cobro por el uso o acceso del contenido relacionado
            con Mitos y Leyendas.
          </p>*/}
        </div>
      </div>
    </div>
  );
};
