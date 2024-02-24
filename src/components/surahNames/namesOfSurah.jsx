/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { getEngToBnNumber } from "../../customHooks/getEngToArNumber";
import { bnSurahNames } from "../../banglasurahNames/bnSurahNames";

const NamesOfSurah = ({ quran }) => {
  return (
    <div className="my-10 grid lg:grid-cols-3 gap-3">
      {quran?.map((surah) => (
        <NavLink
          to={`/singleSurah/${surah.id}`}
          key={surah.id}
          className="flex items-center justify-between px-5 py-6 text-xl rounded bg-primary text-white cursor-pointer transition ease-in-out hover:-translate-y-1 duration-300 hover:bg-primaryHover"
        >
          <div className="flex align-middle items-center justify-center gap-5">
            <div className="flex align-middle items-center bg-secondary rotate-45 rounded">
              <div className="h-10 w-10 flex items-center justify-center rotate-[-45deg]">
                {getEngToBnNumber(surah.id)}
              </div>
            </div>
            <div>
              <h3 className="text-2xl">{bnSurahNames[surah.id]?.name}</h3>
              <h3 className="text-sm">{surah.translation}</h3>
            </div>
          </div>
          <div>
            <div className="flex gap-1 items-center">
              <div className="">{getEngToBnNumber(surah.total_verses)}</div>{" "}
              আয়াত
            </div>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default NamesOfSurah;
