import { useState } from "react";

export const AddRuleModal = ({ onAdd, onClose, title, placeholder }) => {
  const [ruleText, setRuleText] = useState("");

  const handleAdd = () => {
    if (ruleText.trim() === "") return;
    onAdd(ruleText.trim());
    setRuleText("");
    onClose();
  };

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content bg-dark text-light">
          <div className="modal-header border-secondary">
            <h5 className="modal-title">{title}</h5>
            <button className="btn-close" onClick={onClose} />
          </div>
          <div className="modal-body">
            <textarea
              className="form-control bg-dark text-light border-secondary"
              rows={4}
              placeholder={placeholder}
              value={ruleText}
              onChange={(e) => setRuleText(e.target.value)}
              autoFocus
            />
          </div>
          <div className="modal-footer border-secondary">
            <button className="btn btn-secondary" onClick={onClose}>
              Cancelar
            </button>
            <button
              className="btn btn-warning"
              onClick={handleAdd}
              disabled={ruleText.trim() === ""}
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
