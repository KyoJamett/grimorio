import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCards } from "../hooks/useCards";

export function FormatPage() {
  const { escuelas, civilizaciones } = useCards();
  const location = useLocation();
  const navigate = useNavigate();

  function getFormatParams() {
    if (location.state) {
      return location.state.formatParam;
    } else {
      navigate("/");
    }
  }

  const formatParams = getFormatParams();
  let formato;

  switch (formatParams) {
    case "escuelas":
      formato = escuelas;
      break;
    case "civilizaciones":
      formato = civilizaciones;
      break;

    default:
      break;
  }

  // Verificar si formato está definido antes de intentar acceder a sus propiedades
  if (!formato) {
    return <div className="lds-dual-ring"></div>;
  }

  return (
    <div className="container my-4">
      <h3>{formato.name}</h3>
      <p className="justificado">{formato.intro}</p>
      <p className="justificado">{formato.details}</p>
      <div className="grid-container">
        {formato.ediciones.map((element) => (
          <div className="grid-item" key={element.ed}>
            <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center">
              <img
                src={`https://api.myl.cl/static/${element.edImg}`}
                alt={element.ed}
                className="img-fluid"
                style={{
                  width: "150px",
                  height: "150px",
                  objectFit: "contain",
                }}
              />
              <NavLink
                className="btn btn-dark mt-2 d-flex justify-content-center"
                to={`/grimorio/cartas/${element.ed}`}
                state={{ ed: element.ed }}
              >
                Ver
              </NavLink>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
