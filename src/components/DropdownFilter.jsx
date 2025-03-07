export const DropdownFilter = ({label, onSelect, options, selected}) => {

    return (
        <div className="col-12 col-sm-4 mb-3 dropdown-column">
            <div className="btn-group w-100">
              <button
                type="button"
                className="btn btn-warning dropdown-toggle w-100"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {selected === ""
                  ? label
                  : options.find((t) => t.id === selected)?.name}
              </button>
              <div className="dropdown-menu">
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedType("");
                  }}
                >
                  Todos
                </a>
                {options.map(({ id, name, slug }) => (
                  <a
                    key={id}
                    className="dropdown-item"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      onSelect(id);
                    }}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>
        </div>
    )
}