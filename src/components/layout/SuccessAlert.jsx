import { useEffect } from "react";

export const SuccessAlert = ({
  message,
  show,
  onClose,
  autoCloseMs = 2000,
}) => {
  useEffect(() => {
    if (!show) return;
    const timer = setTimeout(onClose, autoCloseMs);
    return () => clearTimeout(timer);
  }, [show, onClose, autoCloseMs]);

  if (!show) return null;

  return (
    <div
      className="modal fade show"
      style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
      tabIndex="-1"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        style={{ maxWidth: "320px" }}
      >
        <div className="modal-content bg-dark text-light border-success">
          <div className="modal-body text-center py-4">
            <i
              className="bi bi-check-circle-fill text-success mb-2"
              style={{ fontSize: "2.5rem" }}
            ></i>
            <p className="mb-0">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
