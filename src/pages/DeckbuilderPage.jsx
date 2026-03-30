export const DeckbuilderPage = () => {
  return (
    <>
      <div className="container-pro justify-content-center pt-2">
        <div className="border rounded overflow-hidden">
          <div className="row g-0">
            <div className="col-8 border">
              <div className="p-2">
                {" "}
                {/* este padding regular los margenes de la tabla pool de cartas, ajustar aqui*/}
                <div className="d-flex gap-2 mb-3 align-items-center">
                  <h4>Pool de cartas</h4>
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Bloque
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Formato
                  </button>
                </div>
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
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Todos
                        </a>
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
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Todos
                        </a>
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
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Todos
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table-responsive">
                  <table className="table table-hover table-striped rounded-3 border">
                    <thead className="table-responsive table-dark">
                      <tr>
                        <th style={{ width: "10%" }}>N°</th>
                        <th style={{ width: "30%" }}>Nombre</th>
                        <th style={{ width: "15%" }}>Tipo</th>
                        <th style={{ width: "15%" }}>Raza</th>
                        <th style={{ width: "10%" }}>Coste</th>
                        <th style={{ width: "15%" }}>Frecuencia</th>
                        <th style={{ width: "5%" }}>+</th>
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
            <div className="col-4 border pb-2">
              <div className="p-2">
                {" "}
                {/* este padding regular los margenes de los detalles del mazo, ajustar aqui*/}
                <h4>Mazo</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Aliados</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Talismanes</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Totems</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Armas</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Oros</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                </ul>
                <ul className="list-group mt-2">
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Total</span> <span>0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Costo promedio</span> <span>0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
