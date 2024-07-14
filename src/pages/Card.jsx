import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import images from "../images/images";

export const Card = ({ cards = [], initialCardSelected }) => {
  const [cardSelected, setCardSelected] = useState(initialCardSelected);

  const { id } = useParams();

  useEffect(() => {
    const card = cards.find((u) => u.id == id) || initialCardSelected;
    setCardSelected(card);
  }, [id]);

  return (
    <>
      <div className="container my-4">
        <h3>{cardSelected.name}</h3>
        <br></br>
        <div className="row">
          <div className="col-md-8">
            <img
              src={images[cardSelected.name.toLowerCase()]}
              alt="card"
              id="image_cards"
              className="rounded"
            />
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-md-6">
            <h5>Descripcion</h5>
            <p className="text-justify">{cardSelected.more}</p>
          </div>
          <div className="col-md-6">
            <h5>Área</h5>
            <p className="text-justify">{cardSelected.area}</p>
          </div>
        </div>
      </div>
    </>
  );
};
