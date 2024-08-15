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
            <div className="col">
              Axis Mundi
              <NavLink
                className="btn btn-dark"
                to={"/grimorio/cartas"}
                state={{ ed: "axis-mundi" }}
              >
                Dark
              </NavLink>
            </div>
            <div className="col">
              Hijos del Sol
              <NavLink
                className="btn btn-dark"
                to={"/grimorio/cartas"}
                state={{ ed: "hijos-del-sol" }}
              >
                Dark
              </NavLink>
            </div>
            <div className="col">
              Legado Gótico
              <NavLink
                className="btn btn-dark"
                to={"/grimorio/cartas"}
                state={{ ed: "legado-gotico" }}
              >
                Dark
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
