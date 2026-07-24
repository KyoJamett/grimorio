export const BottomNavigation = ({
  mobileTab,
  setMobileTab,
  filteredCards,
  deck = [],
  text,
}) => {
  return (
    <div
      className="d-flex d-md-none fixed-bottom border-top"
      style={{ height: "56px", backgroundColor: "#1a1a1a", zIndex: 1000 }}
    >
      {/* qué hace d-md-none? y fixed-bottom? border-top sólo agrega un borde en la parte superior de los botones */}
      <button
        className={`btn flex-fill py-3 rounded-0 ${mobileTab === "pool" ? "btn-warning" : "btn-dark"}`}
        onClick={() => setMobileTab("pool")}
      >
        {/* rounded-0 hace que el boton no sea redondeado. ¿qué hace flex-fill? */}
        Cartas
        {mobileTab !== "pool" && (
          <span className="badge bg-warning text-dark ms-2">
            {filteredCards.length}
          </span>
        )}
      </button>
      {/* qué es flex-fill?  */}
      <div style={{ width: "1px", backgroundColor: "#444" }} />
      <button
        className={`btn flex-fill py-3 rounded-0 ${mobileTab === "deck" ? "btn-warning" : "btn-dark"}`}
        onClick={() => setMobileTab("deck")}
      >
        {text}
        <span className="badge bg-warning text-dark ms-2">
          {deck.reduce((sum, c) => sum + c.quantity, 0)}
        </span>
      </button>
    </div>
  );
};
