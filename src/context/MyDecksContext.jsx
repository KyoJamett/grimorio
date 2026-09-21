import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useContext } from "react";
import { generateId } from "../helpers/generateId";

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
    setDecks((prev) => prev.filter((d) => d.id !== deckId));
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
