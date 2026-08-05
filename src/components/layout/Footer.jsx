import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark py-2 font-footer">
      <div className="w-100 px-3">
        <NavLink
          className="small link-light link-offset-2 link-underline link-underline-opacity-0"
          to={`/disclaimer`}
        >
          🛈 Descargo de responsabilidad
        </NavLink>
        <div></div>
      </div>
    </footer>
  );
};
