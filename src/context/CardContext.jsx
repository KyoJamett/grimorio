import { createContext, useContext, useState } from "react";

const CardsContext = createContext();
const initialCardSelected = {
  id: "0",
  edid: "",
  slug: "",
  name: "nombre_de_carta",
  rarity: "rareza_de_carta",
  race: "raza_de_carta",
  type: "tipo_de_carta",
  keywords: "arreglo_de_keywords",
  cost: "costo_de_carta",
  damage: "fuerza_de_carta",
  ability: "habilidad_de_carta",
  flavour: "lore_de_carta",
  ed_edid: "",
  ed_slug: "",
};

export const CardsProvider = ({ children }) => {
  const [cardSelected, setCardSelected] = useState(initialCardSelected);
  const [visibleForm, setVisibleForm] = useState(false);

  const handlerCardSelectedForm = (card) => {
    //console.log(card);
    setCardSelected({ ...card });
  };

  const handlerOpenForm = (card) => {
    handlerCardSelectedForm(card);
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setCardSelected(initialCardSelected);
  };

  return (
    <CardsContext.Provider
      value={{ cardSelected, visibleForm, handlerOpenForm, handlerCloseForm }}
    >
      {children}
    </CardsContext.Provider>
  );
};

export const useCardContext = () => useContext(CardsContext);
