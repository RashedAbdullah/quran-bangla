import SurahNames from "../../components/surahNames/surah";
import { useQuranQuery } from "../../customHooks/useQuranQuery";
import EntryMsg from "./../../components/entryMsg/entryMsg";

const Home = () => {
  const { quran, error } = useQuranQuery();
  return (
    <div className=" selection:bg-secondary selection:text-primary">
      <EntryMsg />
      <SurahNames quran={quran} />
    </div>
  );
};

export default Home;
