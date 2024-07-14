import { Navigate, Route, Routes } from "react-router-dom";
import { CardsPage } from "../pages/CardsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { useCards } from "../hooks/useCards";
import { Card } from "../pages/Card";
import { Home } from "../pages/Home";

export const CardRoutes = () => {
  //const { initialCards, initialCardSelected } = useCards();
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="sabiduria-infinita" element={<CardsPage />} />
        <Route path="home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  );
};
