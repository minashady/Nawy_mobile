import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "59257ffa40mshac0c536f7538abep12f3dajsn9d075541e6f4",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {...query
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response  = await axios(options);
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      //console.error(error); // Log the error to the console
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};


export default useFetch;