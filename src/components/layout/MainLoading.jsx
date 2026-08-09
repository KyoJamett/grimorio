import { Loading } from "../Loading";

export const MainLoading = () => {
  return (
    <>
      <div
        style={{
          height: "100dvh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
        }}
      >
        <img
          src="web-app-manifest-512x512.png"
          alt="Biblioteca"
          style={{ width: "80px", opacity: 0.8 }}
        />
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
        <p className="text-dark">Cargando Biblioteca...</p>
      </div>
    </>
  );
};
