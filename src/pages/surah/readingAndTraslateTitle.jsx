/* eslint-disable react/prop-types */
const ReadingAndTraslatetile = ({ onTranslate, translate }) => {
  return (
    <>
      {" "}
      <div className="flex justify-center align-middle">
        <div>
          <button
            onClick={() => onTranslate(false)}
            className={`border border-primary py-1 px-10 text-xl hover:bg-primary hover:text-textWhite transition duration-300  ${
              !translate && "bg-primaryHover dark:bg-slate-900  text-textWhite "
            }`}
            href=""
          >
            পড়ুন
          </button>
        </div>
        <div>
          <button
            onClick={() => onTranslate(true)}
            className={`border border-primary py-1 px-10 text-xl hover:bg-primary hover:text-textWhite transition duration-300 ${
              translate && "bg-primaryHover text-textWhite dark:bg-stone-900"
            }`}
            href=""
          >
            অনুবাদ
          </button>
        </div>
      </div>
    </>
  );
};

export default ReadingAndTraslatetile;
