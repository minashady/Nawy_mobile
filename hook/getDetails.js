import { useState, useEffect } from "react";
import {useGlobalSearchParams } from "expo-router";
import axios from "axios";

const getDetails = (endpoint, query) => {
    const params = useGlobalSearchParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_BASE_URL = "http://192.168.1.111:3100";
  const options = {
    method: "POST",
    url: `${API_BASE_URL}/apartments/apartmentDetails?id=${params.id}`,
    params: { ...query },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios(options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
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

export default getDetails;
