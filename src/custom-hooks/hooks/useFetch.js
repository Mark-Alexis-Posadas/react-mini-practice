import { useState, useEffect } from "react";
const axios = require("axios");

export const useFetch = (url, method = "GET", requestData = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        if (method === "GET") {
          response = await axios.get(url);
        } else if (method === "POST") {
          response = await axios.post(url, requestData);
        }

        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method, requestData]);

  return { data, loading, error };
};
