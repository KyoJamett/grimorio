import { CardForm } from "./CardForm";

export const CardModalForm = ({
  cardSelected,
  handlerCloseForm,
  races,
  rarities,
  types,
  keywords,
  edition,
}) => {
  const handleClickOutside = (event) => {
    // Verifica si el clic ocurrió fuera del modal
    if (event.target.classList.contains("modal")) {
      handlerCloseForm();
    }
  };

  return (
    <>
      <div className="abrir-modal animacion fadeIn">
        <div
          className="modal"
          style={{ display: "block" }}
          tabIndex="-1"
          onClick={handleClickOutside}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Ficha de carta</h5>
              </div>
              <div className="modal-body">
                <CardForm
                  cardSelected={cardSelected}
                  handlerCloseForm={handlerCloseForm}
                  races={races}
                  rarities={rarities}
                  types={types}
                  keywordsArray={keywords}
                  edition={edition}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
