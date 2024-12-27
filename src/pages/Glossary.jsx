import { useEffect, useState } from "react";
import { useFetchEd } from "../hooks/useFetchEd";

export function Glossary() {
  const [data, setData] = useState(null);
  const { dataCards } = useFetchEd("glosario");
  const [activeIndexes, setActiveIndexes] = useState({});

  useEffect(() => {
    if (dataCards) {
      const convertedData = Array.isArray(dataCards)
        ? dataCards
        : Object.values(dataCards);
      setData(convertedData);
    }
  }, [dataCards]);

  const handlerAccordionToggle = (accordionIndex, subIndex) => {
    setActiveIndexes((prev) => ({
      ...prev,
      [accordionIndex]: prev[accordionIndex] === subIndex ? null : subIndex,
    }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight - 20,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container my-4">
      <div className="container my-5 justify-content-center">
        <div className="row">
          {!data ? (
            <div className="d-flex justify-content-center align-items-center custom-height">
              <div className="lds-dual-ring"></div>
            </div>
          ) : (
            <>
              <h1>Diccionario</h1>
              <div className="row margin-bottom-15">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container-fluid">
                    <span className="navbar-brand">Secciones</span>
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavDropdown"
                      aria-controls="navbarNavDropdown"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="navbarNavDropdown"
                    >
                      <ul className="navbar-nav">
                        {data.map((item, index) => {
                          const sectionId = `section-${index}`;
                          return (
                            <li className="nav-item" key={index}>
                              <button
                                className="nav-link btn btn-link"
                                onClick={() => scrollToSection(sectionId)}
                              >
                                {item.title}
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              {data.map((item, index) => {
                const sectionId = `section-${index}`;
                return (
                  <div className="row" key={index}>
                    <div id={sectionId} className="accordion" key={index}>
                      <h5>{item.title}</h5>
                      {item.content.map((subItem, subIndex) => {
                        const collapseId = `collapse-${index}-${subIndex}`;
                        const headingId = `heading-${index}-${subIndex}`;

                        return (
                          <div className="accordion-item" key={subIndex}>
                            <h2 className="accordion-header" id={headingId}>
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#${collapseId}`}
                                aria-expanded="false"
                                aria-controls={collapseId}
                              >
                                {subItem.title}
                              </button>
                            </h2>
                            <div
                              id={collapseId}
                              className="accordion-collapse collapse"
                              aria-labelledby={headingId}
                              data-bs-parent={`#section-${index}`}
                            >
                              <div className="accordion-body">
                                <strong>{subItem.definition}</strong>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      <br />
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
