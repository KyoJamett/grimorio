import { useEffect, useState } from "react";
import { useFormats } from "../hooks/useResource";
import { useDeckCards } from "../hooks/useDeckCards";
import { CardModalForm } from "../components/cardsPage/CardModalForm";
import { useCards } from "../hooks/useCards";
import { DeckSection } from "../components/deckbuilderPage/DeckSection";
import { DeckModal } from "../components/deckbuilderPage/DeckModal";
import { getCardImageUrl } from "../helpers/cardImageUrl";

export const DeckbuilderPage = () => {
  const { formatos } = useFormats();
  const [formatoKey, setFormatoKey] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedEdition, setSelectedEdition] = useState("");
  const [deck, setDeck] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [deckName, setDeckName] = useState("");
  const [viewMode, setViewMode] = useState("table");
  const [mobileTab, setMobileTab] = useState("pool"); // 'pool' | 'deck'

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

  const filteredRaces = races.filter((race) =>
    cards.some((card) => String(card.race) === race.id),
  );

  const filteredRarities = rarities.filter((rarity) =>
    cards.some((card) => String(card.rarity) === rarity.id),
  );

  const filteredTypes = types.filter((type) =>
    cards.some((card) => String(card.type) === type.id),
  );

  const handleRowClick = (card) => {
    handlerOpenForm(card);
    console.log(
      `SOlicitando imagen a URL: http://localhost:3001/api/cards/${card.ed_edid}/${card.edid}.png`,
    );
  };

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

  useEffect(() => {
    console.log(deck);
  }, [deck]);

  // Función para filtrar las cartas
  const filterCards = (cards) => {
    return cards.filter((card) => {
      const matchesSearch =
        searchInput.trim() === "" ||
        (card.name ?? "")
          .toLowerCase()
          .includes(searchInput.trim().toLowerCase());

      const matchesType =
        selectedType === "" || String(card.type ?? "") === String(selectedType);

      const matchesRace =
        selectedRace === "" || String(card.race ?? "") === String(selectedRace);

      const matchesRarity =
        selectedRarity === "" ||
        String(card.rarity ?? "") === String(selectedRarity);

      const matchesEdition =
        selectedEdition === "" ||
        String(card.ed_edid ?? "") === String(selectedEdition);
      return (
        matchesSearch &&
        matchesType &&
        matchesRace &&
        matchesRarity &&
        matchesEdition
      );
    });
  };

  const filteredCards = filterCards(cards);
  console.log("formatos", formato);
  return (
    <>
      {!showPreview || (
        <DeckModal
          deck={deck}
          deckName={deckName}
          formato={formato.name}
          showPreview={showPreview}
          setShowPreview={setShowPreview}
        />
      )}

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
        <div className="border rounded overflow-hidden madera text-light">
          <div className="row g-0">
            <div
              className={`col-12 col-md-8 border ${mobileTab === "deck" ? "d-none d-md-block" : ""}`}
            >
              {/* cómo es que col-12 no interfiere con col-md-8? si antes tenía col-8 
              por qué no se rompe el esquema en la pantalla del pc? */}
              <div className="p-2">
                {" "}
                {/* este padding regular los margenes de la tabla pool de cartas, ajustar aqui*/}
                <div className="d-flex gap-2 mb-3 align-items-center">
                  {/* qué es d-flex? */}
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

                  <button
                    type="button"
                    className="btn btn-warning dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Formato
                  </button>
                </div>
                <div className="row g-2 align-items-center">
                  <div className="col col-auto px-0">
                    <div className="btn-group">
                      <button
                        className={`btn btn-sm ${viewMode === "table" ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => setViewMode("table")}
                      >
                        ☰
                      </button>
                      <button
                        className={`btn btn-sm ${viewMode === "grid" ? "btn-warning" : "btn-outline-warning"}`}
                        onClick={() => setViewMode("grid")}
                      >
                        ⊞
                      </button>
                    </div>
                  </div>
                  <div className="col col-auto">
                    <input
                      className="form-control custom-search-input"
                      type="search"
                      placeholder="Buscar carta..."
                      aria-label="Search"
                      data-bs-theme="dark"
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100 btn-sm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedType === ""
                          ? "Tipo de carta"
                          : filteredTypes.find(
                              (t) => String(t.id) === String(selectedType),
                            )?.name}
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedType("");
                          }}
                        >
                          Todos
                        </a>
                        {filteredTypes.map(({ id, name }) => (
                          <a
                            key={id}
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedType(String(id));
                            }}
                          >
                            {name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100 btn-sm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedRarity === ""
                          ? "Frecuencia"
                          : filteredRarities.find(
                              (t) => String(t.id) === String(selectedRarity),
                            )?.name}
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedRarity("");
                          }}
                        >
                          Todas
                        </a>
                        {filteredRarities.map(({ id, name }) => (
                          <a
                            key={id}
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedRarity(String(id));
                            }}
                          >
                            {name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100 btn-sm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedRace === ""
                          ? "Raza"
                          : filteredRaces.find(
                              (t) => String(t.id) === String(selectedRace),
                            )?.name}
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedRace("");
                          }}
                        >
                          Todos
                        </a>
                        {filteredRaces.map(({ id, name }) => (
                          <a
                            key={id}
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedRace(String(id));
                            }}
                          >
                            {name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-md-auto">
                    <div className="btn-group w-100">
                      <button
                        type="button"
                        className="btn btn-warning dropdown-toggle w-100 btn-sm"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {selectedEdition === ""
                          ? "Edición"
                          : ediciones.find(
                              (t) => String(t.id) === String(selectedEdition),
                            )?.title}
                      </button>
                      <div className="dropdown-menu">
                        <a
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedEdition("");
                          }}
                        >
                          Todos
                        </a>
                        {ediciones.map(({ id, title }) => (
                          <a
                            key={id}
                            className="dropdown-item"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              setSelectedEdition(String(id));
                            }}
                          >
                            {title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive rounded-2">
                <div style={{ height: "60vh", overflowY: "auto" }}>
                  {viewMode === "table" ? (
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

                      <tbody>
                        {loading && (
                          <tr>
                            <td colSpan="5">
                              <div
                                className="progress my-2"
                                style={{ height: "4px" }}
                              >
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
                              <div
                                className="btn-group"
                                role="group"
                                aria-label="Copias"
                              >
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
                            <img
                              src={getCardImageUrl(card.ed_edid, card.edid)}
                              className="card-img-top"
                              alt={card.name}
                              onClick={() => handleRowClick(card)}
                              style={{ cursor: "pointer" }}
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
            </div>

            <div
              className={`col-12 col-md-4 border pb-2 ${mobileTab === "pool" ? "d-none d-md-block" : ""}`}
            >
              <div className="p-2">
                {" "}
                {/* este padding regular los margenes de los detalles del mazo, ajustar aqui*/}
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Nombre del mazo..."
                  value={deckName}
                  onChange={(e) => setDeckName(e.target.value)}
                />
                <div style={{ height: "50vh", overflowY: "auto" }}>
                  <ul className="list-group list-group-flush">
                    {deck.length > 0 && (
                      <>
                        <DeckSection
                          deck={deck}
                          type={"1"}
                          sectionName={"Aliados"}
                          handlerAddCard={handlerAddCard}
                          handlerRemoveCard={handlerRemoveCard}
                        />

                        <DeckSection
                          deck={deck}
                          type={"2"}
                          sectionName={"Talismanes"}
                          handlerAddCard={handlerAddCard}
                          handlerRemoveCard={handlerRemoveCard}
                        />
                        <DeckSection
                          deck={deck}
                          type={"3"}
                          sectionName={"Armas"}
                          handlerAddCard={handlerAddCard}
                          handlerRemoveCard={handlerRemoveCard}
                        />
                        <DeckSection
                          deck={deck}
                          type={"4"}
                          sectionName={"Totems"}
                          handlerAddCard={handlerAddCard}
                          handlerRemoveCard={handlerRemoveCard}
                        />
                        <DeckSection
                          deck={deck}
                          type={"5"}
                          sectionName={"Oros"}
                          handlerAddCard={handlerAddCard}
                          handlerRemoveCard={handlerRemoveCard}
                        />
                        <DeckSection
                          deck={deck}
                          type={"6"}
                          sectionName={"Monumento"}
                        />
                      </>
                    )}
                  </ul>
                </div>
                <ul className="list-group mt-2">
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Total</span>{" "}
                    <span>
                      {deck.reduce((total, c) => total + c.quantity, 0)}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between fw-bold">
                    <span>Costo promedio</span> <span>0</span>
                  </li>
                  <li>
                    <button
                      className="btn btn-warning w-100"
                      onClick={() => setShowPreview(true)}
                    >
                      Ver vista previa
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* inicio barra inferior, sólo visible en movil */}

      <div
        className="d-flex d-md-none fixed-bottom border-top pb-6"
        style={{ backgroundColor: "#1a1a1a", zIndex: 1000 }}
      >
        {/* qué hace d-md-none? y fixed-bottom? border-top sólo agrega un borde en la parte superior de los botones */}
        <button
          className={`btn flex-fill py-3 rounded-0 ${mobileTab === "pool" ? "btn-warning" : "btn-dark"}`}
          onClick={() => setMobileTab("pool")}
        >
          {/* rounded-0 hace que el boton no sea redondeado. ¿qué hace flex-fill? */}
          Cartas{" "}
          {mobileTab !== "pool" && (
            <span className="badge bg-warning text-dark ms-2">
              {filteredCards.length}
            </span>
          )}
        </button>
        {/* qué es flex-fill?  */}
        <div style={{ width: "1px", backgroundColor: "#444" }} />
        <button
          className={`btn flex-fill py-3 rounded-0 ${mobileTab === "deck" ? "btn-warning" : "btn-dark"}`}
          onClick={() => setMobileTab("deck")}
        >
          {" "}
          Mazo{" "}
          <span className="badge bg-warning text-dark ms-2">
            {deck.reduce((sum, c) => sum + c.quantity, 0)}
          </span>
        </button>
      </div>

      {/* fin barra inferior, sólo visible en movil */}
    </>
  );
};
