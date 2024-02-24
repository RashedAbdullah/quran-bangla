import { useEffect, useState } from "react";

const useTranslationsQuery = (translation) => {
  const [translations, setTranslations] = useState([]);
  const [errors, setErrors] = useState(null);

  const getQuran = async (translation) => {
    try {
      const url = `https://api.alquran.cloud/v1/quran/${translation}`;
      const response = await fetch(url);
      if (!response.status) {
        throw new Error("Failed to fetching data...");
      }
      const data = await response.json();
      setTranslations(data.data.surahs);
    } catch (err) {
      setErrors(err);
    }
  };
  useEffect(() => {
    getQuran(translation);
  }, [translation]);

  return { translations, errors };
};

export { useTranslationsQuery };
