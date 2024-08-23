import { useState } from "react";
import { CardRow } from "./CardRow";

export const CardsList = ({
  cards = [],
  rarities = [],
  types = [],
  visibleForm,
  handlerOpenForm,
  handlerCardSelectedForm,
}) => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <>
      <div className="table-responsive card">
        <br></br>
        <h2>Lista de Cartas</h2>
        <br></br>

        <div className="col-4 mb-3">
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
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
              {/*<th>Info</th>*/}
            </tr>
          </thead>
          <tbody>
            {cards
              .filter((card) => {
                return searchInput.trim().toLowerCase() === ""
                  ? card
                  : card.name.toLowerCase().includes(searchInput.toLowerCase());
              })
              .map(
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
