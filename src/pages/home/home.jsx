import { useContext } from "react";
import SurahNames from "../../components/surahNames/surah";
import { useQuranQuery } from "../../customHooks/useQuranQuery";
import EntryMsg from "./../../components/entryMsg/entryMsg";
import { ThemeContext } from "../../contexts/themeProvider";

const Home = () => {
  const { quran } = useQuranQuery();
  const { isOn } = useContext(ThemeContext);
  return (
    <div className=" selection:bg-secondary selection:text-primary">
      <EntryMsg isOn={isOn} />
      <SurahNames quran={quran} />
    </div>
  );
};

export default Home;
