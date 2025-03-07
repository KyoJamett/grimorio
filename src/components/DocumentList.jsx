export const DocumentList = ({documentos, formato}) => {

    return(
        <div className="container my-4">
            <h4>Documentos</h4>
            <div>
            {documentos ? (
                <ul>
                {documentos.map((doc) => (
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
        </div>
    )
}