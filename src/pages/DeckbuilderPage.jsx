export const DeckbuilderPage = () => {

    return (
        <>
        <div className="container-pro no-limit my-5 justify-content-center">
            <h2>Deckbuilder</h2>
            <div className="row border">
                <div className="col-3 border pb-2">
                    <div>
                    <h4>Mazo</h4>
                    <div className="d-flex flex-column gap-2">
                    <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Bloque
                    </button>
                    <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Formato
                    </button>
                    </div>
                    </div>
                <div>
                    <h5>Aliados</h5>
                </div>
                <div>
                    <h5>Talismanes</h5>
                </div>
                <div>
                    <h5>Totems</h5>
                </div>
                <div>
                    <h5>Armas</h5>
                </div>
                <div>
                    <h5>Oros</h5>
                </div>
                <div className="row">
                    <h5>Total</h5>
                    <h5>Av. Coste</h5>
                </div>
            </div>

            <div className="col-9 border">
                <h4>Pool de cartas</h4>

                <div className="row g-2 mb-3 align-items-center">
                  <div className="col-12 col-md-4">
                    <input
                      className="form-control custom-search-input"
                      type="search"
                      placeholder="Buscar carta..."
                      aria-label="Search"
                    />
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Tipo
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Todos</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Raza
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Todos</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Frecuencia
                      </button>
                      <div className="dropdown-menu">
                        <a className="dropdown-item" href="#" onClick={(e) => e.preventDefault()}>Todos</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="table-responsive">
  <table className="table table-hover table-striped rounded-3 border">
    <thead className="table-responsive table-dark">
      <tr>
        <th style={{width: "10%"}}>N°</th>
        <th style={{width: "30%"}}>Nombre</th>
        <th style={{width: "15%"}}>Tipo</th>
        <th style={{width: "15%"}}>Raza</th>
        <th style={{width: "10%"}}>Coste</th>
        <th style={{width: "15%"}}>Frecuencia</th>
        <th style={{width: "5%"}}>+</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>Morgana</td>
        <td>Aliado</td>
        <td>Faerie</td>
        <td>4</td>
        <td>Real</td>
        <td>+</td>
      </tr>
    </tbody>
  </table>
</div>
            </div>

            </div>
        </div>
        </>
    );
}