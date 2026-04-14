interface fetchValue{
  endpoint: string
  method: string 
  body: string
  token: string 
}

// Hovedfunktion til API-kald
export const fetchApi = async (
{endpoint, method, body, token}: fetchValue
) => {
  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

 
  const config = {
    method,
    headers,
    ...(body ? { body: JSON.stringify(body) } : {})
  };
 
  try {
    const url = `${endpoint}`;
    const res = await fetch(`${url}`, config);
 
    // Tjek om svaret er JSON og parse det
    const isJson = res.headers.get('Content-Type')?.includes('application/json');
    const data = isJson ? await res.json() : null;
 
    if (res.ok) {
      return { success: true, data: data.response ?? data };
    }
 
    // Hvis ikke ok, returner fejl
    return { success: false, error: `${res.status}: ${res.statusText}` };
  } catch (err) {
    // Håndter fetch-fejl
    console.error('Fetch error:', err);
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    return { success: false, error: errorMessage };
  }
};