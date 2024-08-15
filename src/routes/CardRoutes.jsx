import { Navigate, Route, Routes } from "react-router-dom";
import { CardsPage } from "../pages/CardsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { Home } from "../pages/Home";
import { FormatPage } from "../pages/FormatPage";

export const CardRoutes = () => {
  //const { initialCards, initialCardSelected } = useCards();
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="grimorio/cartas" element={<CardsPage />} />
        <Route path="grimorio" element={<Home />} />
        <Route path="/" element={<Navigate to="/grimorio" />} />
        <Route path="grimorio/escuelas-elementales" element={<FormatPage />} />
      </Routes>
    </>
  );
};
