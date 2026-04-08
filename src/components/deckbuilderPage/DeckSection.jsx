export const DeckSection = ({
  deck = [],
  type,
  sectionName,
  handlerAddCard,
  handlerRemoveCard,
}) => {
  return (
    <>
      {deck.some((c) => String(c.type) === type) && (
        <>
          <li className="list-group-item d-flex justify-content-between py-1 px-2 align-items-center bg-dark">
            <span className="small fw-semibold text-secondary">
              {sectionName}
            </span>{" "}
            <span className="badge bg-warning text-dark">
              {deck
                .filter((c) => c.type === type)
                .reduce((total, c) => total + c.quantity, 0)}
            </span>
          </li>
          {deck
            .filter((c) => c.type === type)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((card) => {
              return (
                <li
                  className="list-group-item py-1 px-2 small fw-semibold d-flex justify-content-between bg-secondary"
                  key={card.id}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    {" "}
                    {card.name.toUpperCase()}
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handlerRemoveCard(card)}
                      >
                        -
                      </button>
                    </div>
                    <div className="px-1">{"x" + card.quantity}</div>
                    <div>
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handlerAddCard(card)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          <li className="border-bottom"></li>
        </>
      )}
    </>
  );
};
