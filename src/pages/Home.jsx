import { NavLink } from "react-router-dom";
import { useCards } from "../hooks/useCards";

export function Home() {
  const { homeText, escuelas } = useCards();

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <p className="text-start">{homeText.text}</p>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col">
              Hijos del Sol
              <NavLink
                className="btn btn-dark"
                to={`/grimorio/cartas/${escuelas.sol}`}
                state={{ ed: "hijos-del-sol" }}
              >
                Dark
              </NavLink>
            </div>
            <div className="col">
              Legado Gótico
              <NavLink
                className="btn btn-dark"
                to={`/grimorio/cartas/${escuelas.leg}`}
                state={{ ed: "legado-gotico" }}
              >
                Dark
              </NavLink>
            </div>
            <div className="col">
              Águila Imperial
              <NavLink
                className="btn btn-dark"
                to={`/grimorio/cartas/${escuelas.agu}`}
                state={{ ed: "aguila-imperial" }}
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
