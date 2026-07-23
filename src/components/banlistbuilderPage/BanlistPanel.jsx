import { useState } from "react";
import { DeckSection } from "../deckbuilderPage/DeckSection";
import { BanSection } from "./BanSection";
import { AddRuleModal } from "./AddRuleModal";

export const BanlistPanel = ({
  mobileTab,
  banlist,
  banListName,
  handlerBanlistName,
  setShowPreview,
  generalRules,
  setGeneralRules,
}) => {
  const [showRuleModal, setShowRuleModal] = useState(false);

  // handlers
  const handlerAddRule = (text) => {
    setGeneralRules((prev) => [...prev, { id: Date.now(), text }]);
  };

  const handlerRemoveRule = (id) => {
    setGeneralRules((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <>
      {showRuleModal && (
        <AddRuleModal
          onAdd={handlerAddRule}
          onClose={() => setShowRuleModal(false)}
        />
      )}
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
          {/* este padding regular los margenes de los detalles del mazo, ajustar aqui*/}
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nombre de la banlist..."
            value={banListName}
            onChange={(e) => handlerBanlistName(e.target.value)}
          />
          {/*<div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
            <ul className="list-group list-group-flush mt-2">
              <li className="list-group-item d-flex justify-content-between py-1 px-2 align-items-center bg-dark">
                <span className="small fw-semibold text-light">
                  Reglas Generales
                </span>
                <span className="badge bg-warning text-dark">
                  {generalRules.length}
                </span>
              </li>
              <li className="list-group-item bg-dark px-2 py-1">
                <button
                  className="btn btn-outline-warning btn-sm w-100"
                  onClick={() => setShowRuleModal(true)}
                >
                  + Agregar regla
                </button>
              </li>
              {generalRules.map((rule) => (
                <li
                  key={rule.id}
                  className="list-group-item bg-dark text-light d-flex justify-content-between align-items-start py-1 px-2 border-secondary"
                >
                  <span
                    className="small"
                    style={{ flex: 1, marginRight: "8px" }}
                  >
                    {rule.text}
                  </span>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    style={{ flexShrink: 0 }}
                    onClick={() => handlerRemoveRule(rule.id)}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          </div>*/}
          <div style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
            <ul className="list-group list-group-flush mt-2">
              <li className="list-group-item d-flex justify-content-between py-1 px-2 align-items-center bg-dark">
                <span className="small fw-semibold text-light">
                  Reglas Generales
                </span>
                <span className="badge bg-warning text-dark">
                  {generalRules.length}
                </span>
              </li>
              <li className="list-group-item bg-dark px-2 py-1">
                <button
                  className="btn btn-outline-warning btn-sm w-100"
                  onClick={() => setShowRuleModal(true)}
                >
                  + Agregar regla
                </button>
              </li>

              {generalRules.map((rule) => (
                <li
                  key={rule.id}
                  className="list-group-item bg-dark text-light d-flex justify-content-between align-items-start py-1 px-2 border-secondary"
                >
                  <span
                    className="small"
                    style={{ flex: 1, marginRight: "8px" }}
                  >
                    {rule.text}
                  </span>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    style={{ flexShrink: 0 }}
                    onClick={() => handlerRemoveRule(rule.id)}
                  >
                    ×
                  </button>
                </li>
              ))}
              {
                //separador de reglas y banlist
                (generalRules.length > 0 || banlist.length > 0) && (
                  <li className="list-group-item bg-dark border-0 mb-2 p-0" />
                )
              }
              {banlist.length > 0 && (
                <>
                  <BanSection
                    banlist={banlist}
                    rule={"1"}
                    sectionName={"Prohibida"}
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
                  <BanSection
                    banlist={banlist}
                    rule={"5"}
                    sectionName={"Errata"}
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
    </>
  );
};
