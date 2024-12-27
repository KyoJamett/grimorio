import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCards } from "../hooks/useCards";
import ShortcutComponent from "../components/ShortCutComponent";

export function Home() {
  const { homeText, intro, escuelas } = useCards();
  const [inputValue, setInputValue] = useState(""); // Estado para el valor del input
  const [loading, setLoading] = useState(false); // Estado para gestionar la carga
  const [error, setError] = useState(null); // Estado para manejar errores
  const [cards, setCards] = useState([]); // Estado para almacenar las cartas

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

  return (
    <>
      <div className="container my-4">
        <h2>Grimorio</h2>
        <h6 className="cursiva">Sabiduría Infinita</h6>
        <p className="justificado">{intro.text}</p>
        <ShortcutComponent />
        {/* Formulario de entrada */}
        <br></br>
        <div className="row">
          <h5>Busqueda de cartas</h5>
        </div>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="row">
            <div className="col">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="form-control"
                placeholder="Ingrese el nombre de la carta"
                required
              />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary">
                Buscar
              </button>
            </div>
          </div>
          {loading && <p>Cargando...</p>}
          {error && <p className="text-danger">Error: {error}</p>}
        </form>

        {/* Grid de cartas, visible solo cuando hay cartas */}
        <div className="container my-4">
          {Array.isArray(cards) && cards.length > 0 ? (
            <>
              <h4>Resultados de búsqueda</h4>
              <div className="grid-container">
                {cards.map((card, index) => (
                  <div
                    className="grid-item"
                    key={`${card.edition}-${card.edid}`}
                  >
                    <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center black">
                      <h6 className="card-title results-title text-warning margin-bottom">
                        {card.name}
                      </h6>
                      <img
                        src={`https://api.myl.cl/static/cards/${card.edition}/${card.edid}.png`}
                        alt={card.edid}
                        className="img-fluid"
                        style={{
                          width: "250px",
                          height: "250px",
                          objectFit: "contain",
                        }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </>
          ) : Array.isArray(cards) && cards.length == 0 ? (
            ""
          ) : (
            // Si cards no es un array o está vacío
            <p>No se encontraron resultados.</p>
          )}
        </div>

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
