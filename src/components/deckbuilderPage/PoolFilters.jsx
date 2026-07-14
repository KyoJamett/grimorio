import { useCardPool } from "../../hooks/useCardPool";
import { useDeckCards } from "../../hooks/useDeckCards";

export const PoolFilters = ({
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
  ediciones,
}) => {
  //const { ediciones } = useDeckCards();
  return (
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
              : filteredTypes.find((t) => String(t.id) === String(selectedType))
                  ?.name}
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
      {selectedType == 1 && (
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
      )}

      <div className="d-flex flex-row flex-wrap gap-2">
        {/* acá están en una misma línea debido a d-flex */}
        {ediciones.map(({ id, title }) => (
          <div className="form-check form-switch" key={id}>
            <input
              className="form-check-input"
              type="checkbox"
              id={id}
              checked={selectedEdition.includes(String(id))}
              onChange={() => handlerEditionChange(id)}
            />
            <label className="form-check-label responsive-label" htmlFor={id}>
              {title}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
