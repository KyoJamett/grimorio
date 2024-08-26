import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CardsPage } from "../pages/CardsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { Home } from "../pages/Home";
import { FormatPage } from "../pages/FormatPage";

export const CardRoutes = () => {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="grimorio/cartas/:ed" element={<CardsPage />} />
        <Route path="grimorio" element={<Home />} />
        <Route path="/" element={<Navigate to="/grimorio" />} />
        <Route path="grimorio/escuelas-elementales" element={<FormatPage />} />
        <Route path="grimorio/civilizaciones" element={<FormatPage />} />
        <Route path="grimorio/expediciones" element={<FormatPage />} />
        <Route path="grimorio/primer-bloque" element={<FormatPage />} />
      </Routes>
    </>
  );
};
