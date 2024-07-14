import { Navigate, Route, Routes } from "react-router-dom";
import { CardsPage } from "../pages/CardsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { Home } from "../pages/Home";

export const CardRoutes = () => {
  //const { initialCards, initialCardSelected } = useCards();
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route path="hipatia/cartas" element={<CardsPage />} />
        <Route path="hipatia" element={<Home />} />
        <Route path="/" element={<Navigate to="/hipatia" />} />
      </Routes>
    </>
  );
};
