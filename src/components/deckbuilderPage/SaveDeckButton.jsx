import { useDeckContext } from "../../context/DeckContext";
import { useMyDecksContext } from "../../context/MyDecksContext";

export const SaveDeckButton = ({ formatoKey }) => {
  const { deck, deckName, editingDeckId } = useDeckContext();
  const { handlerAddDeck, handlerUpdateDeck } = useMyDecksContext();

  const handleSaveDeck = () => {
    if (!deckName.trim() || deck.length === 0) return;

    if (editingDeckId) {
      handlerUpdateDeck(editingDeckId, {
        name: deckName,
        format: formatoKey,
        cards: deck,
      });
    } else {
      handlerAddDeck({
        name: deckName,
        format: formatoKey,
        cards: deck,
      });
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleSaveDeck}>
      {editingDeckId ? "Actualizar Mazo" : "Guardar Mazo"}
    </button>
  );
};
