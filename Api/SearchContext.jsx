import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ApiValue = createContext();
export default function SearchContext({ children }) {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setApiData(response.data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return <ApiValue.Provider value={{ apiData }}>{children}</ApiValue.Provider>;
}
