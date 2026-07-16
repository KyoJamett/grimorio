import { Route, Routes, Navigate, Form } from "react-router-dom";
import { CardsPage } from "../pages/CardsPage";
import { Navigationbar } from "../components/layout/Navigationbar";
import { Home } from "../pages/Home";
import { FormatPage } from "../pages/FormatPage";
import { DictionaryPage } from "../pages/DictionaryPage";
import { AboutPage } from "../pages/AboutPage";
import { DeckbuilderPage } from "../pages/DeckbuilderPage";
import { useFormats } from "../hooks/useResource";
import { MainLoading } from "../components/layout/MainLoading";
import { DeckProvider } from "../context/DeckContext";
import { useFormatsContext } from "../context/FormatsContext";
import { BanlistbuilderPage } from "../pages/BanlistBuilderPage";
import { BanlistProvider } from "../context/BanlistContext";

export const CardRoutes = () => {
  const { loadingFormats } = useFormatsContext();
  return (
    <>
      {loadingFormats ? (
        <MainLoading />
      ) : (
        <>
          <Navigationbar />
          <Routes>
            <Route path="/cartas/:ed" element={<CardsPage />} />
            <Route path="/grimorio" element={<Home />} />
            <Route path="/" element={<Navigate to="/grimorio" />} />
            <Route path="/bloque-furia" element={<FormatPage />} />
            <Route path="/feudal" element={<FormatPage />} />
            <Route path="/escuelas-elementales" element={<FormatPage />} />
            <Route path="/civilizaciones" element={<FormatPage />} />
            <Route path="/expediciones" element={<FormatPage />} />
            <Route path="/primer-bloque" element={<FormatPage />} />
            <Route path="/primera-era" element={<FormatPage />} />
            <Route path="/diccionario" element={<DictionaryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/deckbuilder"
              element={
                <DeckProvider>
                  <DeckbuilderPage />
                </DeckProvider>
              }
            />
            <Route
              path="/banbuilder"
              element={
                <BanlistProvider>
                  <BanlistbuilderPage />
                </BanlistProvider>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
};
