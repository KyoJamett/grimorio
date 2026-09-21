import { useState } from "react";
import { useMyDecksContext } from "../context/MyDecksContext";
import { NavLink } from "react-router-dom";
import { DeckModal } from "../components/deckbuilderPage/DeckModal";
import { DeckPreview } from "../components/deckbuilderPage/DeckPreview";
import { useFormatsContext } from "../context/FormatsContext";

export const MyDecksPage = () => {
  const { decks, handlerRemoveDeck } = useMyDecksContext();
  const [deckSelected, setDeckSelected] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const { formatos } = useFormatsContext();

  const getFormatName = (formatKey) => formatos[formatKey]?.name ?? formatKey;

  console.log(decks);
  return (
    <>
      {!showPreview || !deckSelected || (
        <DeckModal
          title={"Vista previa del mazo"}
          showPreview={showPreview}
          setShowPreview={setShowPreview}
          exportName={deckSelected.name}
        >
          <DeckPreview
            cards={deckSelected.cards}
            deckName={deckSelected.name}
            formatoName={getFormatName(deckSelected.format)}
          />
        </DeckModal>
      )}

      <div className="container my-5 justify-content-center">
        <div className="text-center">
          <h2>Mis Mazos</h2>
        </div>
        <div
          className="table-responsive card madera rounded-2"
          style={{
            flex: 1,
            minHeight: 0,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <table className="table table-sm table-hover table-striped">
            <thead className="table-responsive table-dark deck-table-header">
              <tr>
                <th style={{ width: "5%" }}>N°</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "15%" }}>Formato</th>
                <th style={{ width: "10%" }}>Ver cartas</th>
                <th style={{ width: "10%" }}>Editar</th>
                {/*<th style={{ width: "10%" }}>Descargar</th>*/}
                <th style={{ width: "10%" }}>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {decks.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center text-secondary">
                    No hay mazos guardados todavía.
                  </td>
                </tr>
              ) : (
                decks.map((deck, index) => {
                  return (
                    <tr key={deck.id} style={{ cursor: "pointer" }}>
                      <td>{String(index + 1).padStart(2, "0")}</td>
                      <td>{deck.name}</td>
                      <td>{getFormatName(deck.format)}</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => {
                            setDeckSelected(deck);
                            setShowPreview(true);
                          }}
                        >
                          <i className="bi bi-eye"></i>
                        </button>
                      </td>
                      <td>
                        <NavLink
                          className="btn btn-warning"
                          to={`/deckbuilder/${deck.id}`}
                        >
                          <i className="bi bi-pen"></i>
                        </NavLink>
                      </td>
                      {/*<td>
                        <button type="button" className="btn btn-success">
                          <i className="bi bi-download"></i>
                        </button>
                      </td>*/}
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handlerRemoveDeck(deck.id)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
