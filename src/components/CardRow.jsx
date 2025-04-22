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
    const foundRarity = rarities.find((r) => r.id == rarity);
    return foundRarity ? foundRarity.name || "sin rareza" : "sin rareza";
  };

  const onRaritySlug = (rarity) => {
    const foundRarity = rarities.find((r) => r.id == rarity);
    return foundRarity ? foundRarity.slug || "sin rareza" : "default";
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
  console.log("slug: ", onRaritySlug(rarity));
  return (
    <>
      <tr onClick={handleRowClick} style={{ cursor: "pointer" }} data-rarity-color={onRaritySlug(rarity)} className="rarity">
        <td>{edid}</td>
        <td>{name.toUpperCase()}</td>
        <td>{onTypes(type)}</td>
        <td>{onRarity(rarity)}</td>
      </tr>
    </>
  );
};
