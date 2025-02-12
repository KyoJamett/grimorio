import React, { useEffect, useState } from "react";
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
    return rarities.find((r) => r.id == rarity)
    ? rarities.find((r) => r.id == rarity).name
      : "";
  };
  console.log("fuerza: " + damage);
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
      <div
        className="modal fade show"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-scrollable" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{name.toUpperCase()}</h5>
              <button
                type="button"
                className="btn-close btn-close-red"
                onClick={onCloseForm}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="card">
                <div className="row">
                  <div className="col card-col">
                    <img
                      src={
                        "https://api.myl.cl/static/cards/" +
                        onEd(ed_edid) +
                        "/" +
                        onEdid(edid) +
                        ".png"
                      }
                      className="card-img-top img-fluid"
                      alt="card"
                    />
                  </div>
                  <div className="col card-col">
                    <div className="card-body">
                      {/*<h5 className="card-title">{name.toUpperCase()}</h5>*/}
                      
                      <ul className="list-unstyled dataText">
                        <li className="mb-2 margin">
                          {"Tipo: " + onTypes(type)}
                        </li>
                        <li className="mb-2 margin">
                          {"Costo: " + (cost === null || cost === undefined ? "no aplica" : cost)}
                        </li>
                        <li className="mb-2 margin">
                          {"Fuerza: " +
                            (damage === null || damage === undefined ? "no aplica" : damage)}
                        </li>
                        <li className="mb-2 margin">
                          {"Raza: " +
                            (race === null || race === undefined ? "no aplica" : onRace(race))}
                        </li>
                        <li className="mb-2 margin">
                          {"Frecuencia: " +
                            (rarity === null || rarity === undefined ? "no aplica" : onRarity(rarity))}
                        </li>
                        <li className="mb-2 margin">
                          {"Edición: " +
                            (edition === null || edition === undefined ? "no aplica" : edition.title)}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                        <p className="card-text skill-text justificado backslash">
                          {"Habilidad: " +
                            (ability === null || ability === undefined ? "Carta sin habilidad" : ability)}
                        </p>
                    </div>
                <div className="card-body">
                <p className="card-text cursiva justificado">
                        {"Texto épico: " +
                          (flavour === null || flavour === undefined ? "No contiene texto épico" : flavour)}
                      </p>
                </div>
              </div>
            </div>
            {/*<div className="modal-footer">
          <button
            className="btn btn-primary"
            type="button"
            onClick={onCloseForm}
          >
            Cerrar
          </button>
        </div>*/}
          </div>
        </div>
      </div>
    </>
  );
};
