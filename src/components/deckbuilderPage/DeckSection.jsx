export const DeckSection = ({ deck = [], type, sectionName }) => {
  return (
    <>
      {deck.some((c) => String(c.type) === type) && (
        <>
          <li className="list-group-item d-flex justify-content-between">
            <span className="small fw-semibold">{sectionName}</span>{" "}
            <span className="badge bg-warning text-dark">
              {deck
                .filter((c) => c.type === type)
                .reduce((total, c) => total + c.quantity, 0)}
            </span>
          </li>
          {deck
            .filter((c) => c.type === type)
            .map((card) => {
              return (
                <li
                  className="list-group-item py-1 small text-muted fw-semibold"
                  key={card.id}
                >
                  {card.name + " x" + card.quantity}
                </li>
              );
            })}
          <hr></hr>
        </>
      )}
    </>
  );
};
