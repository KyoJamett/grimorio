import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useContext } from "react";
import { generateId } from "../helpers/generateId";
import Swal from "sweetalert2";

const MyDecksContext = createContext();

export const MyDecksProvider = ({ children }) => {
  const [decks, setDecks] = useLocalStorage("decks", []);

  const handlerAddDeck = ({ name, format, cards }) => {
    const trimmedName = name.trim();
    if (!trimmedName) return;

    const newDeck = {
      id: generateId(),
      name: trimmedName,
      format,
      cards: cards ?? [],
    };

    setDecks((prev) => [...prev, newDeck]);
  };

  const handlerRemoveDeck = (deckId) => {
    Swal.fire({
      title: "¿Desea eliminar este mazo?",
      text: "Esta acción no puede revertirse!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDecks((prev) => prev.filter((d) => d.id !== deckId));
        Swal.fire({
          title: "Borrado!",
          text: "El mazo ha sido eliminado.",
          icon: "success",
        });
      }
    });
  };

  const handlerUpdateDeck = (deckId, updates) => {
    setDecks((prev) =>
      prev.map((d) => (d.id === deckId ? { ...d, ...updates } : d)),
    );
  };

  return (
    <MyDecksContext.Provider
      value={{
        decks,
        handlerRemoveDeck,
        handlerAddDeck,
        handlerUpdateDeck,
      }}
    >
      {children}
    </MyDecksContext.Provider>
  );
};

export const useMyDecksContext = () => useContext(MyDecksContext);
