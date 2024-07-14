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
    return types.find((t) => t.id == type).name;
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

  return (
    <>
      <tr>
        <td>{edid}</td>
        <td>{name.toUpperCase()}</td>
        <td>{onTypes(type)}</td>
        <td>{onRarity(rarity)}</td>
        {
          <td>
            <button
              className="btn btn-primary my-2"
              onClick={() => handlerOpenForm(card)}
            >
              Detalles
            </button>
          </td>
        }
      </tr>
    </>
  );
};
