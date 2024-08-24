import { NavLink } from "react-router-dom";
import { CardModalForm } from "./CardModalForm";
import { useCards } from "../hooks/useCards";

export const CardRow = ({
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
  rarities,
  types,
  handlerOpenForm,
}) => {
  const onRarity = (rarity) => {
    return rarities.find((r) => r.id == rarity).name;
  };

  const onTypes = (type) => {
    const foundType = types.find((t) => t.id == type);
    return foundType ? foundType.name || "sin nombre" : "sin nombre";
  };

  const card = {
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
  };

  const handleRowClick = () => {
    handlerOpenForm(card);
  };

  return (
    <>
      <tr onClick={handleRowClick} style={{ cursor: "pointer" }}>
        <td>{edid}</td>
        <td>{name.toUpperCase()}</td>
        <td>{onTypes(type)}</td>
        <td>{onRarity(rarity)}</td>
        {/*
          <td>
            <button
              className="btn btn-primary my-2"
              onClick={() => handlerOpenForm(card)}
            >
              Detalles
            </button>
          </td>*/}
      </tr>
    </>
  );
};
