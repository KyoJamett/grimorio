import { useEffect, useState } from "react";

export function useFormats() {
  const [formatos, setFormatos] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/api/formats')
      .then(res => res.json())
      .then(data => setFormatos(data));
  }, []);

  return { formatos };
}

export function useDocuments(folder) {
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    if(!folder) return;
    fetch(`http://localhost:3001/api/formats/${folder}/documents`)
    .then(res => res.json())
    .then(data => setDocumentos(data));
  }, [folder]);

  return { documentos }
}