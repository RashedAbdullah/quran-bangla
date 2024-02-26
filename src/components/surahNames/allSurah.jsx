import SurahNames from "./surah";
import { useQuranQuery } from "../../customHooks/useQuranQuery";

const AllSurah = () => {
  const { quran } = useQuranQuery();
  return (
    <div className="pt-10">
      <SurahNames quran={quran} />
    </div>
  );
};

export default AllSurah;
