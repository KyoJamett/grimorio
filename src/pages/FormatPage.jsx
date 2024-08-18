import { NavLink } from "react-router-dom";
import { useCards } from "../hooks/useCards";

export function FormatPage() {
  const { format } = useCards();

  return (
    <>
      <div className="container my-4">
        <div className="container my-4">
          <h3>{format.name}</h3>
          <div className="row">
            <div className="row">
              <p>{format.intro}</p>
            </div>
            <div className="row">
              <p>{format.details}</p>
            </div>
            <div className="row">
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center">
                  <img
                    src="https://api.myl.cl/static/bushido.png"
                    alt="Bushido"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "bushido" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center ">
                  <img
                    src="https://api.myl.cl/static/sol_naciente.png"
                    alt="Sol Naciente"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "sol-naciente" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center">
                  <img
                    src="https://api.myl.cl/static/dominio.png"
                    alt="Dominio"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "dominio" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
            </div>
            <div className="row">
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center">
                  <img
                    src="https://api.myl.cl/static/contraataque.png"
                    alt="Contraataque"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "contraataque" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center">
                  <img
                    src="https://api.myl.cl/static/aguila_imperial.png"
                    alt="Aguila"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "aguila-imperial" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center">
                  <img
                    src="https://api.myl.cl/static/steampunk.png"
                    alt="Steampunk"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "steampunk" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
            </div>
            <div className="row">
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center">
                  <img
                    src="https://api.myl.cl/static/axis-mundi.png"
                    alt="Axis"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "axis-mundi" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center">
                  <img
                    src="https://api.myl.cl/static/hijos_del_sol.png"
                    alt="Hijos del Sol"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "hijos-del-sol" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
              <div
                className="col d-flex flex-column align-items-center"
                style={{ maxWidth: "300px" }}
              >
                <span className="border border-secondary rounded p-3 mb-3 align-items-center">
                  <img
                    src="https://api.myl.cl/static/legado-gotico.png"
                    alt="Legado"
                    className="img-fluid" // Opcional: Ajusta el tamaño de la imagen si es necesario
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <NavLink
                    className="btn btn-dark mt-2 d-flex justify-content-center"
                    to={"/grimorio/cartas"}
                    state={{ ed: "legado-gotico" }}
                  >
                    Ver
                  </NavLink>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
