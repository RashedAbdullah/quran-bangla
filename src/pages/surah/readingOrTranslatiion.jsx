/* eslint-disable react/prop-types */
import { getEngToArNumber } from "../../customHooks/getEngToArNumber";

const ReadingOrTranslation = ({ data }) => {
  return (
    <div
      dir="rtl"
      className="singleSurahDetails col-span-12 lg:col-span-8 font-hafs"
    >
      <div className="mt-8 lg:text-2xl text-xl leading-10 lg:px-20 px-10">
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
