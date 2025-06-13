import { useState } from "react";
import { SearchBarEd } from "../SearchBarEd";
import { DropdownFilter } from "../DropdownFilter";
import { CardTable } from "../CardTable";

export const CardsList = ({
  cards = [],
  rarities = [],
  types = [],
  edition = [],
  races = [],
  handlerOpenForm,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedRace, setSelectedRace] = useState("");
  const [selectedRarity, setSelectedRarity] = useState("");

  const filteredRaces = races.filter((race) =>
    cards.some((card) => card.race === race.id)
  );
  console.log(filteredRaces, "filteredRaces");

  const filteredRarities = rarities.filter((rarity) =>
    cards.some((card) => card.rarity === rarity.id)
  );

  const filteredTypes = types.filter((type) =>
    cards.some((card) => card.type === type.id)
  );

  // Función para filtrar las cartas
  const filterCards = (cards) => {
    return cards.filter((card) => {
      const matchesSearch =
        searchInput.trim().toLowerCase() === "" ||
        card.name.toLowerCase().includes(searchInput.toLowerCase());
      const matchesType =
        selectedType === "" ||
        (card.type &&
          typeof card.type === "string" &&
          card.type.toLowerCase() === selectedType.toString().toLowerCase());
      const matchesRace =
        selectedRace === "" ||
        (card.race &&
          typeof card.race === "string" &&
          card.race.toLowerCase() === selectedRace.toLowerCase());
      const matchesRarity =
        selectedRarity === "" ||
        (card.rarity &&
          typeof card.rarity === "string" &&
          card.rarity.toLowerCase() === selectedRarity.toLowerCase());

      const isValidCard =
        (selectedType === "" ||
          (card.type &&
            typeof card.type === "string" &&
            card.type.toLowerCase() === selectedType.toLowerCase())) &&
        (selectedRace === "" ||
          (card.race &&
            typeof card.race === "string" &&
            card.race.toLowerCase() === selectedRace.toLowerCase())) &&
        (selectedRarity === "" ||
          (card.rarity &&
            typeof card.rarity === "string" &&
            card.rarity.toLowerCase() === selectedRarity.toLowerCase()));
      return (
        matchesSearch &&
        matchesType &&
        matchesRace &&
        matchesRarity &&
        isValidCard
      );
    });
  };

  return (
    <>
      <div className="table-responsive card">
        <br></br>
        <h2>Edición {edition.title}</h2>
        <h5>Lista de cartas</h5>
        <br></br>
        <div className="col-4 mb-3">
          <SearchBarEd setSearchInput={setSearchInput} />
        </div>
        {/*----------------------------------------- */}
        {console.log("frecuencias: ", rarities)}{" "}
        {console.log("tipos de cartas: ", types)}{" "}
        {console.log("razas: ", races)}
        <div className="row rowDropdown">
          <DropdownFilter
            label="Tipo de Carta"
            onSelect={setSelectedType}
            options={filteredTypes}
            selected={selectedType}
          />
          <DropdownFilter
            label="Raza"
            onSelect={setSelectedRace}
            options={filteredRaces}
            selected={selectedRace}
          />
          <DropdownFilter
            label="Frecuencia"
            onSelect={setSelectedRarity}
            options={filteredRarities}
            selected={selectedRarity}
          />
        </div>
        {/*----------------------------------------- */}
        <CardTable
          cards={filterCards(cards)}
          rarities={rarities}
          types={types}
          handlerOpenForm={handlerOpenForm}
        />
      </div>
    </>
  );
};
