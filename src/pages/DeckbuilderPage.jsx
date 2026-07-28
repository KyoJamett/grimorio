import { useEffect, useMemo, useState } from "react";
import { useDeckCards } from "../hooks/useDeckCards";
import { CardModalForm } from "../components/cardsPage/CardModalForm";
import { useCards } from "../hooks/useCards";
import { DeckModal } from "../components/deckbuilderPage/DeckModal";
import { getCardImageUrl } from "../helpers/cardImageUrl";
import { useBodyClass } from "../hooks/useBodyClass";
import { useFormatsContext } from "../context/FormatsContext";
import { useDeckContext } from "../context/DeckContext";
import { useCardPool } from "../hooks/useCardPool";
import { useCardContext } from "../context/CardContext";
import { BottomNavigation } from "../components/layout/BottomNavigation";
import { DeckPanel } from "../components/deckbuilderPage/DeckPanel";
import { PoolCardsPanel } from "../components/deckbuilderPage/PoolCardsPanel";
import { CardForm } from "../components/CardForm";
import { DeckPreview } from "../components/deckbuilderPage/DeckPreview";

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
  //console.log("Ediciones: ", ediciones);

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

  const cardsByEdition = useMemo(() => {
    return cards.filter((card) => {
      return (
        selectedEdition.length === 0 ||
        selectedEdition.includes(String(card.ed_edid ?? ""))
      );
    });
  }, [cards, selectedEdition]);

  const filteredRaces = races.filter((race) =>
    cardsByEdition.some((card) => String(card.race) === race.id),
  );

  const filteredRarities = rarities.filter((rarity) =>
    cardsByEdition.some((card) => String(card.rarity) === rarity.id),
  );

  const filteredTypes = types.filter((type) =>
    cardsByEdition.some((card) => String(card.type) === type.id),
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

  const getEdition = (card) => {
    const edition = ediciones.filter((c) => c.id === card.ed_edid);
    //console.log("edicion: ", edition);
    return edition[0];
  };

  //const filteredCards = filterCards(cards);
  //console.log("formatos", formato);
  return (
    <>
      {!showPreview || (
        <DeckModal
          title={"Vista previa del mazo"}
          showPreview={showPreview}
          setShowPreview={setShowPreview}
          exportName={deckName}
        >
          <DeckPreview
            cards={deck}
            deckName={deckName}
            formatoName={formato?.name}
          />
        </DeckModal>
      )}
      {/*console.log(cardSelected)*/}
      {!visibleForm || (
        <CardModalForm title="Ficha de carta">
          <CardForm
            cardSelected={cardSelected}
            handlerCloseForm={handlerCloseForm}
            races={races}
            rarities={rarities}
            types={types}
            keywordsArray={keywords}
            edition={getEdition(cardSelected)}
          />
        </CardModalForm>
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
            <PoolCardsPanel
              mobileTab={mobileTab}
              setFormatoKey={setFormatoKey}
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
              loading={loading}
              progress={progress}
              filteredCards={filteredCards}
              handleRowClick={handleRowClick}
              onRaritySlug={onRaritySlug}
              onTypes={onTypes}
              ediciones={ediciones}
              handlerAddCard={handlerAddCard}
              handlerRemoveCard={handlerRemoveCard}
            />

            <DeckPanel
              mobileTab={mobileTab}
              deck={deck}
              deckName={deckName}
              handlerDeckName={handlerDeckName}
              setShowPreview={setShowPreview}
              avgCost={avgCost}
            />
          </div>
        </div>
      </div>
      {/* inicio barra inferior, sólo visible en movil */}
      <BottomNavigation
        mobileTab={mobileTab}
        setMobileTab={setMobileTab}
        filteredCards={filteredCards}
        deck={deck}
        text="Mazo"
      />
      {/* fin barra inferior, sólo visible en movil */}
    </>
  );
};
