import { useEffect, useState } from "react";
import { useFormats } from "../hooks/useResource";
import { useDeckCards } from "../hooks/useDeckCards";
import { CardModalForm } from "../components/cardsPage/CardModalForm";
import { useCards } from "../hooks/useCards";

export const DeckbuilderPage = () => {
  const { formatos } = useFormats();
  const [formatoKey, setFormatoKey] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("");
  const [selectedEdition, setSelectedEdition] = useState("");
  const [deck, setDeck] = useState([]);

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
          edId: card.ed_edid,
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
        <div className="border rounded overflow-hidden madera text-light">
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
                      data-bs-theme="dark"
                      onChange={(e) => setSearchInput(e.target.value)}
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
                        className="btn btn-warning dropdown-toggle w-100"
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
                        className="btn btn-warning dropdown-toggle w-100"
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
                        className="btn btn-warning dropdown-toggle w-100"
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
                          <td>{card.name}</td>
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
                </div>
              </div>
            </div>
            <div className="col-4 border pb-2">
              <div className="p-2">
                {" "}
                {/* este padding regular los margenes de los detalles del mazo, ajustar aqui*/}
                <h4>Mazo</h4>
                <ul className="list-group list-group-flush">
                  {deck.length > 0 && (
                    <>
                      {deck.some((c) => String(c.type) === "1") && (
                        <>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Aliados</span>{" "}
                            <span className="badge bg-warning text-dark">
                              {deck
                                .filter((c) => c.type === "1")
                                .reduce((total, c) => total + c.quantity, 0)}
                            </span>
                          </li>
                          {deck
                            .filter((c) => c.type === "1")
                            .map((card) => {
                              return (
                                <>
                                  <span>
                                    {card.name + " x" + card.quantity}
                                  </span>
                                </>
                              );
                            })}
                        </>
                      )}
                      {deck.some((c) => String(c.type) === "2") && (
                        <>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Talismanes</span>{" "}
                            <span className="badge bg-warning text-dark">
                              {deck
                                .filter((c) => c.type === "2")
                                .reduce((total, c) => total + c.quantity, 0)}
                            </span>
                          </li>
                          {deck
                            .filter((c) => c.type === "2")
                            .map((card) => {
                              return (
                                <>
                                  <span>
                                    {card.name + " x" + card.quantity}
                                  </span>
                                </>
                              );
                            })}
                        </>
                      )}
                      {deck.some((c) => String(c.type) === "3") && (
                        <>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Armas</span>{" "}
                            <span className="badge bg-warning text-dark">
                              {deck
                                .filter((c) => c.type === "3")
                                .reduce((total, c) => total + c.quantity, 0)}
                            </span>
                          </li>
                          {deck
                            .filter((c) => c.type === "3")
                            .map((card) => {
                              return (
                                <>
                                  <span>
                                    {card.name + " x" + card.quantity}
                                  </span>
                                </>
                              );
                            })}
                        </>
                      )}
                      {deck.some((c) => String(c.type) === "4") && (
                        <>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Tótems</span>{" "}
                            <span className="badge bg-warning text-dark">
                              {deck
                                .filter((c) => c.type === "4")
                                .reduce((total, c) => total + c.quantity, 0)}
                            </span>
                          </li>
                          {deck
                            .filter((c) => c.type === "4")
                            .map((card) => {
                              return (
                                <>
                                  <span>
                                    {card.name + " x" + card.quantity}
                                  </span>
                                </>
                              );
                            })}
                        </>
                      )}
                      {deck.some((c) => String(c.type) === "5") && (
                        <>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Oros</span>{" "}
                            <span className="badge bg-warning text-dark">
                              {deck
                                .filter((c) => c.type === "5")
                                .reduce((total, c) => total + c.quantity, 0)}
                            </span>
                          </li>
                          {deck
                            .filter((c) => c.type === "5")
                            .map((card) => {
                              return (
                                <>
                                  <span>
                                    {card.name + " x" + card.quantity}
                                  </span>
                                </>
                              );
                            })}
                        </>
                      )}
                      {deck.some((c) => String(c.type) === "6") && (
                        <>
                          <li className="list-group-item d-flex justify-content-between">
                            <span>Monumento</span>{" "}
                            <span className="badge bg-warning text-dark">
                              {deck
                                .filter((c) => c.type === "6")
                                .reduce((total, c) => total + c.quantity, 0)}
                            </span>
                          </li>
                          {deck
                            .filter((c) => c.type === "6")
                            .map((card) => {
                              return (
                                <>
                                  <span>
                                    {card.name + " x" + card.quantity}
                                  </span>
                                </>
                              );
                            })}
                        </>
                      )}
                    </>
                  )}
                </ul>
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
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
