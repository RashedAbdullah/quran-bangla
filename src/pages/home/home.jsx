import { useState } from "react";
import SuggestedSurah from "../../components/suggestedSurah/suggestedSurah";
import SurahNames from "../../components/surahNames/surah";
import { useQuranQuery } from "../../customHooks/useQuranQuery";
import { useTranslationsQuery } from "../../customHooks/useTranslationsQuery";
import EntryMsg from "./../../components/entryMsg/entryMsg";

const Home = () => {
  const { quran, error } = useQuranQuery();
  return (
    <div className=" selection:bg-secondary selection:text-primary">
      <EntryMsg />
      <SuggestedSurah />
      <SurahNames quran={quran} />
    </div>
  );
};

export default Home;
