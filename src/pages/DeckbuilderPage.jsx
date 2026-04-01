import { useState } from "react";
import { useFormats } from "../hooks/useResource";
import { useDeckCards } from "../hooks/useDeckCards";
import { CardModalForm } from "../components/cardsPage/CardModalForm";
import { useCards } from "../hooks/useCards";

export const DeckbuilderPage = () => {
  const { formatos } = useFormats();
  const [formatoKey, setFormatoKey] = useState(null);

  const formato = formatoKey ? formatos[formatoKey] : null;
  const {
    cards,
    loading,
    progress,
    races,
    rarities,
    types,
    keywords,
    ediciones,
  } = useDeckCards(formato);
  //-----------------------------------

  const [deck, setDeck] = useState([]);

  //-----------------------------------
  const { cardSelected, handlerCloseForm, handlerOpenForm, visibleForm } =
    useCards();

  const onTypes = (type) => {
    const foundType = types.find((t) => t.id == type);
    return foundType ? foundType.name || "sin nombre" : "sin nombre";
  };

  const onRaritySlug = (rarity) => {
    const foundRarity = rarities.find((r) => r.id == rarity);
    return foundRarity ? foundRarity.slug || "sin rareza" : "default";
  };

  const handleRowClick = (card) => {
    handlerOpenForm(card);
    console.log(
      `SOlicitando imagen a URL: http://localhost:3001/api/cards/${card.ed_edid}/${card.edid}.png`,
    );
  };

  return (
    <>
      {!visibleForm || (
        <CardModalForm
          cardSelected={cardSelected}
          handlerCloseForm={handlerCloseForm}
          races={races}
          rarities={rarities}
          types={types}
          keywords={keywords}
          edition={ediciones}
        />
      )}
      <div className="container-pro justify-content-center pt-2">
        <div className="border rounded overflow-hidden">
          <div className="row g-0">
            <div className="col-8 border">
              <div className="p-2">
                {" "}
                {/* este padding regular los margenes de la tabla pool de cartas, ajustar aqui*/}
                <div className="d-flex gap-2 mb-3 align-items-center">
                  <h4>Pool de cartas</h4>
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Bloque
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Formato
                  </button>
                  <select
                    className="form-select"
                    onChange={(e) => setFormatoKey(e.target.value)}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecciona un formato
                    </option>
                    {Object.entries(formatos).map(([key, f]) => (
                      <option key={key} value={key}>
                        {f.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="row g-2 mb-3 align-items-center">
                  <div className="col-12 col-md-4">
                    <input
                      className="form-control custom-search-input"
                      type="search"
                      placeholder="Buscar carta..."
                      aria-label="Search"
                    />
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Tipo
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Todos
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Frecuencia
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Todos
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Raza
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Todos
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Edición
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => e.preventDefault()}
                        >
                          Todos
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive rounded-2">
                <div style={{ height: "60vh", overflowY: "auto" }}>
                  <table className="table table-sm table-hover table-striped">
                    <thead className="table-responsive table-dark sticky-top">
                      <tr>
                        <th style={{ width: "10%" }}>N°</th>
                        <th style={{ width: "30%" }}>Nombre</th>
                        <th style={{ width: "15%" }}>Tipo</th>
                        <th style={{ width: "10%" }}>Coste</th>
                        <th style={{ width: "5%" }}></th>
                      </tr>
                    </thead>
                    {loading && (
                      <div className="progress my-2" style={{ height: "4px" }}>
                        <div
                          className="progress-bar bg-warning"
                          style={{
                            width: `${progress}%`,
                            transition: "width 0.3s",
                          }}
                        />
                      </div>
                    )}
                    <tbody>
                      {cards.map((card) => (
                        <tr
                          onClick={() => handleRowClick(card)}
                          key={`${card.ed_edid}-${card.edid}`}
                          style={{ cursor: "pointer" }}
                          data-rarity-color={onRaritySlug(card.rarity)}
                          className="rarity"
                        >
                          <td>{card.edid}</td>
                          <td>{card.name}</td>
                          <td>{onTypes(card.type)}</td>
                          <td>{card.cost ?? "—"}</td>
                          <td>
                            <div
                              className="btn-group"
                              role="group"
                              aria-label="Copias"
                            >
                              <button type="button" className="btn btn-danger">
                                -1
                              </button>
                              <button type="button" className="btn btn-primary">
                                +1
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-4 border pb-2">
              <div className="p-2">
                {" "}
                {/* este padding regular los margenes de los detalles del mazo, ajustar aqui*/}
                <h4>Mazo</h4>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Aliados</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Talismanes</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Totems</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Armas</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between">
                    <span>Oros</span>{" "}
                    <span className="badge bg-warning text-dark">0</span>
                  </li>
                </ul>
                <ul className="list-group mt-2">
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Total</span> <span>0</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Costo promedio</span> <span>0</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
