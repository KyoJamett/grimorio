

export const CardSearchModal = ({handleCloseModal, selectedImage}) => {

    return (
        <>
        {
            selectedImage && (
            <div
                className="modal show d-block abrir-modal animacion fadeIn"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
                onClick={handleCloseModal}
            >
                <div className="modal-dialog modal-lg modal-dialog-centered">
                <div
                    className="modal-content"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="modal-header">
                    <h5 className="modal-title">{selectedImage.name}</h5>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={handleCloseModal}
                    />
                    </div>
                    <div className="modal-body text-center">
                    <img
                        src={`https://api.myl.cl/static/cards/${selectedImage.edition}/${selectedImage.edid}.png`}
                        alt={selectedImage.edid}
                        className="img-fluid"
                        style={{
                        maxHeight: "80vh",
                        width: "auto",
                        }}
                    />
                    </div>
                </div>
                </div>
            </div>
            )
        }
        </>
    );
}