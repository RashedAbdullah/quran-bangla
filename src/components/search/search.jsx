import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { signOut } from "firebase/auth";

const Search = () => {
  const [isShowSuggestions, setIsShowSuggestions] = useState(false);
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
    if (e.target.value.length) {
      setIsShowSuggestions(true);
    } else {
      setIsShowSuggestions(false);
    }
  };
  return (
    <div className="">
      <div className="flex pb-4 text-textBlack">
        <form className="m-auto bg-[#f0f0f0] rounded-full px-5 py-1 lg:w-[40vw] flex">
          <div className="w-full">
            <input
              type="text"
              className="w-full text-xl p-1 bg-transparent outline-none"
              placeholder="সুরা বা আয়াত সন্ধান করুন"
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
        <div className="bg-textWhite text-textBlack m-auto px-5 py-1 lg:w-[37vw] relative top-[-40px]">
          <div className=" text-lg">
            <div>
              <a href="">
                <h3>মুমতাহিনাহ</h3>
              </a>
            </div>
            <div>
              <a href="">
                <h3>মুমতাহিনাহ</h3>
              </a>
            </div>
            <div>
              <a href="">
                <h3>মুমতাহিনাহ</h3>
              </a>
            </div>
            <div>
              <a href="">
                <h3>মুমতাহিনাহ</h3>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
