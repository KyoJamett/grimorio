import { useCards } from "../hooks/useCards";

export function Home() {
  const { homeText, handlerEdition } = useCards();

  return (
    <>
      <div className="container my-4">
        <div className="row">
          <p class="text-start">{homeText.text}</p>
        </div>
        <div class="container my-4">
          <div class="row">
            <div class="col">
              Hijos del Sol
              <button
                type="button"
                class="btn btn-dark"
                onClick={() => handlerEdition()}
              >
                Dark
              </button>
            </div>
            <div class="col">
              Column
              <button type="button" class="btn btn-dark">
                Dark
              </button>
            </div>
            <div class="col">
              Column
              <button type="button" class="btn btn-dark">
                Dark
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
