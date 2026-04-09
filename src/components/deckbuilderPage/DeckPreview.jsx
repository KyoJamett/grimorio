// components/deckbuilder/DeckPreview.jsx
import { getCardImageUrl } from "../../helpers/cardImageUrl";

const TIPOS = {
  1: "Aliados",
  2: "Talismanes",
  3: "Armas",
  4: "Tótems",
  5: "Oros",
  6: "Monumento",
};

const styles = {
  container: {
    width: "794px", // A4 a 96dpi
    minHeight: "1123px",
    backgroundColor: "#1a0a00",
    color: "#f5c842",
    fontFamily: "serif",
    padding: "40px",
    boxSizing: "border-box",
  },
  header: {
    borderBottom: "2px solid #f5c842",
  },
  deckName: {
    fontSize: "28px",
    fontWeight: "bold",
    margin: 0,
  },
  formatName: {
    fontSize: "20px",
    opacity: 0.7,
    marginTop: "0px",
    marginBottom: "0px",
  },
  section: {
    marginBottom: "15px",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
    borderBottom: "1px solid #f5c842",
    paddingBottom: "4px",
    marginBottom: "12px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  cardRow: {
    //display: "flex",
    //alignItems: "center",
    //gap: "12px",
    marginBottom: "8px",
  },
  cardImg: {
    width: "100px",
    height: "auto",
    objectFit: "contain",
    borderRadius: "4px",
  },
  cardName: {
    flex: 1,
    fontSize: "14px",
  },
  cardQty: {
    fontSize: "14px",
    fontWeight: "bold",
    minWidth: "32px",
    textAlign: "right",
  },
  footer: {
    borderTop: "2px solid #f5c842",
    marginTop: "24px",
    paddingTop: "12px",
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
  },
  cardStack: {
    position: "relative",
    width: "100px",
    height: "143px", // proporción correcta aprox
  },
  cardStackImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100px",
    height: "143px",
    objectFit: "contain",
    borderRadius: "4px",
  },
};

export const DeckPreview = ({ cards, deckName, formatoName }) => {
  //console.log("cards: ", cards);
  //console.log("deckName: ", deckName);
  //console.log("formatoName: ", formatoName);
  const totalCards = cards.reduce((sum, c) => sum + c.quantity, 0);

  const avgCost = () => {
    const cardsWithCost = cards.filter((c) => c.cost && c.cost !== "");
    console.log(cards);
    console.log(cardsWithCost);
    if (cardsWithCost.length === 0) return "—";
    const total = cardsWithCost.reduce(
      (sum, c) => sum + Number(c.cost) * c.quantity,
      0,
    );
    const qty = cardsWithCost.reduce((sum, c) => sum + c.quantity, 0);
    return (total / qty).toFixed(1);
  };

  return (
    <div id="deck-export" style={styles.container}>
      <div style={styles.header}>
        <p style={styles.deckName}>{deckName || "Mi Mazo"}</p>
        <p style={styles.formatName}>{formatoName}</p>
      </div>

      {Object.entries(TIPOS).map(([typeId, typeName]) => {
        const cardsOfType = cards.filter((c) => String(c.type) === typeId);
        if (cardsOfType.length === 0) return null;

        return (
          <div key={typeId} style={styles.section}>
            <p style={styles.sectionTitle}>
              {typeName} ({cardsOfType.reduce((s, c) => s + c.quantity, 0)})
            </p>
            <div className="row">
              {cardsOfType.map((card) => (
                <div key={card.id} style={styles.cardRow} className="col-auto">
                  <div className="col">
                    <div
                      style={{
                        ...styles.cardStack,
                        width: `${100 + (card.quantity - 1) * 15}px `,
                      }}
                    >
                      {Array.from({ length: card.quantity }).map((_, i) => (
                        <img
                          key={i}
                          src={getCardImageUrl(card.ed_edid, card.edid)}
                          style={{
                            ...styles.cardStackImg,
                            transform: `translate(${i * 15}px)`,
                            zIndex: i,
                          }}
                          crossOrigin="anonymous"
                          alt={card.name}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      <div style={styles.footer}>
        <span>Total: {totalCards} cartas</span>
        <span>Costo promedio: {avgCost()}</span>
      </div>
    </div>
  );
};
