/* eslint-disable react/prop-types */
import { bnSurahNames } from "../../banglasurahNames/bnSurahNames";

const SignleSurahTitles = ({ data }) => {
  return (
    <div>
      {" "}
      <div className="mt-4 text-center">
        <h3 className="text-3xl font-Siliguri">
          সুরা {bnSurahNames[data.id].name}
        </h3>
        <p className="text-sm font-Siliguri">( {data.translation} )</p>
      </div>
      <div className=" text-center">
        <h4 className="font-Besmellah text-9xl leading-10">9</h4>
      </div>
    </div>
  );
};

export default SignleSurahTitles;
