import { Route, Routes } from "react-router-dom";
import { CardRoutes } from "./routes/CardRoutes";

export const MainApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<CardRoutes />} />
    </Routes>
  );
};
