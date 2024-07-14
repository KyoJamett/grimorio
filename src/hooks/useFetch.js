import { useEffect, useState } from "react";

export function useFetch() {
  const [dataCards, setDataCards] = useState(null);

  useEffect(() => {
    fetch("https://api.myl.cl/cards/edition/hijos-del-sol")
      .then((response) => response.json())
      .then((data) => setDataCards(data));
  }, []);

  return { dataCards };
}
