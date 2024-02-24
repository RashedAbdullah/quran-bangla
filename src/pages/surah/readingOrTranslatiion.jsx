import { useLoaderData } from "react-router-dom";
import { getEngToArNumber } from "../../customHooks/getEngToArNumber";
import { bnSurahNames } from "../../banglasurahNames/bnSurahNames";

const ReadingOrTranslation = () => {
  const data = useLoaderData();
  return (
    <div
      dir="rtl"
      className="singleSurahDetails col-span-12 lg:col-span-8 font-hafs"
    >
      <div className="mt-4 text-center">
        <h3 className="text-3xl font-Siliguri">
          সুরা {bnSurahNames[data.id].name}
        </h3>
        <p className="text-sm font-Siliguri">( {data.translation} )</p>
      </div>
      <div className="mt-5 text-center">
        <h4 className="text-2xl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h4>
      </div>
      <div className="mt-5 text-2xl leading-10 px-20">
        {data.verses.map((ayah) => (
          <span className="" key={ayah.id}>
            <span>
              {" "}
              {ayah.text}{" "}
              <span className=" text-3xl">{getEngToArNumber(ayah.id)}</span>
            </span>{" "}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ReadingOrTranslation;
