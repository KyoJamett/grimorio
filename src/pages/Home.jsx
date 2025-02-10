import React, { useState } from "react";
import { useCards } from "../hooks/useCards";
import ShortcutComponent from "../components/ShortCutComponent";
import { CardSearch } from "../components/CardSearch";

export function Home() {
  const { intro } = useCards();
  const [cards, setCards] = useState([]); // Estado para almacenar las cartas halladas con la barra de busqueda
  const [selectedImage, setSelectedImage] = useState(null);

  //constantes para el manejo del modal de cartas
  const handleImageClick = (card) => {
    setSelectedImage(card);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
        <CardSearch setCards={setCards}/>

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
                          cursor: "pointer",
                        }}
                        onClick={() => handleImageClick(card)}
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

        {/* Modal para mostrar imagen expandida */}
        {selectedImage && (
          <div
            className="modal show d-block abrir-modal animacion fadeIn"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            onClick={handleCloseModal}
          >
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="modal-header">
                  <h5 className="modal-title">{selectedImage.name}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body text-center">
                  <img
                    src={`https://api.myl.cl/static/cards/${selectedImage.edition}/${selectedImage.edid}.png`}
                    alt={selectedImage.edid}
                    className="img-fluid"
                    style={{
                      maxHeight: "80vh",
                      width: "auto",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
