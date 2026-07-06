import { useEffect, useState } from "react";

export function useFormats() {
  const [formatos, setFormatos] = useState({});
  const [loadingFormats, setLoadingFormats] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/formats`)
      .then(res => res.json())
      .then(data => {
        setFormatos(data);
        setLoadingFormats(false);
      }).catch(() => setLoadingFormats(false));
  }, []);

  return { formatos, loadingFormats };
}

export function useDocuments(folder) {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    if(!folder) return;
    fetch(`${import.meta.env.VITE_API_URL}/api/formats/${folder}/documents`)
    .then(res => res.json())
    .then(data => setDocumentos(data));
  }, [folder]);

  return { documentos }
}