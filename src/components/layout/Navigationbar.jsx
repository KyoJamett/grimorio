import { useState } from "react";
import { NavLink } from "react-router-dom";
import { UseFormats } from "../../hooks/useFormats";

export const Navigationbar = () => {
  const { formatos } = UseFormats();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Oculta las opciones del menú al hacer clic en un navlink de las ediciones
  };

  return (
    <div className="pb-6">
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark main-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/grimorio/">
            Grimorio
          </a>

          {/*-------------Collapsibe Button---------------- */}
          {/*<button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCards"
            aria-controls="navbarCards"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >*/}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)} // Alterna el estado
            aria-controls="navbarCards"
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/*-------------NavBar Links---------------- */}
          <div
            className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
            id="navbarCards"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {Object.entries(formatos).map(([key, formato]) => (
                <li key={key} className="nav-item">
                  <NavLink
                    className="nav-link"
                    to={`/${formato.slug}`}
                    state={{ formatParam: key }}
                    onClick={handleNavLinkClick}
                  >
                    {formato.name}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/diccionario"
                  onClick={handleNavLinkClick}
                >
                  Diccionario
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/about"
                  onClick={handleNavLinkClick}
                >
                  Acerca de
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
    </div>
  );
};
