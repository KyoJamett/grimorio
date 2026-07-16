import { DeckSection } from "../deckbuilderPage/DeckSection";
import { BanSection } from "./BanSection";

export const BanlistPanel = ({
  mobileTab,
  banlist,
  banListName,
  handlerBanlistName,
  setShowPreview,
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
          value={banListName}
          onChange={(e) => handlerBanlistName(e.target.value)}
        />
        <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
          <ul className="list-group list-group-flush mt-2">
            {banlist.length > 0 && (
              <>
                <BanSection
                  banlist={banlist}
                  rule={"1"}
                  sectionName={"Baneada"}
                />
                <BanSection
                  banlist={banlist}
                  rule={"2"}
                  sectionName={"Única"}
                />
                <BanSection
                  banlist={banlist}
                  rule={"3"}
                  sectionName={"Sólo dos copias"}
                />
                <BanSection
                  banlist={banlist}
                  rule={"4"}
                  sectionName={"Errante"}
                />
                <BanSection banlist={banlist} rule={"5"} sectionName={"Oros"} />
                <BanSection
                  banlist={banlist}
                  rule={"6"}
                  sectionName={"Monumento"}
                />
              </>
            )}
          </ul>
        </div>
        <ul className="list-group mt-2">
          <li>
            <button
              disabled={banlist.length === 0}
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
