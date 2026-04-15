import { fetchApi } from "../../utils/fetch/fetch";
import { useEffect, useState } from "react";
import style from './QuoteFetch.module.scss'

//Definerer typen for qoute data fra API
interface QuoteData {
  q: string;    //selve citatet (quote)
  a: string;    //forfatter (auther)
  h: string;    //HTML version af citater
}
//React component
export const QuoteFetch = () => {
  //Stae til at gemme qoute data      Stater son null (før data er hentet)
  const [quote, setQuote] = useState<QuoteData[] | null>(null);

  useEffect(() => {
    //Funktion til at hente qoute fra API
    const fetchQuote = async () => {
      try {
        //Kalder vores fetchAPI funktion
        const response = await fetchApi({
          endpoint: '/api/zenquotes',   //Går igennem proxy
          method: 'GET',                
          body: "",                     //Tom fordi GET request
          token: ""                     //Inge auth nødvendig
        });            
        //Hvis request lykkes
        if (response.success) {
          setQuote(response.data);      //Gemmer data i state
          console.log(response.data);   //Logger data i console
        } else {
          //Hvis API retunerer fejl
          console.error('Fetch failed');
        }
      } catch (err) {
        //Hvis der sker en fetch-fejl (netvær osv.)
        console.error('Error', err);
      }
    };

    //Kalder funktionen når komponenten loader
    fetchQuote();
  }, []);  //[] betyder: køre kun én gang (ved mount)

  return (
    <div className={style.quoteStyle}>
      {/* Viser quote hvis data findes, ellers loading text */}
      <p>{quote 
      ? JSON.stringify(quote[0].q)  //Tager første qoute fra array
      : 'Loading quote...'}</p>
      {/* Viser forfatter hvis data findes        slice(0, -1) fjerner sidste tegn (ofte ekstra tegn fra API (I dettet tilfælde var der "")) */}
    <p>{quote && JSON.stringify(quote[0].a.slice(0, -1))}</p>
    </div>
  );
};
