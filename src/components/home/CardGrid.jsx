export const CardGrid = ({ cards, handleImageClick }) => {
  return (
    <div className="container my-4">
      {Array.isArray(cards) && cards.length > 0 ? (
        <>
          <h4>Resultados de búsqueda</h4>
          <div className="grid-container">
            {cards.map((card, index) => (
              <div className="grid-item" key={`${card.edition}-${card.edid}`}>
                <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center black">
                  <h6 className="card-title results-title text-warning margin-bottom">
                    {card.name}
                  </h6>
                  <img
                    src={`https://api.myl.cl/static/cards/${card.edition}/${card.edid}.png`}
                    alt={card.edid}
                    className="img-fluid"
                    style={{
                      width: "250px",
                      height: "250px",
                      objectFit: "contain",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(card)}
                  />
                </span>
              </div>
            ))}
          </div>
        </>
      ) : Array.isArray(cards) && cards.length == 0 ? (
        ""
      ) : (
        // Si cards no es un array o está vacío
        <p>No se encontraron resultados.</p>
      )}
    </div>
  );
};
