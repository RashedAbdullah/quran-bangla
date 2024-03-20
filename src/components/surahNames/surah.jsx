/* eslint-disable react/prop-types */
import Title from "./title";
import NamesOfSurah from "./namesOfSurah";

const SurahNames = ({ quran }) => {
  return (
    <div className=" w-5/6 mx-auto mt-10">
      <Title />
      <NamesOfSurah quran={quran} />
    </div>
  );
};

export default SurahNames;
