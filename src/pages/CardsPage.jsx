import { useReducer, useState } from "react";
import { CardForm } from "../components/CardForm";
import { CardsList } from "../components/CardsList";
import { useCards } from "../hooks/useCards";
import { CardModalForm } from "../components/CardModalForm";
import { useFetch } from "../hooks/useFetch";

export function CardsPage() {
  const {
    cards,
    cardSelected,
    handlerCardSelectedForm,
    visibleForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useCards();

  const { dataCards } = useFetch();
  let races = null;
  let rarities = null;
  let types = null;
  let keywords = null;
  let edition = null;
  let cardsArray = null;

  if (dataCards != undefined) {
    races = dataCards.races;
    rarities = dataCards.rarities;
    types = dataCards.types;
    keywords = dataCards.keywords;
    edition = dataCards.edition;
    cardsArray = dataCards.cards;
  }

  //const [cardSelected, setCardSelected] = useState(initialCardSelected);

  /*const handlerCardSelectedForm = (card) => {
    console.log(card);
    setCardSelected({ ...card });
  };*/

  console.log(cardsArray);

  return (
    <>
      <div className="container my-4">
        {/*<div className="col-4 mb-3">
          <CardForm
            cardSelected={cardSelected}
            handlerCloseForm={handlerCloseForm}
            races={races}
            rarities={rarities}
            types={types}
            keywords={keywords}
            edition={edition}
          />
        </div>*/}
      </div>
      {!visibleForm || (
        <CardModalForm
          cardSelected={cardSelected}
          handlerCloseForm={handlerCloseForm}
          races={races}
          rarities={rarities}
          types={types}
          keywords={keywords}
          edition={edition}
        />
      )}
      {!dataCards || (
        <div className="container my-4">
          <div className="row">
            {cards.length === 0 ? (
              <div className="alert alert-warning">
                No hay registros en el sistema
              </div>
            ) : (
              <CardsList
                cards={cardsArray}
                rarities={rarities}
                types={types}
                visibleForm={visibleForm}
                handlerOpenForm={handlerOpenForm}
                handlerCardSelectedForm={handlerCardSelectedForm}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}