import React, { useState } from "react";
import { CardSearch } from "../components/home/CardSearch";
import { CardGrid } from "../components/home/CardGrid";
import { CardSearchModal } from "../components/home/CardSearchModal";
import { NavLink } from "react-router-dom";

export function Home() {
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
    <div className="d-inline justify-content-center pt-5">
      <div className="container my-4 text-center">
        <h1 className="display-1 mb-0">Biblioteca Eterna</h1>
        <h4 className="cursiva">Sabiduría Infinita</h4>
        <h5 className="pt-3">
          Crea mazos, conoce formatos de juego, explora colecciones.
        </h5>

        <div className="row justify-content-center g-2">
          <div className="col-auto col-md-3">
            <NavLink
              className="btn btn-primary btn-lg mt-2 d-flex justify-content-center"
              to={`/deckbuilder`}
            >
              Crear Mazo
            </NavLink>
          </div>
          <div className="col-auto col-md-3">
            <NavLink
              className="btn btn-primary btn-lg mt-2 d-flex justify-content-center"
              to={`/banbuilder`}
            >
              Crear Banlist
            </NavLink>
          </div>
        </div>
      </div>

      {/* Barra de busqueda 
      <CardSearch setCards={setCards} />

      {/* Grid de cartas, visible solo cuando hay cartas 
      <CardGrid cards={cards} handleImageClick={handleImageClick} />

      {/* Modal para mostrar imagen expandida 
      <CardSearchModal
        handleCloseModal={handleCloseModal}
        selectedImage={selectedImage}
      />*/}
    </div>
  );
}
