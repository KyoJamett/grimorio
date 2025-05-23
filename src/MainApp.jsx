import { Route, Routes } from "react-router-dom";
import { CardRoutes } from "./routes/CardRoutes";

export const MainApp = () => {
  return (
    <div className="app-background pb-4">
      <Routes>
        <Route path="/*" element={<CardRoutes />} />
      </Routes>
    </div>
  );
};
