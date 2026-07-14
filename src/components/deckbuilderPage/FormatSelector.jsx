import { useFormatsContext } from "../../context/FormatsContext";

export const FormatSelector = ({ setFormatoKey }) => {
  const { formatos } = useFormatsContext();
  return (
    <div className="d-flex gap-2 mb-3 align-items-center">
      {/* qué es d-flex? */}
      <select
        className="form-select"
        onChange={(e) => setFormatoKey(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          Selecciona un formato
        </option>
        {Object.entries(formatos).map(([key, f]) => (
          <option key={key} value={key}>
            {f.name}
          </option>
        ))}
      </select>

      {/*<button
                    type="button"
                    className="btn btn-warning dropdown-toggle btn-sm"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Formato
                  </button>*/}
    </div>
  );
};
