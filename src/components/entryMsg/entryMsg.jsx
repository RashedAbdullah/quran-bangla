import Search from "../search/search";
import { motion } from "framer-motion";
import SuggestedSurah from "../suggestedSurah/suggestedSurah";

const EntryMsg = () => {
  const title = "القرآن الكريم".split(" ");
  const desc =
    "আবু হুরায়রা (রা.) থেকে বর্ণিত। তিনি বলেন, রাসুলুল্লাহ (সা.) বলেছেন, যখন কিছু লোক মহান আল্লাহর ঘরে উপস্থিত হয়ে কোরআন তেলাওয়াত করে এবং পরস্পর পরস্পরকে শিক্ষা দেয় এবং শিক্ষা নেয়, তখন তাদের ওপর শান্তি বর্ষিত হয়, মহান আল্লাহর রহমত তাদেরকে আবরিত করে রাখে, ফেরেশতারা তাদেরকে ঘিরে রাখে আর আল্লাহ তায়ালা তাদের কথা ওদের নিকট স্বরণ করে যারা তার নিকট আছে, স্বরণ রাখো যার আমল তাকে পেছনে রেখেছে তার বংশ মর্যাদা তাকে এগিয়ে নিয়ে যেতে পারবে না। (সহিহ মুসলিম, হাদিস : ৭০২৮)".split(
      " "
    );

  return (
    <div
      className={`bg-primary dark:bg-gradient-to-br from-gray-50 to-gray-200 shadow-md dark:text-slate-900 text-textWhite py-10 pb-6`}
    >
      <div className=" lg:w-[40vw] m-auto p-10 ">
        <h3 className="text-3xl lg:text-4xl font-hafs text-center font-semibold">
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
