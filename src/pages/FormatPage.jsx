import { NavLink } from "react-router-dom";
import { useCards } from "../hooks/useCards";

export function FormatPage() {
  const { format, escuelas } = useCards();

  return (
    <>
      <div className="container my-4">
        <h3>{format.name}</h3>
        <p>{format.intro}</p>
        <p>{format.details}</p>
        <div className="grid-container">
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/bushido.png"
                alt="Bushido"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.bu}`}
                state={{ ed: "bushido" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/sol_naciente.png"
                alt="Sol Naciente"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.sn}`}
                state={{ ed: "sol-naciente" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/dominio.png"
                alt="Dominio"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.dom}`}
                state={{ ed: "dominio" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/contraataque.png"
                alt="Contraataque"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.con}`}
                state={{ ed: "contraataque" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/aguila_imperial.png"
                alt="Aguila"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.agu}`}
                state={{ ed: "aguila-imperial" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/steampunk.png"
                alt="Steampunk"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.stm}`}
                state={{ ed: "steampunk" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/axis-mundi.png"
                alt="Axis"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.axs}`}
                state={{ ed: "axis-mundi" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/hijos_del_sol.png"
                alt="Hijos del Sol"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.sol}`}
                state={{ ed: "hijos-del-sol" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
          <div className="grid-item">
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src="https://api.myl.cl/static/legado-gotico.png"
                alt="Legado"
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${escuelas.leg}`}
                state={{ ed: "legado-gotico" }}
              >
                Ver
              </NavLink>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
