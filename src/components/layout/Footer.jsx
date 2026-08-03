import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark py-2 font-footer">
      <div className="container px-4 px-lg-5">
        <NavLink className="small text-center" to={`/disclaimer`}>
          🛈 Descargo de responsabilidad
        </NavLink>
        <div></div>
      </div>
    </footer>
  );
};
