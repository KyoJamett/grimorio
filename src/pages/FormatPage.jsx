import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCards } from "../hooks/useCards";

export function FormatPage() {
  const { documentos, furia, escuelas, civilizaciones, expediciones, pb } =
    useCards();
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
    case "furia":
      formato = furia;
      break;
    case "escuelas":
      formato = escuelas;
      break;
    case "civilizaciones":
      formato = civilizaciones;
      break;
    case "expediciones":
      formato = expediciones;
      break;
    case "pb":
      formato = pb;
      break;

    default:
      break;
  }

  // Verificar si formato está definido antes de intentar acceder a sus propiedades
  if (!formato) {
    return <div className="lds-dual-ring"></div>;
  }

  // Encuentra la categoría de documentos correspondiente al formato actual
  const categoriaDocumentos = documentos.find(
    (cat) => cat.categoria === formato.folder
  );

  return (
    <>
      <div className="container my-4">
        <h3>{formato.name}</h3>
        <p className="justificado">{formato.intro}</p>
        <p className="justificado">{formato.details}</p>
        <div className="grid-container">
          {formato.ediciones.map((element) => (
            <div className="grid-item" key={element.ed}>
              <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center black">
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
                  className="btn btn-warning mt-2 d-flex justify-content-center"
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
      <div className="container my-4">
        <h4>Documentos</h4>
        <div>
          {categoriaDocumentos ? (
            <ul>
              {categoriaDocumentos.documentos.map((doc, index) => (
                <>
                  <li key={index}>
                    <a
                      href={`docs/${formato.folder}/${doc.file}`} // Ruta construida dinámicamente
                      className="btn btn-primary"
                      download
                    >
                      Descargar {doc.name}
                    </a>
                  </li>
                  <br></br>
                </>
              ))}
            </ul>
          ) : (
            <p>No hay documentos disponibles para esta categoría.</p>
          )}
        </div>
      </div>
    </>
  );
}