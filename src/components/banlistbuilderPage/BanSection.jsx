import { useBanlistContext } from "../../context/BanlistContext";
import { useCardContext } from "../../context/CardContext";
import { useDeckContext } from "../../context/DeckContext";

export const BanSection = ({ banlist, rule, sectionName }) => {
  const { handlerRemoveCard } = useBanlistContext();

  return (
    <>
      {banlist.some((c) => String(c.rule) === rule) && (
        <>
          <li className="list-group-item d-flex justify-content-between py-1 px-2 align-items-center bg-dark">
            <span className="small fw-semibold text-secondary">
              {sectionName}
            </span>
            <span className="badge bg-warning text-dark">
              {banlist
                .filter((c) => c.rule === rule)
                .reduce((total, c) => total + c.quantity, 0)}
            </span>
          </li>
          {banlist
            .filter((c) => c.rule === rule)
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((card) => {
              return (
                <li
                  className="list-group-item py-1 px-2 small fw-semibold d-flex justify-content-between bg-secondary"
                  key={card.id}
                >
                  <div className="d-flex justify-content-between align-items-center">
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
                  </div>
                </li>
              );
            })}
          <hr className="border-secondary my-1" />
        </>
      )}
    </>
  );
};
