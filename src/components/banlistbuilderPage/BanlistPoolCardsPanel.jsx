import { FormatSelector } from "../deckbuilderPage/FormatSelector";
import { PoolCards } from "../deckbuilderPage/PoolCards";
import { PoolFilters } from "../deckbuilderPage/PoolFilters";
import { BanlistPoolCards } from "./BanlistPoolCards";

export const BanlistPoolCardsPanel = ({
  mobileTab,
  setFormatoKey,
  filteredTypes,
  filteredRarities,
  filteredRaces,
  viewMode,
  setViewMode,
  setSearchInput,
  selectedType,
  setSelectedType,
  selectedRarity,
  setSelectedRarity,
  selectedRace,
  setSelectedRace,
  selectedEdition,
  handlerEditionChange,
  loading,
  progress,
  filteredCards,
  handleRowClick,
  onRaritySlug,
  onTypes,
  ediciones,
  handlerAddCard,
  handlerRemoveCard,
  setErrataModal,
}) => {
  return (
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
          ediciones={ediciones}
        />
      </div>
      <BanlistPoolCards
        loading={loading}
        progress={progress}
        filteredCards={filteredCards}
        handleRowClick={handleRowClick}
        onRaritySlug={onRaritySlug}
        viewMode={viewMode}
        onTypes={onTypes}
        handlerAddCard={handlerAddCard}
        handlerRemoveCard={handlerRemoveCard}
        setErrataModal={setErrataModal}
      />
    </div>
  );
};
