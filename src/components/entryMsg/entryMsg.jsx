import Search from "../search/search";
import { motion } from "framer-motion";
import SuggestedSurah from "../suggestedSurah/suggestedSurah";

const EntryMsg = () => {
  const title = "কুরআনের অঙ্গনে আপনাকে স্বাগতম".split(" ");
  const desc =
    "রাসুল সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম বলেন: কুরআন হলো মানুষের সর্বপ্রথম ও সর্বেত্তম পাথেয়। সুতরা আমাদের উচিৎ কুরআনের অনুসরণ করা। কুরআন হলো মানুষের সর্বপ্রথম ও সর্বেত্তম পাথেয়। সুতরা আমাদের উচিৎ কুরআনের অনুসরণ করা।".split(
      " "
    );

  return (
    <div
      className={`bg-primary dark:bg-gradient-to-br from-gray-50 to-gray-200 shadow-md dark:text-slate-900 text-textWhite py-10 pb-6`}
    >
      <div className=" lg:w-[40vw] m-auto p-10">
        <h3 className="text-3xl lg:text-4xl">
          {title.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index / 8 }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </h3>
        <div className=" text-lg mt-4">
          <p>
            {desc.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: index / 30 }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </p>
        </div>
      </div>
      <Search />
      <SuggestedSurah />
    </div>
  );
};

export default EntryMsg;
