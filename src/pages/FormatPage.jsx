import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useCards } from "../hooks/useCards";
import { UseFormats } from "../hooks/useFormats";
import { EditionGrid } from "../components/EditionGrid";

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
        <EditionGrid ediciones={formato.ediciones}/>
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
