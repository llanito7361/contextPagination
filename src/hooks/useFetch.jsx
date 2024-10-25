import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetcheador = async () => {
            setLoading(true);
            try {
              const response = await fetch(url);
              if (!response.ok) throw new Error(`${response.status}`);
              const data = await response.json();
              setData(data);
            } catch (error) {
              setError(error);
              console.log(error.message);
            }
            finally{
                setLoading(false)
            }
          };
          fetcheador();
    }, [ ])

        return {data,loading,error}
};

export default useFetch;
