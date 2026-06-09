import { useLocation, useNavigate } from "react-router-dom";
import { useFormats, useDocuments } from "../hooks/useResource";
import { EditionGrid } from "../components/EditionGrid";
import { DocumentList } from "../components/DocumentList";
import { FormatInfo } from "../components/FormatInfo";
import { Loading } from "../components/Loading";

export function FormatPage() {
  const { formatos } = useFormats();
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

  const { documentos } = useDocuments(formato?.folder);

  // Verificar si formato está definido antes de intentar acceder a sus propiedades
  if (!formato) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <>
      {/*----------------------------------------------- Componentes de info del formato */}
      <FormatInfo formato={formato} />

      {/* --------------------------------------------------Componente grid de ediciones*/}
      <EditionGrid ediciones={formato.ediciones} />

      {/* --------------------------------------------------------Componente de documentos */}
      <DocumentList documentos={documentos} formato={formato} />
    </>
  );
}
