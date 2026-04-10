import { fetchApi } from "../../utils/fetch/fetch";
import { useEffect, useState } from "react";
import style from './QuoteFetch.module.scss'

export const QuoteFetch = () => {
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetchApi('/api/zenquotes', 'GET', null, null);
        if (response.success) {
          setQuote(response.data);
          console.log(response.data);
        } else {
          console.error('Fetch failed');
        }
      } catch (err) {
        console.error('Error', err);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className={style.quoteStyle}>
      <p>{quote ? JSON.stringify(quote[0].q) : 'Loading quote...'}</p>
    <p>{quote && JSON.stringify(quote[0].a.slice(0, -1))}</p>
    </div>
  );
};
