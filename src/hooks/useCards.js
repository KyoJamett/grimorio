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

const intro = {
  text: "Bienvenido, aquí podrás encontrar información sobre los formatos de mitos y leyendas, las ediciones que los componen y buscar información sobre las cartas. Accede a los formatos mediante la barra de navegación. Página en desarrollo.",
};

const escuelas = {
  name: "Escuelas Elementales",
  intro:
    "Escuelas Elementales es un formato de nueva era, compuesto inicialmente por las ediciones Dominio, Contraataque, Águila Imperial, Steampunk, Axis Mundi, Hijos del Sol y Legado Gótico.",
  details:
    "El formato al ser actualmente sólo de comunidad, ha sido sometido a cambios, siendo el más aceptado por las comunidades la inclusión de las ediciones Bushido y Sol Naciente, a fin de dar algo de soporte extra a ciertas razas débiles. Adicionalmente se creó una edición recopilatoria también llamada Escuelas Elementales.",

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
  folder: "ee",
};

const civilizaciones = {
  name: "Civilizaciones",
  intro:
    "Civilizaciones es un formato de nueva era que comprende las ediciones de Kemet, Dharma, Olimpia, Calavera y la edición recopilatoria Arsenal.",
  details:
    "En la línea de tiempo de nueva era, corresponden a las ediciones posteriores al formato Escuelas Elementales hasta la llegada de la edicion Kilimanjaro, donde aumentó considerablemente la escala de poder de las cartas. Adicionalmente aquí se utilizan las cartas SP (llamadas set paralelo por la comunidad) que salieron en diversos productos durante el formato imperio de la época de estas ediciones. Dichas cartas se pueden hallar dentro de las ediciones del formato.",
  ediciones: [
    { ed: "kemet", edImg: "kemet.png" },
    { ed: "dharma", edImg: "dharma.png" },
    { ed: "olimpia", edImg: "olimpia.png" },
    { ed: "calavera", edImg: "calavera.png" },
    { ed: "arsenal", edImg: "logo_arsenal.png" },
  ],
  folder: "civi",
};

const expediciones = {
  name: "Expediciones",
  intro:
    "Expediciones abarca las ediciones desde Kilimanjaro hasta Conjuros y en la linea de tiempo de nueva era, corresponde a las ediciones posteriores al formato Civilizaciones.",
  details:
    "El formato posee un ritmo de juego, escala de poder y cantidad de habilidades por turno notoriamente más elevadas que en formatos previos.",

  ediciones: [
    { ed: "kilimanjaro", edImg: "kilimanjaro.png" },
    { ed: "arsenal", edImg: "logo_arsenal.png" },
    { ed: "invasion-oscura", edImg: "invasion_oscura.png" },
    { ed: "dinastia-del-dragon", edImg: "dinastialogo.png" },
    { ed: "keltoi", edImg: "keltoi.png" },
    { ed: "terrores-nocturnos", edImg: "terrores_nocturnos.png" },
    { ed: "tierra-austral", edImg: "tierra-austral.png" },
    { ed: "conjuros", edImg: "conjuros.png" },
  ],
  folder: "expe",
};

const furia = {
  name: "Bloque Furia",
  intro:
    "Bloque furia abarca las primeras 3 ediciones de nueva era con sus respectivas extensiones.",
  details:
    "El formato posee un ritmo de batalla bastante ameno, con turnos relativamente tranquilos y una base de anulaciones acotada. Recomendado para jugadores novatos.",
  ediciones: [
    { ed: "furia", edImg: "furia.png" },
    { ed: "furiaext", edImg: "furiaext.png" },
    { ed: "sumeria", edImg: "sumeria.png" },
    { ed: "rebelion", edImg: "rebelion.png" },
    { ed: "asgard", edImg: "asgard.png" },
    { ed: "midgard", edImg: "midgard.png" },
  ],
  folder: "furia",
};

const pb = {
  name: "Primer Bloque",
  intro:
    "Primer bloque es un formato perteneciente a la segunda Era de la época Salo y abarca las primeras cuatro ediciones de dicha era, junto a sus respectivas extensiones.",
  details:
    "El formato clásico se juega en base al DAR de Abril del 2005, donde se aclararon varias dudas respecto a ciertas cartas con dudosa redacción. Aún así, hay varios consensos de comunidad por lo que se recomienda consultar a jugadores experimentados de ser necesario.",
  ediciones: [
    { ed: "espada-sagrada", edImg: "espada_sagrada.png" },
    { ed: "cruzadas", edImg: "cruzadas.png" },
    { ed: "helenica", edImg: "helenica.png" },
    { ed: "imperio", edImg: "imperio.png" },
    { ed: "hijos_de_daana", edImg: "hijos_de_daana.png" },
    { ed: "tierras_altas", edImg: "tierras_altas.png" },
    { ed: "dominios-de-ra", edImg: "dominios_de_ra.png" },
    { ed: "encrucijada", edImg: "encrucijada.png" },
  ],
  folder: "pb",
};

/*

const formato = {
  name: '',
  intro: '',
  details: '',
  ediciones: []
}

*/

// Definición de documentos agrupados en categorías
const documentos = [
  {
    categoria: "ee",
    documentos: [
      { name: "Banlist El Reino de los Duelos", file: "ee_formato_reino.pdf" },
    ],
  },
  {
    categoria: "civi",
    documentos: [
      { name: "Banlist Julio 2024", file: "civi_banlist_2024.pdf" },
      {
        name: "Banlist Enero 2022",
        file: "civi_banlist_enero_2022.pdf",
      },
    ],
  },
  {
    categoria: "expe",
    documentos: [
      { name: "Banlist Julio 2023", file: "expe_banlist_julio_2023.pdf" },
    ],
  },
  {
    categoria: "pb",
    documentos: [{ name: "Dar Abril 2005", file: "dar_abril_2005.pdf" }],
  },
  // Añadir más categorías según sea necesario
];

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
    documentos,
    homeText,
    intro,
    furia,
    escuelas,
    civilizaciones,
    expediciones,
    pb,
  };
};
