import React, { useState } from "react";
import { useCards } from "../hooks/useCards";
import ShortcutComponent from "../components/ShortCutComponent";
import { CardSearch } from "../components/CardSearch";
import { CardGrid } from "../components/CardGrid";
import { CardSearchModal } from "../components/CardSearchModal";

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
        
        <br></br>
        {/* Barra de busqueda */}
        <CardSearch setCards={setCards}/>

        {/* Grid de cartas, visible solo cuando hay cartas */}
        <CardGrid cards={cards} handleImageClick={handleImageClick}/>

        {/* Modal para mostrar imagen expandida */}
        <CardSearchModal handleCloseModal={handleCloseModal} selectedImage={selectedImage}/>

        {/*Instrucciones para agregar al celu */}
        <ShortcutComponent />
      </div>
    </>
  );
}
