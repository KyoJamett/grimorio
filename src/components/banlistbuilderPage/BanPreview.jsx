// components/deckbuilder/DeckPreview.jsx
import { getCardImageUrl } from "../../helpers/cardImageUrl";

const TIPOS = {
  1: "Prohibida",
  2: "Única",
  3: "Sólo dos copias",
  4: "Errante",
  5: "Errata",
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
  banlistName: {
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
    width: "80px",
    height: "114px", // proporción correcta aprox
  },
  cardStackImg: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "80px",
    height: "114px",
    objectFit: "contain",
    borderRadius: "4px",
  },
};

export const BanPreview = ({
  banlist,
  banlistName,
  formatoName,
  generalRules = [],
}) => {
  //console.log("cards: ", cards);
  //console.log("banlistName: ", banlistName);
  //console.log("formatoName: ", formatoName);

  return (
    <div id="deck-export" style={styles.container}>
      <div style={styles.header}>
        <p style={styles.banlistName}>{banlistName || "Banlist"}</p>
        <p style={styles.formatName}>{formatoName}</p>
      </div>

      {generalRules.length > 0 && (
        <div style={{ ...styles.section, marginTop: "16px" }}>
          <p style={styles.sectionTitle}>Reglas Generales</p>
          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {generalRules.map((rule) => (
              <li
                key={rule.id}
                style={{
                  fontSize: "13px",
                  marginBottom: "6px",
                  lineHeight: "1.5",
                }}
              >
                {rule.text}
              </li>
            ))}
          </ul>
        </div>
      )}

      {Object.entries(TIPOS).map(([ruleId, ruleName]) => {
        const banOfType = banlist.filter((c) => String(c.rule) === ruleId);
        if (banOfType.length === 0) return null;

        return (
          <div key={ruleId} style={styles.section}>
            <p style={styles.sectionTitle}>
              {ruleName} ({banOfType.reduce((s, c) => s + c.quantity, 0)})
            </p>
            <div className="row g-2">
              {banOfType.map((card) => (
                <div key={card.id} style={styles.cardRow} className="col-auto">
                  <div className="col">
                    <div
                      style={{
                        ...styles.cardStack,
                      }}
                    >
                      {Array.from({ length: card.quantity }).map((_, i) => (
                        <img
                          key={i}
                          src={getCardImageUrl(card.ed_edid, card.edid)}
                          style={styles.cardStackImg}
                          crossOrigin="anonymous"
                          alt={card.name}
                        />
                      ))}
                    </div>
                    {ruleId === "5" && card.obs && (
                      <p
                        style={{
                          textAlign: "center",
                          fontSize: "13px",
                          marginTop: "4px",
                          width: "80px",
                          lineHeight: "1.2",
                          color: "#f5c842",
                          wordBreak: "break-word",
                        }}
                      >
                        {card.obs}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
