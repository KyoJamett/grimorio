export const SearchBarEd = ({ setSearchInput }) => {
  return (
    <form className="d-flex" role="search">
      <input
        className="form-control form-control-xl custom-search-input me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        data-bs-theme="dark"
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </form>
  );
};
