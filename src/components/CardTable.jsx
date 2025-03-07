import { CardRow } from "./CardRow"


export const CardTable = ({cards, types, rarities, handlerOpenForm}) => {

    return(
        <table className="table table-hover table-striped rounded-3 border">
                  <thead className="table-responsive table-dark">
                    <tr>
                      <th>N° Edición</th>
                      <th>Nombre</th>
                      <th>Tipo</th>
                      <th>Frecuencia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cards.map(
                      ({
                        id,
                        edid,
                        slug,
                        name,
                        rarity,
                        race,
                        type,
                        keywords,
                        cost,
                        damage,
                        ability,
                        flavour,
                        ed_edid,
                        ed_slug,
                      }) => (
                        <CardRow
                          key={id}
                          id={id}
                          edid={edid}
                          slug={slug}
                          name={name}
                          rarity={rarity}
                          race={race}
                          type={type}
                          keywords={keywords}
                          cost={cost}
                          damage={damage}
                          ability={ability}
                          flavour={flavour}
                          ed_edid={ed_edid}
                          ed_slug={ed_slug}
                          rarities={rarities}
                          types={types}
                          handlerOpenForm={handlerOpenForm}
                        />
                      )
                    )}
                  </tbody>
                </table>
    )
}