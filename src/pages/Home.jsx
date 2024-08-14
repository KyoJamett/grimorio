import { NavLink } from "react-router-dom";
import { useCards } from "../hooks/useCards";

export function Home() {
  const { homeText, handlerEdition } = useCards();

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
              <NavLink className="btn btn-dark" to={"/grimorio/cartas"}>
                Dark
              </NavLink>
            </div>
            <div className="col">
              Column
              <button type="button" className="btn btn-dark">
                Dark
              </button>
            </div>
            <div className="col">
              Column
              <button type="button" className="btn btn-dark">
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
