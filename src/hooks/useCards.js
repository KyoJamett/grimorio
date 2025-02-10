import { useReducer, useState } from "react";
import { cardsReducer } from "../reducers/cardsReducer";

/*  objetos iniciales de array crads y cardSelected */
const initialCards = [
  {
    id: 1,
    name: "Chincol",
    description:
      "Son aves solitarias, que sólo forman parejas en época de reproducción. Se alimentan principalmente de semillas y gusanos.",
    area: "Praderas y bosques",
    more: "Mide unos 15 cms. de largo. Su cara y cresta son grises con bandas laterales negras. Tiene un collar ancho castaño alrededor del cuello, y su vientre y partes inferiores son blanquecinas. Sus alas y cola son gris oscuras con algo de canela y dos bandas blancas. Son aves solitarias, que sólo forman parejas en época de reproducción. Se alimentan principalmente de semillas y gusanos.",
  },
  {
    id: 2,
    name: "Tenca",
    description:
      "Gran cantora, puede imitar el sonido de otros pájaros. Suele anidar en árboles con espinas, y pone 3 huevos.",
    area: "Laderas de cerros con arbustos",
    more: "Mide 28 cms, y se asemeja al zorzal. Tiene las partes superiores café obscuras y las partes inferiores gris café pálidas. Su garganta es blanquecina con estrías más oscuras en el vientre. Tiene una conspicua ceja blanca y una cola larga de color café oscuro con mancha blanca en borde terminal externo. Gran cantora, puede imitar el sonido de otros pájaros. Suele anidar en árboles con espinas, y pone 3 huevos.",
  },
  {
    id: 3,
    name: "Diuca",
    description:
      "Su coloración general es gris con mancha blanca en la garganta y abdomen, y sectores acanelados en el bajo vientre.",
    area: "Toda clase de ambientes, desde campos, pueblos, cerros o plazas",
    more: "Alcanza 17,5 cm de altura. Sus alas y cola son negruzcas, esta última con mancha blanca en la parte Terminal. Anidan en arbustos y árboles chicos, poniendo 2, 3 o 4 huevos de color azul-verdoso pálido con manchas café.",
  },
];

const initialCardSelected = {
  id: "0",
  edid: "",
  slug: "",
  name: "nombre_de_carta",
  rarity: "rareza_de_carta",
  race: "raza_de_carta",
  type: "tipo_de_carta",
  keywords: "arreglo_de_keywords",
  cost: "costo_de_carta",
  damage: "fuerza_de_carta",
  ability: "habilidad_de_carta",
  flavour: "lore_de_carta",
  ed_edid: "",
  ed_slug: "",
};
/*  objetos iniciales de array crads y cardSelected */



const intro = {
  text: "Bienvenido, aquí podrás encontrar información sobre los formatos de mitos y leyendas, las ediciones que los componen y buscar información sobre las cartas. Accede a los formatos mediante la barra de navegación. Página en desarrollo.",
};

export const useCards = () => {
  const [cardSelected, setCardSelected] = useState(initialCardSelected);
  const [visibleForm, setVisibleForm] = useState(false);
  const [cards, dispatch] = useReducer(cardsReducer, initialCards);
  
  const handlerCardSelectedForm = (card) => {
    console.log(card);
    setCardSelected({ ...card });
  };

  const handlerOpenForm = (card) => {
    handlerCardSelectedForm(card);
    setVisibleForm(true);
  };

  const handlerCloseForm = () => {
    setVisibleForm(false);
    setCardSelected(initialCardSelected);
  };

  return {
    cards,
    initialCards,
    initialCardSelected,
    visibleForm,
    cardSelected,
    handlerOpenForm,
    handlerCloseForm,
    intro
  };
};
