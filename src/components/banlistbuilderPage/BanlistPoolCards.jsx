import { getCardImageUrl } from "../../helpers/cardImageUrl";
import { LazyCardImage } from "../deckbuilderPage/LazyCardImage";

export const BanlistPoolCards = ({
  loading,
  progress,
  filteredCards,
  handleRowClick,
  onRaritySlug,
  viewMode,
  onTypes,
  handlerAddCard,
  handlerRemoveCard,
}) => {
  const rules = [
    { id: "1", label: "Prohibida" },
    { id: "2", label: "Única" },
    { id: "3", label: "Sólo dos copias" },
    { id: "4", label: "Errante" },
    { id: "5", label: "Errata" },
  ];
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
      >
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
                    <div className="dropdown">
                      <button
                        className="btn btn-danger dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        Restringir
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                        }}
                      >
                        {rules.map(({ id, label }) => {
                          return (
                            <button
                              key={id}
                              type="button"
                              className="dropdown-item"
                              onClick={(e) => {
                                e.stopPropagation();
                                handlerAddCard(card, id);
                              }}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
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

                      <div className="dropdown">
                        <button
                          className="btn btn-danger dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Restringir
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {rules.map(({ id, label }) => {
                            return (
                              <button
                                key={id}
                                type="button"
                                className="dropdown-item"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlerAddCard(card, id);
                                }}
                              >
                                {label}
                              </button>
                            );
                          })}
                        </div>
                      </div>
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
