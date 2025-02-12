import React, { useState } from "react";
import { useCards } from "../hooks/useCards";
import ShortcutComponent from "../components/ShortCutComponent";
import { CardSearch } from "../components/CardSearch";
import { CardGrid } from "../components/CardGrid";

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
        <br></br>
        <CardSearch setCards={setCards}/>

        {/* Grid de cartas, visible solo cuando hay cartas */}
        <CardGrid cards={cards} handleImageClick={handleImageClick}/>

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
