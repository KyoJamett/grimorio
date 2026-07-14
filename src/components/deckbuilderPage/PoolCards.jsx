import { useDeckContext } from "../../context/DeckContext";
import { getCardImageUrl } from "../../helpers/cardImageUrl";
import { LazyCardImage } from "./LazyCardImage";

export const PoolCards = ({
  loading,
  progress,
  filteredCards,
  handleRowClick,
  onRaritySlug,
  viewMode,
  onTypes,
}) => {
  const { handlerAddCard, handlerRemoveCard } = useDeckContext();
  return (
    <div
      className="table-responsive rounded-2"
      style={{
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="deckbuilder-mobile-scroll"
        style={{
          minHeight: 0,
          overflowY: "auto",
          flex: 1,
        }}
        /*style={{
                    height: "calc(100dvh - 250px)",
                    display: "flex",
                    flexDirection: "column",
                  }}*/
        /*style={{
                    height: "100%",
                    overflowY: "auto",
                    border: "3px solid red",
                  }}*/
      >
        {/*<div style={{ flex: 1, overflowY: "auto", minHeight: 0 }}>*/}
        {viewMode === "table" ? (
          <table className="table table-sm table-hover table-striped">
            <thead className="table-responsive table-dark deck-table-header">
              <tr>
                <th style={{ width: "10%" }}>N°</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "15%" }}>Tipo</th>
                <th style={{ width: "10%" }}>Coste</th>
                <th style={{ width: "5%" }}></th>
              </tr>
            </thead>

            <tbody>
              {loading && (
                <tr>
                  <td colSpan="5">
                    <div className="progress my-2" style={{ height: "4px" }}>
                      <div
                        className="progress-bar bg-warning"
                        style={{
                          width: `${progress}%`,
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                  </td>
                </tr>
              )}
              {filteredCards.map((card) => (
                <tr
                  onClick={() => handleRowClick(card)}
                  key={`${card.id}`}
                  style={{ cursor: "pointer" }}
                  data-rarity-color={onRaritySlug(card.rarity)}
                  className="rarity"
                >
                  <td>{card.edid}</td>
                  <td>{card.name.toUpperCase()}</td>
                  <td>{onTypes(card.type)}</td>
                  <td>{card.cost ?? "—"}</td>
                  <td>
                    <div className="btn-group" role="group" aria-label="Copias">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlerRemoveCard(card);
                        }}
                      >
                        -1
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlerAddCard(card);
                        }}
                      >
                        +1
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {/*console.log("cartas en tabla")*/}
              {/*console.log(filteredCards)*/}
            </tbody>
          </table>
        ) : (
          <div className="row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-2 p-2">
            {/* con row-cols-2 puedes modificar cuantas cartas se ven por fila, puedes asigar valroes fijos como en dreamborn
                          investigar cómo funcionan mezclando row-cols-sm-3 y los md y lg. Al momento de codificar, se ven siempre dos cartas
                          al agregar g-2 recien pasa a 5 cartas por fila.
                      */}
            {filteredCards.map((card) => (
              <div className="col" key={card.id}>
                <div
                  className="card h-100 bg-dark border-secondary"
                  data-rarity-color={onRaritySlug(card.rarity)}
                >
                  <LazyCardImage
                    key={card.id}
                    src={getCardImageUrl(card.ed_edid, card.edid)}
                    alt={card.name}
                    onClick={() => handleRowClick(card)}
                  />
                  <div className="card-footer p-1 justify-content-between align-items-center">
                    <div className="btn-group btn-group-sm w-100">
                      {/* con w-100 los botones usan todo el espacio ancho disponible (width-100) si los quieres hacer m´+as pequeños deberías partir modificando este atributo */}
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlerRemoveCard(card);
                        }}
                      >
                        -1
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlerAddCard(card);
                        }}
                      >
                        +1
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
