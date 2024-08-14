import { useEffect, useState } from "react";

export function useFetchEd(ed) {
  const [dataCards, setDataCards] = useState(null);

  useEffect(() => {
    fetch("https://api.myl.cl/cards/edition/" + ed)
      .then((response) => response.json())
      .then((data) => setDataCards(data));
  }, []);

  return { dataCards };
}
