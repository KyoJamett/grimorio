import { useState } from "react";
import { CardRow } from "./CardRow";

export const CardsList = ({
  cards = [],
  rarities = [],
  types = [],
  edition = [],
  visibleForm,
  handlerOpenForm,
  handlerCardSelectedForm,
}) => {
  const [searchInput, setSearchInput] = useState("");

  // Función para filtrar las cartas
  const filterCards = (cards, searchInput) => {
    return cards.filter((card) => {
      return searchInput.trim().toLowerCase() === ""
        ? card
        : card.name.toLowerCase().includes(searchInput.toLowerCase());
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
            {filterCards(cards, searchInput).map(
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
