const BASE_URL = 'http://localhost:3001/api/edition';

async function testDeckCards(formato) {
  const results = [];
  let loaded = 0;

  for (const { ed } of formato.ediciones) {
    try {
      const res = await fetch(`${BASE_URL}/${ed}`);
      const data = await res.json();

      if (data?.cards) {
        results.push(...data.cards);
      }

      loaded++;
      console.log(`[${loaded}/${formato.ediciones.length}] ${ed} — ${data?.cards?.length ?? 0} cartas`);

    } catch (err) {
      loaded++;
      console.error(`Error en edición ${ed}:`, err.message);
    }
  }

  console.log(`\nTotal: ${results.length} cartas`);
  console.log('Muestra (primeras 3):', results.slice(0, 3));
}

const formatoTest = {
  folder: 'furia',
  ediciones: [
    { ed: 'furia' },
    { ed: 'furia-extension' },
    { ed: 'sumeria' },
  ]
};

testDeckCards(formatoTest);