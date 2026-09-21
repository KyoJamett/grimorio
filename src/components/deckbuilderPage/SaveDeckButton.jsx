import { useState } from "react";
import { useDeckContext } from "../../context/DeckContext";
import { useMyDecksContext } from "../../context/MyDecksContext";
import { SuccessAlert } from "../layout/SuccessAlert";

export const SaveDeckButton = ({ formatoKey }) => {
  const { deck, deckName, editingDeckId } = useDeckContext();
  const { handlerAddDeck, handlerUpdateDeck } = useMyDecksContext();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSaveDeck = () => {
    if (!deckName.trim() || deck.length === 0) return;
    //console.log("Mazo a guardar: ", editingDeckId);
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

    setShowSuccess(true);
  };

  return (
    <>
      <button className="btn btn-success" onClick={handleSaveDeck}>
        {editingDeckId ? "Actualizar Mazo" : "Guardar Mazo"}
      </button>

      <SuccessAlert
        show={showSuccess}
        message={
          editingDeckId
            ? "Mazo actualizado correctamente"
            : "Mazo guardado correctamente"
        }
        onClose={() => setShowSuccess(false)}
      />
    </>
  );
};
