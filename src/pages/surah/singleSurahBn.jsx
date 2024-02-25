/* eslint-disable react/prop-types */
import {
  getEngToArNumber,
  getEngToBnNumber,
} from "../../customHooks/getEngToArNumber";
import { MdArrowRight } from "react-icons/md";

const SignleSurahBn = ({ data }) => {
  return (
    <div className="min-h-screen">
      <div className="mt-5 lg:text-2xl leading-10 lg:px-20 px-10 text-lg">
        {data.verses.map((ayah) => (
          <div key={ayah.id} className="flex flex-col gap-2">
            <p dir="rtl" className="font-hafs pt-5">
              {ayah.text}{" "}
              <span className=" text-3xl">{getEngToArNumber(ayah.id)}</span>
            </p>{" "}
            <span
              dir="ltr"
              className="font-Siliguri border-b border-primary pb-5 font-thin text-xl lg:flex gap-2"
            >
              <span className="flex items-center">
                <span className="flex">{getEngToBnNumber(ayah.id)}</span>
                <span>
                  <MdArrowRight />
                </span>
              </span>
              {ayah.translation}{" "}
            </span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SignleSurahBn;
