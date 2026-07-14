import { createContext, useContext, useEffect, useState } from "react";

const FormatsContext = createContext();

export const FormatsProvider = ({ children }) => {
  const [formatos, setFormatos] = useState({});
  const [loadingFormats, setLoadingFormats] = useState(true);
  const [documentos, setDocumentos] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/formats`)
      .then((res) => res.json())
      .then((data) => {
        setFormatos(data);
        setLoadingFormats(false);
      })
      .catch(() => setLoadingFormats(false));
  }, []);

  return (
    <FormatsContext.Provider value={{ formatos, loadingFormats, documentos }}>
      {children}
    </FormatsContext.Provider>
  );
};

export const useFormatsContext = () => useContext(FormatsContext);
