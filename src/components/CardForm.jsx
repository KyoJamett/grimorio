import { useEffect, useState } from "react";
import { useCards } from "../hooks/useCards";

export const CardForm = ({
  cardSelected,
  handlerCloseForm,
  races,
  rarities,
  types,
  keywordsArray,
  edition,
}) => {
  const { initialCardSelected } = useCards();
  const [cardForm, setCardForm] = useState(initialCardSelected);
  const {
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
  } = cardForm;

  useEffect(() => {
    setCardForm({
      ...cardSelected,
    });
  }, [cardSelected]);

  const onCloseForm = () => {
    handlerCloseForm();
    setCardForm(initialCardSelected);
  };

  const onRarity = (rarity) => {
    return rarities.find((r) => r.id == rarity).name;
  };
  console.log("tipo: " + type);
  const onTypes = (type) => {
    return types.find((t) => t.id == type)
      ? types.find((t) => t.id == type).name
      : "";
  };

  const onRace = (race) => {
    return races.find((r) => r.id == race)
      ? races.find((r) => r.id == race).name
      : "";
  };

  const onEd = (ed_edid) => {
    if (ed_edid === "") {
      return "00";
    } else {
      return ed_edid;
    }
  };

  const onEdid = (edid) => {
    if (edid === "") {
      return "000";
    } else {
      return edid;
    }
  };

  return (
    <>
      <div className="card">
        <div className="row">
          <div className="col">
            {/*<img src="...imagen" className="card-img-top" alt="..." />*/}
            <img
              src={
                "https://api.myl.cl/static/cards/" +
                onEd(ed_edid) +
                "/" +
                onEdid(edid) +
                ".png"
              }
              className="card-img-top"
              alt="card"
            />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">{name.toUpperCase()}</h5>
              <p className="card-text">{"Habilidad: " + ability}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {"Tipo de carta: " + onTypes(type)}
              </li>
              <li className="list-group-item">
                {"Costo: " + (cost === null ? "no aplica" : cost)}
              </li>
              <li className="list-group-item">
                {"Fuerza: " + (damage === null ? "no aplica" : damage)}
              </li>
              <li className="list-group-item">
                {"Raza: " + (race === null ? "no aplica" : onRace(race))}
              </li>
              {/*<li className="list-group-item">{"Texto épico: " + flavour}</li>*/}
            </ul>
          </div>
          <p className="card-text">
            {"Texto épico: " + (flavour === null ? "no aplica" : flavour)}
          </p>
        </div>

        <button
          className="btn btn-primary mx-2"
          type="button"
          onClick={onCloseForm}
        >
          Cerrar
        </button>
      </div>
    </>
  );
};
