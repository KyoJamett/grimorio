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
      : "No aplica";
  };

  const onTypes = (type) => {
    return types.find((t) => t.id == type)
      ? types.find((t) => t.id == type).name
      : "";
  };

  const onRace = (race) => {
    return races.find((r) => r.id == race)
      ? races.find((r) => r.id == race).name
      : "No aplica";
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

  const onAbility = (ability) => {
    //limpiar habilidades con saltos de linea /n presentes en algunas cartas
    return ability.replace(/\/n|↵|\r\n|\r|\n/g, "\n");
  };

  const onCost = (cost) => {
    // el operador de fusion nulla retorna no aplica sólo si cost en null o undefined
    return cost ?? "No aplica";
  }

  const onDamage = (damage) => {
    return damage ?? "No aplica";
  }

  const onEdition = (edition) => {
    return edition?.title ?? "No aplica";
  }

  const dataCard = () => {
    return [
      { label: "Tipo", value: onTypes(type) },
      { label: "Costo", value: onCost(cost)},
      { label: "Raza", value: onRace(race)},
      { label: "Fuerza", value:  onDamage(damage)},
      { label: "Rareza", value: onRarity(rarity)},
      { label: "Edición", value: onEdition(edition) },
    ];
  }

  return (
    <div className="container my-4">
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
                    <ul className="list-unstyled dataText">
                      {dataCard().map((item, index) => (
                        <li key={index} className="mb-2 row">
                          <div className="col-5 fw-bold text-end">{item.label}:</div>
                          <div className="col-7">{item.value}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </div>
                <div className="card-body">
                  <h6>Habilidad</h6>
                  <p className="card-text skill-text justificado backslash">
                    {(ability === null || ability === undefined ? "Carta sin habilidad" : onAbility(ability))}
                  </p>
                </div>
                <div className="card-body">
                  <h6>Texto épico</h6>
                <p className="card-text cursiva justificado">
                        {(flavour === null || flavour === undefined ? "No contiene texto épico." : flavour)}
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
