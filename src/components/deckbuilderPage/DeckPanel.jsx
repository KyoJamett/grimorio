import { DeckSection } from "./DeckSection";

export const DeckPanel = ({
  mobileTab,
  deck,
  deckName,
  handlerDeckName,
  setShowPreview,
  avgCost,
}) => {
  return (
    <div
      className={`col-12 col-md-4 border pb-2 ${mobileTab === "pool" ? "d-none d-md-block" : ""}`}
      style={{ overflow: "hidden" }}
    >
      <div
        className="p-2"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        {" "}
        {/* este padding regular los margenes de los detalles del mazo, ajustar aqui*/}
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Nombre del mazo..."
          value={deckName}
          onChange={(e) => handlerDeckName(e.target.value)}
        />
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          <ul className="list-group list-group-flush mt-2">
            {deck.length > 0 && (
              <>
                <DeckSection type={"1"} sectionName={"Aliados"} />
                <DeckSection type={"2"} sectionName={"Talismanes"} />
                <DeckSection type={"3"} sectionName={"Armas"} />
                <DeckSection type={"4"} sectionName={"Totems"} />
                <DeckSection type={"5"} sectionName={"Oros"} />
                <DeckSection type={"6"} sectionName={"Monumento"} />
              </>
            )}
          </ul>
        </div>
        <ul className="list-group mt-2">
          <li className="list-group-item d-flex justify-content-between fw-bold">
            <span>Total</span>{" "}
            <span>{deck.reduce((total, c) => total + c.quantity, 0)}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between fw-bold">
            <span>Costo promedio</span> <span>{avgCost()}</span>
          </li>
          <li>
            <button
              disabled={deck.length === 0}
              className="btn btn-warning w-100"
              onClick={() => setShowPreview(true)}
            >
              Ver vista previa
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
