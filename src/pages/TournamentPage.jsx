export const TournamentPage = () => {
  return (
    <div className="container-fluid px-0">
      <div
        className="border rounded overflow-hidden madera text-light mx-auto mt-2"
        style={{
          width: "100%",
          maxWidth: "100vw",
          minHeight: "calc(100dvh - 120px)",
        }}
      >
        <div className="container py-4">
          <h1 className="mb-4">Gestor de Torneos</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item bg-transparent border-secondary py-2">
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-success">Crear Torneo</button>
                </div>
                <div className="col">
                  <p>Rondas Suizas</p>
                </div>
              </div>
            </li>
            <li className="list-group-item bg-transparent border-secondary py-2">
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-secondary">
                    Lista de Jugadores
                  </button>
                </div>
                <div className="col">
                  <p>Agrega y edita lista de jugadores</p>
                </div>
              </div>
            </li>
            <li className="list-group-item bg-transparent border-secondary py-2">
              <div className="row">
                <div className="col-4">
                  <button className="btn btn-info">Registro de torneos</button>
                </div>
                <div className="col">
                  <p>Historial de torneos</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
