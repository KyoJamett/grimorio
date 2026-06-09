import { Route, Routes, useLocation } from "react-router-dom";
import { CardRoutes } from "./routes/CardRoutes";
import { Footer } from "./components/layout/Footer";

export const MainApp = () => {
  const location = useLocation();
  const isDeckBuilder = location.hash
    ? location.hash.includes("deckbuilder")
    : location.pathname.includes("deckbuilder");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: 0,
      }}
    >
      <div className="app-background">
        <Routes>
          <Route path="/*" element={<CardRoutes />} />
        </Routes>
      </div>
      {!isDeckBuilder && <Footer />}
    </div>
  );
};
