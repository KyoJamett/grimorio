import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

export const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark py-2 font-footer">
      <div className="w-100 px-3 d-flex justify-content-between align-items-center">
        <NavLink
          className="small link-light link-offset-2 link-underline link-underline-opacity-0"
          to="/disclaimer"
        >
          <i className="bi bi-info-circle me-1"></i>
          Descargo de responsabilidad
        </NavLink>

        <a
          href="https://www.flow.cl/btn.php?token=qe0ec8ead6a486dda66b73fcd6b769d37f138dac"
          target="_blank"
          rel="noopener noreferrer"
          className="small link-light link-offset-2 link-underline link-underline-opacity-0"
        >
          ☕ Donar
        </a>
      </div>
    </footer>
  );
};
