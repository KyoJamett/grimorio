import { createContext, useContext, useState } from "react";

const BanlistContext = createContext();

export const BanlistProvider = ({ children }) => {
  const [banlist, setBanlist] = useState([]);
  const [banListName, setBanListName] = useState("");

  //HANDLERS
  const handlerAddCard = (card, rule, obs = "") => {
    setBanlist((prevBan) => {
      const existing = prevBan.some((c) => c.id === card.id);

      if (existing) {
        return prevBan.map((c) => (c.id === card.id ? { ...c, rule, obs } : c));
      }
      return [
        ...prevBan,
        {
          id: card.id,
          ed_edid: card.ed_edid,
          edid: card.edid,
          name: card.name,
          type: card.type,
          quantity: 1,
          cost: card.cost ? card.cost : null,
          rule: rule,
          obs: obs,
        },
      ];
    });
  };

  const handlerRemoveCard = (card) => {
    setBanlist((prevBan) => {
      return prevBan.filter((c) => c.id !== card.id);
    });
  };

  const handlerBanlistName = (name) => {
    setBanListName(name);
  };

  return (
    <BanlistContext.Provider
      value={{
        banlist,
        setBanlist,
        banListName,
        handlerBanlistName,
        handlerAddCard,
        handlerRemoveCard,
      }}
    >
      {children}
    </BanlistContext.Provider>
  );
};

export const useBanlistContext = () => useContext(BanlistContext);
