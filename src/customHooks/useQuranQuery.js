import { useEffect, useState } from "react";

const useQuranQuery = () => {
  const [quran, setQuran] = useState([]);
  const [error, setError] = useState(null);

  const getQuran = async () => {
    try {
      const url = `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_bn.json`;
      const response = await fetch(url);
      if (!response.status) {
        throw new Error("Failed to fetching data...");
      }
      const data = await response.json();
      setQuran(data);
    } catch (err) {
      setError(err);
    }
  };
  useEffect(() => {
    getQuran();
  }, []);

  return { quran, error };
};

export { useQuranQuery };
