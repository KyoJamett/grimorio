import { useMemo, useState } from "react";

export function useCardPool(cards) {
    const [searchInput, setSearchInput] = useState("");
      const [selectedType, setSelectedType] = useState("");
      const [selectedRace, setSelectedRace] = useState("");
      const [selectedRarity, setSelectedRarity] = useState("");
      const [selectedEdition, setSelectedEdition] = useState([]);
      const [viewMode, setViewMode] = useState("table");

      // Función para filtrar las cartas, falta entender qué es useMemo y cómo funciona
        const filteredCards = useMemo(() => {
          return cards.filter((card) => {
            const matchesSearch =
              searchInput.trim() === "" ||
              (card.name ?? "")
                .toLowerCase()
                .includes(searchInput.trim().toLowerCase());
      
            const matchesType =
              selectedType === "" || String(card.type ?? "") === String(selectedType);
      
            const matchesRace =
              selectedRace === "" || String(card.race ?? "") === String(selectedRace);
      
            const matchesRarity =
              selectedRarity === "" ||
              String(card.rarity ?? "") === String(selectedRarity);
      
            const matchesEdition =
              selectedEdition.length === 0 ||
              selectedEdition.includes(String(card.ed_edid ?? ""));
            return (
              matchesSearch &&
              matchesType &&
              matchesRace &&
              matchesRarity &&
              matchesEdition
            );
          });
        }, [
          cards,
          searchInput,
          selectedType,
          selectedRace,
          selectedRarity,
          selectedEdition,
        ]);

        const handlerEditionChange = (id) => {
    setSelectedEdition(
      (prev) =>
        prev.includes(String(id))
          ? prev.filter((e) => e !== String(id)) // quitar
          : [...prev, String(id)], // agregar
    );
  };

  return{searchInput, setSearchInput,
selectedType, setSelectedType,
selectedRace, setSelectedRace,
selectedRarity, setSelectedRarity,
selectedEdition, setSelectedEdition, handlerEditionChange,
viewMode, setViewMode, filteredCards};
}