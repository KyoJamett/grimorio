import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navigationbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Oculta las opciones del menú al hacer clic en un navlink de las ediciones
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-dark">
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
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/furia" // Cambiado a una ruta relativa
                  state={{ formatParam: "furia" }}
                  onClick={handleNavLinkClick}
                >
                  Furia
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/escuelas-elementales" // Cambiado a una ruta relativa
                  state={{ formatParam: "escuelas" }}
                  onClick={handleNavLinkClick}
                >
                  Escuelas Elementales
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/civilizaciones" // Cambiado a una ruta relativa
                  state={{ formatParam: "civilizaciones" }}
                  onClick={handleNavLinkClick}
                >
                  Civilizaciones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/expediciones" // Cambiado a una ruta relativa
                  state={{ formatParam: "expediciones" }}
                  onClick={handleNavLinkClick}
                >
                  Expediciones
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/primer-bloque" // Cambiado a una ruta relativa
                  state={{ formatParam: "pb" }}
                  onClick={handleNavLinkClick}
                >
                  Primer Bloque
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/primera-era" // Cambiado a una ruta relativa
                  state={{ formatParam: "pe" }}
                  onClick={handleNavLinkClick}
                >
                  Primera Era
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/glosario" // Cambiado a una ruta relativa
                  onClick={handleNavLinkClick}
                >
                  Diccionario
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
