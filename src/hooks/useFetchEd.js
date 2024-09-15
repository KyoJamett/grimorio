import { useEffect, useState } from "react";

export function useFetchEd(ed) {
  const [dataCards, setDataCards] = useState(null);
  let url = "https://api.myl.cl/cards/edition/" + ed;
  useEffect(() => {
    console.log("Haciendo solicitud a la URL:", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataCards(data));
  }, []);

  return { dataCards };
}
