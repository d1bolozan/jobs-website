import { useState, useEffect } from "react";
const useFetch = (url, options) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  options = { "Content-Type": "application/json", Accept: "application/json" };

  useEffect(() => {
    const doFetch = async () => {
      try {
        const res = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const json = await res.json();
        setResponse(json);
      } catch (e) {
        setError(e);
      }
    };
    doFetch();
  }, []);
  return { response, error };
};
export default useFetch;
