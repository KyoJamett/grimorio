import { createContext, useContext, useState } from "react";

const DeckContext = createContext();

export const DeckProvider = ({ children }) => {
  const [deck, setDeck] = useState([]);
  const [deckName, setDeckName] = useState("");

  //HANDLERS
  const handlerAddCard = (card) => {
    setDeck((prevDeck) => {
      const existing = prevDeck.find((c) => c.id === card.id);

      if (existing) {
        return prevDeck.map((c) => {
          return c.id === card.id ? { ...c, quantity: c.quantity + 1 } : c;
        });
      }
      return [
        ...prevDeck,
        {
          id: card.id,
          ed_edid: card.ed_edid,
          edid: card.edid,
          name: card.name,
          type: card.type,
          quantity: 1,
          cost: card.cost ? card.cost : null,
        },
      ];
    });
  };

  const handlerRemoveCard = (card) => {
    setDeck((prevDeck) => {
      const existing = prevDeck.find((c) => c.id === card.id);

      if (existing) {
        if (existing.quantity > 1) {
          return prevDeck.map((c) => {
            return c.id === card.id ? { ...c, quantity: c.quantity - 1 } : c;
          });
        }
      }
      return prevDeck.filter((c) => c.id !== card.id);
    });
  };

  const handlerDeckName = (name) => {
    setDeckName(name);
  };

  return (
    <DeckContext.Provider
      value={{
        deck,
        deckName,
        setDeckName,
        handlerAddCard,
        handlerRemoveCard,
        handlerDeckName,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};

export const useDeckContext = () => useContext(DeckContext);
