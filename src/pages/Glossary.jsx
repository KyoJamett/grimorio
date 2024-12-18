import { useEffect, useState } from "react";
import { useFetchEd } from "../hooks/useFetchEd";

export function Glossary() {
  const [data, setData] = useState(null);
  const { dataCards } = useFetchEd("glosario");
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (dataCards) {
      setData(dataCards);
    }
  }, [dataCards]);

  const handlerAccordionToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
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

                <div className="accordion" id="accordionExample">
                  <h5>Keywords</h5>
                  {data.map((item, index) => {
                    const collapseId = `collapse${index}`;
                    const headingId = `heading${index}`;
                    return (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header" id={headingId}>
                          <button
                            className={`accordion-button ${
                              activeIndex === index ? "" : "collapsed"
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${collapseId}`}
                            aria-expanded={
                              activeIndex === index ? "true" : "false"
                            }
                            aria-controls={collapseId}
                            onClick={() => handlerAccordionToggle(index)}
                          >
                            {item.title}
                          </button>
                        </h2>
                        <div
                          id={collapseId}
                          className={`accordion-collapse collapse`}
                          aria-labelledby={headingId}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            <strong>{item.definition}</strong>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
