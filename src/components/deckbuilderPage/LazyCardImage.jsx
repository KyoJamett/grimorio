import React, { useEffect, useRef, useState } from "react";

export const LazyCardImage = React.memo(({ src, alt, onClick }) => {
  //¿qué es esto?
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);

  //no entiendo, pasarlo a la ia y que lo explique
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        //esto carga la imagen 100px antes de entrar al viewport
        rootMargin: "400px",
        threshold: 0.01,
      },
    );

    setInView(false); //por qué??
    observer.observe(el);
    return () => observer.disconnect();
  }, [src]); //por qué [src] y no [] como era en un principio?

  return (
    <div ref={imgRef} style={{ aspectRatio: "3/4", background: "#1a1a2e" }}>
      {inView && (
        <img
          src={src}
          alt={alt}
          onClick={onClick}
          onLoad={() => setLoaded(true)}
          className="card-img-top"
          style={{
            cursor: "pointer",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.2s ease",
          }}
        />
      )}
    </div>
  );
});
