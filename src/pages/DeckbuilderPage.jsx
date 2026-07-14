import { useEffect, useMemo, useState } from "react";
import { useFormats } from "../hooks/useResource";
import { useDeckCards } from "../hooks/useDeckCards";
import { CardModalForm } from "../components/cardsPage/CardModalForm";
import { useCards } from "../hooks/useCards";
import { DeckSection } from "../components/deckbuilderPage/DeckSection";
import { DeckModal } from "../components/deckbuilderPage/DeckModal";
import { getCardImageUrl } from "../helpers/cardImageUrl";
import { LazyCardImage } from "../components/deckbuilderPage/LazyCardImage";
import { useBodyClass } from "../hooks/useBodyClass";
import { useFormatsContext } from "../context/FormatsContext";
import { useDeckContext } from "../context/DeckContext";
import { useCardPool } from "../hooks/useCardPool";
import { useCardContext } from "../context/CardContext";
import { FormatSelector } from "../components/deckbuilderPage/FormatSelector";
import { PoolFilters } from "../components/deckbuilderPage/PoolFilters";
import { PoolCards } from "../components/deckbuilderPage/PoolCards";

export const DeckbuilderPage = () => {
  useBodyClass("page-deckbuilder");

  //useContext
  const { formatos } = useFormatsContext();
  const { deck, deckName, handlerAddCard, handlerRemoveCard, handlerDeckName } =
    useDeckContext();

  const { cardSelected, handlerCloseForm, handlerOpenForm, visibleForm } =
    useCardContext();

  const [formatoKey, setFormatoKey] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
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
  //console.log("total de cartas: ", cards);

  const {
    searchInput,
    setSearchInput,
    selectedType,
    setSelectedType,
    selectedRace,
    setSelectedRace,
    selectedRarity,
    setSelectedRarity,
    selectedEdition,
    setSelectedEdition,
    handlerEditionChange,
    viewMode,
    setViewMode,
    filteredCards,
  } = useCardPool(cards);

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

  //ver el mazo por consola
  /*useEffect(() => {
    console.log(deck);
  }, [deck]);*/

  //limpiar el selector de raza cuando se cambie de tipo de carta
  useEffect(() => {
    setSelectedRace("");
  }, [selectedType]);

  //limpiar los filtros de ediciones cuando se cambie el formato
  useEffect(() => {
    setSelectedEdition([]);
  }, [formatoKey]);

  const avgCost = () => {
    const cardsWithCost = deck.filter((c) => c.cost && c.cost !== "");
    //console.log(cards);
    //console.log(cardsWithCost);
    if (cardsWithCost.length === 0) return "—";
    const total = cardsWithCost.reduce(
      (sum, c) => sum + Number(c.cost) * c.quantity,
      0,
    );
    const qty = cardsWithCost.reduce((sum, c) => sum + c.quantity, 0);
    return (total / qty).toFixed(1);
  };

  //const filteredCards = filterCards(cards);
  //console.log("formatos", formato);
  return (
    <>
      {!showPreview || (
        <DeckModal
          formato={formato.name}
          showPreview={showPreview}
          setShowPreview={setShowPreview}
        />
      )}

      {!visibleForm || (
        <CardModalForm
          races={races}
          rarities={rarities}
          types={types}
          keywords={keywords}
          edition={ediciones}
        />
      )}
      <div
        className="container-pro justify-content-center pt-2 pb-md-0 px-0"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          /*height: "500px",*/
        }}
      >
        <div
          className="border rounded overflow-hidden madera text-light deckbuilder-container"
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <div
            className="row g-0"
            style={{
              flex: 1,
              overflow: "hidden",
              minHeight: 0,
              flexWrap: "nowrap",
            }}
          >
            <div
              className={`col-12 col-md-8 border ${mobileTab === "deck" ? "d-none d-md-block" : ""}`}
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                minHeight: 0,
              }}
            >
              {/* cómo es que col-12 no interfiere con col-md-8? si antes tenía col-8 
              por qué no se rompe el esquema en la pantalla del pc? */}
              <div className="p-2 border-bottom">
                {" "}
                {/* este padding regular los margenes de la tabla pool de cartas, ajustar aqui*/}
                <FormatSelector setFormatoKey={setFormatoKey} />
                <PoolFilters
                  filteredTypes={filteredTypes}
                  filteredRarities={filteredRarities}
                  filteredRaces={filteredRaces}
                  viewMode={viewMode}
                  setViewMode={setViewMode}
                  setSearchInput={setSearchInput}
                  selectedType={selectedType}
                  setSelectedType={setSelectedType}
                  selectedRarity={selectedRarity}
                  setSelectedRarity={setSelectedRarity}
                  selectedRace={selectedRace}
                  setSelectedRace={setSelectedRace}
                  selectedEdition={selectedEdition}
                  handlerEditionChange={handlerEditionChange}
                />
              </div>
              <PoolCards
                loading={loading}
                progress={progress}
                filteredCards={filteredCards}
                handleRowClick={handleRowClick}
                onRaritySlug={onRaritySlug}
                viewMode={viewMode}
                onTypes={onTypes}
              />
            </div>

            <div
              className={`col-12 col-md-4 border pb-2 ${mobileTab === "pool" ? "d-none d-md-block" : ""}`}
              style={{ overflow: "hidden" }}
            >
              <div
                className="p-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                {" "}
                {/* este padding regular los margenes de los detalles del mazo, ajustar aqui*/}
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Nombre del mazo..."
                  value={deckName}
                  onChange={(e) => handlerDeckName(e.target.value)}
                />
                <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
                  <ul className="list-group list-group-flush mt-2">
                    {deck.length > 0 && (
                      <>
                        <DeckSection type={"1"} sectionName={"Aliados"} />
                        <DeckSection type={"2"} sectionName={"Talismanes"} />
                        <DeckSection type={"3"} sectionName={"Armas"} />
                        <DeckSection type={"4"} sectionName={"Totems"} />
                        <DeckSection type={"5"} sectionName={"Oros"} />
                        <DeckSection type={"6"} sectionName={"Monumento"} />
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
                    <span>Costo promedio</span> <span>{avgCost()}</span>
                  </li>
                  <li>
                    <button
                      disabled={deck.length === 0}
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
        className="d-flex d-md-none fixed-bottom border-top"
        style={{ height: "56px", backgroundColor: "#1a1a1a", zIndex: 1000 }}
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
