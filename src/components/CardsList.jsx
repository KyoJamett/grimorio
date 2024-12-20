import { useState } from "react";
import { CardRow } from "./CardRow";

export const CardsList = ({
  cards = [],
  rarities = [],
  types = [],
  edition = [],
  races = [],
  visibleForm,
  handlerOpenForm,
  handlerCardSelectedForm,
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
  const filterCards = (
    cards,
    searchInput,
    selectedType,
    selectedRace,
    selectedRarity
  ) => {
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
          <form className="d-flex" role="search">
            <input
              className="form-control form-control-xl custom-search-input me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </form>
          {/*visibleForm || (
            <div className="col">
              <button
                className="btn btn-primary my-2"
                onClick={handlerOpenForm}
              >
                Agregar especie
              </button>
            </div>
          )*/}
        </div>
        {/*----------------------------------------- */}
        {console.log(rarities)} {console.log(types)} {console.log(races)}
        <div className="row rowDropdown">
          <div className="col-12 col-sm-4 mb-3 dropdown-column">
            <div className="btn-group w-100">
              <button
                type="button"
                className="btn btn-warning dropdown-toggle w-100"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {selectedType === ""
                  ? "Tipo de carta"
                  : filteredTypes.find((t) => t.id === selectedType)?.name}
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
                {filteredTypes.map(({ id, name, slug }) => (
                  <a
                    key={id}
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedType(id);
                    }}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-4 mb-3 dropdown-column">
            <div className="btn-group w-100">
              <button
                type="button"
                className="btn btn-warning dropdown-toggle w-100"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {selectedRace === ""
                  ? "Raza"
                  : filteredRaces.find((r) => r.id === selectedRace)?.name}
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
                {filteredRaces.map(({ id, name, slug }) => (
                  <a
                    key={id}
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedRace(id);
                    }}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-4 mb-3 dropdown-column">
            <div className="btn-group w-100">
              <button
                type="button"
                className="btn btn-warning dropdown-toggle w-100"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {selectedRarity === ""
                  ? "Frecuencia"
                  : filteredRarities.find((r) => r.id === selectedRarity)?.name}
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
                  Todos
                </a>
                {filteredRarities.map(({ id, name, slug }) => (
                  <a
                    key={id}
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedRarity(id);
                    }}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/*----------------------------------------- */}
        <table className="table table-hover table-striped rounded-3 border">
          <thead className="table-responsive table-dark">
            <tr>
              <th>N° Edición</th>
              <th>Nombre</th>
              <th>Tipo</th>
              <th>Frecuencia</th>
            </tr>
          </thead>
          <tbody>
            {filterCards(
              cards,
              searchInput,
              selectedType,
              selectedRace,
              selectedRarity
            ).map(
              ({
                id,
                edid,
                slug,
                name,
                rarity,
                race,
                type,
                keywords,
                cost,
                damage,
                ability,
                flavour,
                ed_edid,
                ed_slug,
              }) => (
                <CardRow
                  key={id}
                  id={id}
                  edid={edid}
                  slug={slug}
                  name={name}
                  rarity={rarity}
                  race={race}
                  type={type}
                  keywords={keywords}
                  cost={cost}
                  damage={damage}
                  ability={ability}
                  flavour={flavour}
                  ed_edid={ed_edid}
                  ed_slug={ed_slug}
                  rarities={rarities}
                  types={types}
                  handlerOpenForm={handlerOpenForm}
                  handlerCardSelectedForm={handlerCardSelectedForm}
                />
              )
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
