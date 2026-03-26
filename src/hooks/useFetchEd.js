import { useEffect, useState } from "react";

export function useFetchEd(ed) {
  const [dataCards, setDataCards] = useState(null);
  let url = `http://localhost:3001/api/edition/${ed}`;
  useEffect(() => {
    console.log("Haciendo solicitud a la URL:", url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataCards(data));
  }, [ed]);

  return { dataCards };
}
