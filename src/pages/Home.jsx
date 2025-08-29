import React, { useState } from "react";
import { CardSearch } from "../components/home/CardSearch";
import { CardGrid } from "../components/home/CardGrid";
import { CardSearchModal } from "../components/home/CardSearchModal";

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
    <div className="d-inline justify-content-center">
      <div className="container my-4 text-center">
        <h1>Grimorio</h1>
      </div>

      {/* Barra de busqueda */}
      <CardSearch setCards={setCards} />

      {/* Grid de cartas, visible solo cuando hay cartas */}
      <CardGrid cards={cards} handleImageClick={handleImageClick} />

      {/* Modal para mostrar imagen expandida */}
      <CardSearchModal
        handleCloseModal={handleCloseModal}
        selectedImage={selectedImage}
      />
    </div>
  );
}
