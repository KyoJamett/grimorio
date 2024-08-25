import { useEffect, useReducer, useState } from "react";
import { cardsReducer } from "../reducers/cardsReducer";

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
  ability: "habilidad de carta",
  flavour: "lore de carta",
  ed_edid: "",
  ed_slug: "",
};

const homeText = {
  text: "Seleccione la edición que desea consultar",
};

const escuelas = {
  name: "Escuelas Elementales",
  intro:
    "Escuelas Elementales es un formato de nueva era, compuesto inicialmente por las ediciones Dominio, Contraataque, Águila Imperial, Steampunk, Axis Mundi, Hijos del Sol y Legado Gótico.",
  details:
    "El formato al ser actualmente sólo de comunidad, ha sido sometido a cambios, siendo el más aceptado por las comunidades la inclusión de las ediciones Bushido y Sol Naciente, a fin de dar algo de soporte extra a ciertas razas débiles. Adicionalmente se creó una edición recopilatoria también llamada Escuelas Elementales. \n La edición destaca por su mecánica de combinar dos razas para la construcción de mazos. Guerrero-Dragón, Caballero-Sacerdote, Faerie-Eterno y Sombra-Oni.",

  ediciones: [
    { ed: "bushido", edImg: "bushido.png" },
    { ed: "sol-naciente", edImg: "sol_naciente.png" },
    { ed: "dominio", edImg: "dominio.png" },
    { ed: "contraataque", edImg: "contraataque.png" },
    { ed: "aguila-imperial", edImg: "aguila_imperial.png" },
    { ed: "steampunk", edImg: "steampunk.png" },
    { ed: "axis-mundi", edImg: "axis-mundi.png" },
    { ed: "hijos-del-sol", edImg: "hijos_del_sol.png" },
    { ed: "legado-gotico", edImg: "legado-gotico.png" },
    { ed: "escuelas_elementales", edImg: "escuelas_elementales.png" },
  ],
};

const civilizaciones = {
  name: "Civilizaciones",
  intro:
    "Civilizaciones es un formato de nueva era que comprende las ediciones de Kemet, Dharma, Olimpia, Calavera y la edición recopilatoria Arsenal. Destaca por un gran control de cementerio, una agresividad considerable de ciertas razas, y la nula presencia de las razas Samurai y Oni, las cuales ya no estaban consideradas para futuras ediciones.",
  details:
    "En la línea de tiempo de nueva era, corresponden a las ediciones posteriores al formato Escuelas Elementales hasta la llegada de la edicion Kilimanjaro, donde aumentó considerablemente la escala de poder de las cartas.",
  ediciones: [
    { ed: "kemet", edImg: "kemet.png" },
    { ed: "dharma", edImg: "dharma.png" },
    { ed: "olimpia", edImg: "olimpia.png" },
    { ed: "calavera", edImg: "calavera.png" },
    { ed: "arsenal", edImg: "logo_arsenal.png" },
  ],
};

/*

const formato = {
  name: '',
  intro: '',
  details: '',
  ediciones: []
}

*/

export const useCards = () => {
  const [cardSelected, setCardSelected] = useState(initialCardSelected);
  const [visibleForm, setVisibleForm] = useState(false);

  const handlerCardSelectedForm = (card) => {
    console.log(card);
    setCardSelected({ ...card });
  };

  const [cards, dispatch] = useReducer(cardsReducer, initialCards);

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
    handlerCardSelectedForm,
    initialCards,
    initialCardSelected,
    visibleForm,
    cardSelected,
    handlerOpenForm,
    handlerCloseForm,
    homeText,
    escuelas,
    civilizaciones,
  };
};
