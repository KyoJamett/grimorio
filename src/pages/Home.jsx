import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCards } from "../hooks/useCards";
import ShortcutComponent from "../components/ShortCutComponent";

export function Home() {
  const { homeText, intro, escuelas } = useCards();
  const [inputValue, setInputValue] = useState(""); // Estado para el valor del input
  const [loading, setLoading] = useState(false); // Estado para gestionar la carga
  const [error, setError] = useState(null); // Estado para manejar errores

  // Función para manejar el cambio en el input
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Función para manejar el envío del formulario, si deja de funcionar seguramente tiene que ver con que el proxyurl ya no funciona. Mitos debió subir su seguridad, busca otro proxy o elimina la función.
  const handleSubmit = async (e) => {
    e.preventDefault();

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

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container my-4">
        <h2>Grimorio</h2>
        <h6 className="cursiva">Sabiduría Infinita</h6>
        <p className="justificado">{intro.text}</p>
        <ShortcutComponent />
        {/* Formulario de entrada */}
        {/*
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row">
            <div className="col">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="form-control"
                placeholder="Ingrese el valor"
                required
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
          {loading && <p>Cargando...</p>}
          {error && <p className="text-danger">Error: {error}</p>}
        </form>
        */}
        {/* Contenido existente */}
        {/*
        <div className="row">
          <p className="text-start">{homeText.text}</p>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col">
              Hijos del Sol
              <NavLink
                className="btn btn-dark"
                to={`/grimorio/cartas/${escuelas.sol}`}
                state={{ ed: "hijos-del-sol" }}
              >
                Dark
              </NavLink>
            </div>
            <div className="col">
              Legado Gótico
              <NavLink
                className="btn btn-dark"
                to={`/grimorio/cartas/${escuelas.leg}`}
                state={{ ed: "legado-gotico" }}
              >
                Dark
              </NavLink>
            </div>
            <div className="col">
              Águila Imperial
              <NavLink
                className="btn btn-dark"
                to={`/grimorio/cartas/${escuelas.agu}`}
                state={{ ed: "aguila-imperial" }}
              >
                Dark
              </NavLink>
            </div>
          </div>
        </div>
       */}
      </div>
    </>
  );
}
