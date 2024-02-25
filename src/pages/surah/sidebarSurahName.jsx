import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  Outlet,
  useLoaderData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { getEngToBnNumber } from "../../customHooks/getEngToArNumber";
import { bnSurahNames } from "../../banglasurahNames/bnSurahNames";
import Loading from "../loading/loading";
import { getHideSidebar } from "../../localStorage/sidebar";

const SideBarSurahNames = () => {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const data = useLoaderData();
  const [isShowSidebar, setIsShowSidebar] = useState(getHideSidebar());
  useEffect(() => {
    localStorage.setItem("isHide", JSON.stringify(isShowSidebar));
  }, [isShowSidebar]);

  const handleGoingToSurah = (id) => {
    navigate(`/singleSurah/${id}`);
    setIsShowSidebar(false);
  };

  return (
    <div className=" min-h-screen lg:pt-2 pt-16">
      <div className=" fixed top-16 left-0 text-textWhite">
        <button
          onClick={() => setIsShowSidebar(true)}
          className="h-8 w-8 rounded-full bg-primaryHover flex items-center justify-center"
        >
          <MdOutlineKeyboardArrowRight size={"30px"} />
        </button>
      </div>
      <div
        className={` bg-primary top-0 ${
          isShowSidebar ? "left-0" : "translate-x-[-200px]"
        } pt-5 rounded-l fixed h-screen left-0 w-62 overflow-auto transition duration-300 px-3 lg:pt-20`}
      >
        <div className=" fixed top-20 left-[170px] text-textWhite">
          <button onClick={() => setIsShowSidebar(false)}>
            <MdOutlineKeyboardArrowLeft size={"30px"} />
          </button>
        </div>{" "}
        <form className="bg-textWhite flex align-middle w-40 m-auto rounded fixed top-20">
          <input
            className="bg-transparent outline-none p-1 w-[90%]"
            type="text"
            placeholder="সুরা খুঁজুন"
          />
          <button>
            <FiSearch />
          </button>
        </form>
        <div className=" text-textWhite pt-24 lg:pt-10 pr-3">
          {data.map((name) => (
            <button
              className="block py-2 px-1 border-b border-secondary hover:bg-primaryHover transition"
              key={name.id}
              onClick={() => handleGoingToSurah(name.id)}
            >
              <div className="flex items-center gap-5 ">
                <p className="text-1xl">{getEngToBnNumber(name.id)}</p>
                <h3 className="text-1xl">{bnSurahNames[name.id]?.name}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
    </div>
  );
};

export default SideBarSurahNames;
