import { useState } from "react";
import { Loading } from "../Loading";

export const CardSearch = ({ setCards }) => {
  const [inputValue, setInputValue] = useState(""); // Estado para el valor del input
  const [loading, setLoading] = useState(false); // Estado para gestionar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  const handleSubmit = async (inputValue) => {
    //e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const proxyUrl = "https://api.allorigins.win/get?url=";
      const apiUrl = encodeURIComponent(
        "https://api.myl.cl/cards/search?entry=" +
          encodeURIComponent(inputValue)
      );
      const url = `${proxyUrl}${apiUrl}`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}), // Enviar cuerpo vacío si no es necesario
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json(); //data recibida por el metodo post
      console.log(data);
      const contents = JSON.parse(data.contents); //aquí convertimos el atributo contents, el cual contiene las cartas que respondió la api, en un json

      // Verifica el tipo y contenido de 'data'
      console.log("Tipo de data:", typeof data);
      console.log("Contenido de data:", data);
      console.log("Contenido de contents:", contents);
      console.log("Tipo de contents:", typeof contents);

      if (data) {
        setCards(contents.cards);
      } else {
        console.error("Formato de datos inesperado", data);
        setError("Datos recibidos en un formato inesperado");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Función para manejar el cambio en el input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //setCards limpia el array Cards para que al buscar cartas por segunda vez, las cartas previamente buscadas se borren
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setCards([]);
    handleSubmit(inputValue);
  };

  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        <h3 className="text-center">Busqueda de cartas</h3>
      </div>
      <form onSubmit={handleFormSubmit} className="mb-4">
        <div className="d-flex w-auto justify-content-center">
          <div className="col-8 d-flex">
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              className="form-control me-2"
              placeholder="Carta"
              required
            />

            <button type="submit" className="btn btn-primary btn-lg">
              Buscar
            </button>
          </div>
        </div>
        {loading && <Loading />}
        {error && <p className="text-danger">Error: {error}</p>}
      </form>
    </div>
  );
};
