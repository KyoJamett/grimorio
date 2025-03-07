import { NavLink } from "react-router-dom"

export const EditionGrid = ({ediciones}) => {

    return (
        <div className="container my-4">
            <div className="grid-container">
                {ediciones.map((element) => (
                <div className="grid-item" key={element.ed}>
                    <span className="border border-secondary rounded p-3 mb-3 d-flex flex-column align-items-center black">
                    <img
                        src={`${element.edImg}`}
                        alt={element.ed}
                        className="img-fluid"
                        style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                        }}
                    />
                    <NavLink
                        className="btn btn-warning mt-2 d-flex justify-content-center"
                        to={`/cartas/${element.ed}`}
                        state={{ ed: element.ed }}
                    >
                        Ver
                    </NavLink>
                    </span>
                </div>
                ))}
            </div>
        </div>
    )
}