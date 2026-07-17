import { useDeckContext } from "../../context/DeckContext";
import {
  exportDeckToImage,
  exportDeckToPDF,
} from "../../helpers/exportDeckToPDF";
import { DeckPreview } from "./DeckPreview";

export const DeckModal = ({ title, children, showPreview, setShowPreview }) => {
  //const { deck, deckName } = useDeckContext();
  return (
    <>
      {showPreview && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.7)" }}
          tabIndex="-1"
        >
          <div className="modal-dialog modal-xl modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{title}</h5>
                <button
                  className="btn-close"
                  onClick={() => setShowPreview(false)}
                />
              </div>
              <div className="modal-body" style={{ overflow: "auto" }}>
                {children}
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowPreview(false)}
                >
                  Cerrar
                </button>
                <button className="btn btn-warning" onClick={exportDeckToImage}>
                  Exportar imagen
                </button>
                {/*<button className="btn btn-danger" onClick={exportDeckToPDF}>
                  Exportar PDF
                </button>*/}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
