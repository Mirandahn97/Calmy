//DEfinerer typen af data som funktionen modtager
interface fetchValue{
  endpoint: string  //URL til API
  method: string    //HTTP metode (Postman) 
  body: string      //Data der sendes med ( typisk ved POST)
  token: string     //Auth token (fx JWT) 
}

// Hovedfunktion til API-kald
export const fetchApi = async (
{endpoint, method, body, token}: fetchValue
) => {
  //Opretter headers til request
  const headers = {
    'Content-Type': 'application/json',
    //Tilføjer Authorization header KUN hvis topken findes
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

 //Samler konfiguration til fetch
  const config = {
    method,
    headers,
    //Tilføjer body KUN hvis den findes
    ...(body ? { body: JSON.stringify(body) } : {})
  };
 
  try {
    //URL
    const url = endpoint;
    //Sender request til API
    const res = await fetch(endpoint, config);
    // Tjek om svaret er JSON 
    const isJson = res.headers.get('Content-Type')?.includes('application/json');
    //Parser kun hvis det er JSON 
    const data = isJson ? await res.json() : null;
 //Hvis request lykkedes (200-299)
    if (res.ok) {
      return { success: true,
         data: data.response ?? data }; //Returnerer data eller data.response hvis den findes
    }
 
    // Hvis ikke ok, returner fejl (fx 404 eller 500)
    return { 
      success: 
      false, error: `${res.status}: ${res.statusText}` };

  } catch (err) {
    // Fanger fejl (fx netværksfejl eller server nede)
    console.error('Fetch error:', err);
    //Sikre vi får en korrekt fejlbesked
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return { success: false, error: errorMessage };
  }
};