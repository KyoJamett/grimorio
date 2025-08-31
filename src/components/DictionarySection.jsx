export const DictionarySection = ({ index, item, sectionId }) => {
  return (
    <div
      id={sectionId}
      className="accordion bg-dark rounded"
      data-bs-theme="dark"
      key={index}
    >
      <h5 className="text-light margin-top">{item.title}</h5>
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
              <div className="accordion-body backslash">
                <strong>{subItem.definition}</strong>
              </div>
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
};
