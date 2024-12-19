import { useEffect, useState } from "react";
import { useFetchEd } from "../hooks/useFetchEd";

export function Glossary() {
  const [data, setData] = useState(null);
  const { dataCards } = useFetchEd("glosario");
  const [activeIndexes, setActiveIndexes] = useState({});

  useEffect(() => {
    if (dataCards) {
      // Si es un objeto, conviértelo en un array, de lo contrario, mantenlo como está
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

  console.log(data);
  return (
    <>
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
                {data.map((item, index) => {
                  const accordionId = `accordion-${index}`;
                  return (
                    <>
                      <div className="accordion" id={accordionId} key={index}>
                        <h5>{item.title}</h5>
                        {item.content.map((subItem, subIndex) => {
                          const collapseId = `collapse-${index}-${subIndex}`;
                          const headingId = `heading-${index}-${subIndex}`;
                          return (
                            <>
                              <div className="accordion-item" key={subIndex}>
                                <h2 className="accordion-header" id={headingId}>
                                  <button
                                    className={`accordion-button ${
                                      activeIndexes === subIndex
                                        ? ""
                                        : "collapsed"
                                    }`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#${collapseId}`}
                                    aria-expanded={
                                      activeIndexes === subIndex
                                        ? "true"
                                        : "false"
                                    }
                                    aria-controls={collapseId}
                                    onClick={() =>
                                      handlerAccordionToggle(subIndex)
                                    }
                                  >
                                    {subItem.title}
                                  </button>
                                </h2>
                                <div
                                  id={collapseId}
                                  className={`accordion-collapse collapse`}
                                  aria-labelledby={headingId}
                                  data-bs-parent={`#${accordionId}`}
                                >
                                  <div className="accordion-body">
                                    <strong>{subItem.definition}</strong>
                                  </div>
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
