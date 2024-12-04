import { useEffect, useState } from "react";

/*export function useFetchEd(ed) {
  const [dataCards, setDataCards] = useState(null);
  let url = "https://api.myl.cl/cards/edition/" + ed;
  useEffect(() => {
    console.log("Haciendo solicitud a la URL:", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataCards(data));
  }, []);

  return { dataCards };
}*/
export function useFetchEd(ed) {
  const [dataCards, setDataCards] = useState(null);
  let url =
    "https://grimorio-4af23-default-rtdb.firebaseio.com/" + ed + ".json";
  useEffect(() => {
    console.log("Haciendo solicitud a la URL:", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataCards(data));
  }, []);

  return { dataCards };
}
