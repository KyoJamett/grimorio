import { Route, Routes, Navigate } from "react-router-dom";
import { CardsPage } from "../pages/CardsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { Home } from "../pages/Home";
import { FormatPage } from "../pages/FormatPage";
import { DictionaryPage } from "../pages/DictionaryPage";
import { AboutPage } from "../pages/AboutPage";

export const CardRoutes = () => {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="/cartas/:ed" element={<CardsPage />} />
        <Route path="/grimorio" element={<Home />} />
        <Route path="/" element={<Navigate to="/grimorio" />} />
        <Route path="/bloque-furia" element={<FormatPage />} />
        <Route path="/escuelas-elementales" element={<FormatPage />} />
        <Route path="/civilizaciones" element={<FormatPage />} />
        <Route path="/expediciones" element={<FormatPage />} />
        <Route path="/primer-bloque" element={<FormatPage />} />
        <Route path="/primera-era" element={<FormatPage />} />
        <Route path="/diccionario" element={<DictionaryPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
};
