import { useCardContext } from "../../context/CardContext";
import { CardForm } from "../CardForm";

export const CardModalForm = ({ title, children }) => {
  const handleClickOutside = (event) => {
    // Verifica si el clic ocurrió fuera del modal
    if (event.target.classList.contains("modal")) {
      handlerCloseForm();
    }
  };

  const { cardSelected, handlerCloseForm } = useCardContext();

  return (
    <>
      <div className="abrir-modal animacion fadeIn modal-custom">
        <div
          className="modal"
          style={{ display: "block" }}
          tabIndex="-1"
          onClick={handleClickOutside}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
              </div>
              <div className="modal-body">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
