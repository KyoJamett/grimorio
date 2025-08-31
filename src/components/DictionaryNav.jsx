export const DictionaryNav = ({ data, scrollToSection }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-dark rounded"
      data-bs-theme="dark"
    >
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
  );
};
