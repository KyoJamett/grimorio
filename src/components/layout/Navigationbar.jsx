import { NavLink } from "react-router-dom";

export const Navigationbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sabiduria Infinita
          </a>

          {/*-------------Collapsibe Button---------------- */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCards"
            aria-controls="navbarCards"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*-------------NavBar Links---------------- */}
          <div className="collapse navbar-collapse" id="navbarCards">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/hipatia/cartas">
                  Hijos del Sol
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Proximamente
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
