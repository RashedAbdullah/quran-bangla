import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { signOut } from "firebase/auth";
import { useQuranQuery } from "../../customHooks/useQuranQuery";
import { bnSurahNames } from "../../banglasurahNames/bnSurahNames";
import { NavLink } from "react-router-dom";
import { LuSearchX } from "react-icons/lu";

const Search = () => {
  const { quran } = useQuranQuery();
  const [isShowSuggestions, setIsShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const [searcheddata, setSearchedData] = useState([]);
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length) {
      const filteredSurahEn = quran?.filter((surah) =>
        surah.transliteration.toLowerCase().includes(input.toLowerCase())
      );
      setSearchedData(filteredSurahEn);
      setIsShowSuggestions(true);
    } else {
      setIsShowSuggestions(false);
    }
  };
  return (
    <div className="">
      <div className="flex pb-4 text-textBlack">
        <form className="m-auto bg-[#f0f0f0] rounded-full px-5 py-1 lg:w-[40vw] flex dark:border border-stone-400">
          <div className="w-full">
            <input
              type="text"
              className="w-full text-xl p-1 bg-transparent outline-none"
              placeholder="সুরা সন্ধান করুন... [En]"
              onChange={handleInputChange}
              value={input}
            />
          </div>
          <button disabled>
            <IoSearch color="gray" size="25px" />
          </button>
        </form>
      </div>
      {isShowSuggestions && (
        <div className=" bg-secondary dark:bg-slate-200 shadow-lg text-textBlack left-[50%] translate-x-[-50%] px-5 lg:w-[37vw] w-[80vw] absolute rounded z-50">
          <div className=" text-lg">
            {searcheddata.length ? (
              <div className="">
                {searcheddata.map((result) => (
                  <div
                    key={result.id}
                    className="p-1 border-t transition border-primary hover:bg-primaryHover hover:text-white"
                  >
                    <NavLink to={`/singleSurah/${result.id}`} className="">
                      <h3>{bnSurahNames[result?.id]?.name}</h3>
                    </NavLink>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-40 flex items-center justify-center text-gray-500">
                <div>
                  <h3>কোন সুরা খুঁজে পাওয়া যায় নি।</h3>
                  <div className=" flex justify-center ">
                    <LuSearchX size={`80px`} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
