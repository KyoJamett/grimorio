import { exportDeckToImage } from "../../helpers/exportDeckToPDF";

export const DeckModal = ({
  title,
  children,
  showPreview,
  setShowPreview,
  exportName,
  footerActions,
}) => {
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
                  className="btn btn-danger"
                  onClick={() => setShowPreview(false)}
                >
                  Cerrar
                </button>
                <button
                  className="btn btn-warning"
                  onClick={() => exportDeckToImage(exportName)}
                >
                  Exportar imagen
                </button>
                {footerActions}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
