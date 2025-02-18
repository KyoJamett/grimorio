import { useEffect, useState } from "react";
import { useFetchEd } from "../hooks/useFetchEd";
import { DictionaryNav } from "../components/DictionaryNav";
import { DictionarySection } from "../components/DictionarySection";

export function DictionaryPage() {
  const [data, setData] = useState(null);
  const { dataCards } = useFetchEd("glosario");

  useEffect(() => {
    if (dataCards) {
      const convertedData = Array.isArray(dataCards)
        ? dataCards
        : Object.values(dataCards);
      setData(convertedData);
    }
  }, [dataCards]);

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
                <DictionaryNav data={data} scrollToSection={scrollToSection} />
              </div>

              {data.map((item, index) => {
                const sectionId = `section-${index}`;
                return (
                  <div className="row" key={index}>
                    <DictionarySection
                      index={index}
                      item={item}
                      sectionId={sectionId}
                    />
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
