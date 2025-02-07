import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCards } from "../hooks/useCards";
import { UseFormats } from "../hooks/useFormats";

export function FormatPage() {
  // const { furia, escuelas, civilizaciones, expediciones, pb, pe } =
  //   useCards();
  const {documentos, formatos} = UseFormats()
  const location = useLocation();
  const navigate = useNavigate();

  function getFormatParams() {
    if (location.state) {
      return location.state.formatParam;
    } else {
      navigate("/");
    }
  }

  //Obtengo el formato a partir de los parámetros enviados al hacer click en la barra de navegacion
  const formato = formatos[getFormatParams()];

  // Verificar si formato está definido antes de intentar acceder a sus propiedades
  if (!formato) {
    return (
      <>
        <div className="container my-4">
          <div className="lds-dual-ring"></div>
        </div>
      </>
    );
  }

  // Encuentra la categoría de documentos correspondiente al formato actual
  const categoriaDocumentos = documentos.find(
    (cat) => cat.categoria === formato.folder
  );

  return (
    <>
      <div className="container my-4">
        {/*----------------------------------------------- Componentes de info del formato */}
        <h3>{formato.name}</h3>
        <p className="justificado">{formato.intro}</p>
        <p className="justificado">{formato.details}</p>
        {/* Fin componentes de info del formato */}
        {/* --------------------------------------------------Componente grid de ediciones*/ }
        <div className="grid-container">
          {formato.ediciones.map((element) => (
            <div className="grid-item" key={element.ed}>
              <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center black">
                <img
                  src={`${element.edImg}`}
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
                  to={`/cartas/${element.ed}`}
                  state={{ ed: element.ed }}
                >
                  Ver
                </NavLink>
              </span>
            </div>
          ))}
        </div>
        {/* Fin componente grid de ediciones*/ }
      </div>
      <div className="container my-4">
        {/* --------------------------------------------------------Componente de documentos */ }
        <h4>Documentos</h4>
        <div>
          {categoriaDocumentos ? (
            <ul>
              {categoriaDocumentos.documentos.map((doc) => (
                <li key={doc.id} className="li_docs">
                  <a
                    href={`docs/${formato.folder}/${doc.file}`} // Ruta construida dinámicamente
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar {doc.name}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p>No hay documentos disponibles para esta categoría.</p>
          )}
        </div>
        {/* ---------------------------------------------Fin componente grid de ediciones*/ }
      </div>
    </>
  );
}
