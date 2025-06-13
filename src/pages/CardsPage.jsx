import { useCards } from "../hooks/useCards";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFetchEd } from "../hooks/useFetchEd";
import { Loading } from "../components/Loading";
import { CardModalForm } from "../components/cardsPage/CardModalForm";
import { CardsList } from "../components/cardsPage/CardsList";

export function CardsPage() {
  const {
    cards,
    cardSelected,
    visibleForm,
    handlerOpenForm,
    handlerCloseForm,
  } = useCards();

  const navigate = useNavigate();
  const { ed } = useParams();
  console.log(ed);
  function getEd() {
    const location = useLocation();
    console.log(location);
    if (location.state) {
      return location.state.ed;
    } else {
      console.log("redirecciona");
      navigate("/");
    }
  }

  function handlerRedirect() {}

  const { dataCards } = useFetchEd(ed);
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
    cardsArray = dataCards.cards.sort(
      (a, b) => Number(a.edid) - Number(b.edid)
    );
  }

  console.log(dataCards);
  console.log(cardsArray);

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
          edition={edition}
        />
      )}
      <div className="container my-5 justify-content-center">
        <div className="row">
          {!dataCards ? (
            <Loading />
          ) : (
            <CardsList
              cards={cardsArray}
              rarities={rarities}
              types={types}
              races={races}
              edition={edition}
              visibleForm={visibleForm}
              handlerOpenForm={handlerOpenForm}
            />
          )}
        </div>
      </div>
    </>
  );
}
