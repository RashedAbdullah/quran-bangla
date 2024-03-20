import ReadingOrTranslation from "./readingOrTranslatiion";
import ReadingAndTraslatetile from "./readingAndTraslateTitle";
import { useLoaderData } from "react-router-dom";
import SignleSurahBn from "./singleSurahBn";
import { useEffect, useState } from "react";
import SignleSurahTitles from "./signleSurahTitles";
import { getReadingStorage } from "../../localStorage/readingTraslate";

const SingleSurah = () => {
  const data = useLoaderData();
  const [translate, setTraslate] = useState(getReadingStorage());

  useEffect(() => {
    localStorage.setItem("isReading", JSON.stringify(translate));
  }, [translate]);
  return (
    <div>
      <div className="py-10 lg:py-20 lg:px-60 min-h-screen pt-5">
        <ReadingAndTraslatetile
          onTranslate={setTraslate}
          translate={translate}
        />
        <SignleSurahTitles data={data} />
        {!translate ? (
          <ReadingOrTranslation data={data} />
        ) : (
          <SignleSurahBn data={data} />
        )}
      </div>
    </div>
  );
};

export default SingleSurah;
