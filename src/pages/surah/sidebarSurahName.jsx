import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";
import { getEngToBnNumber } from "../../customHooks/getEngToArNumber";
import { bnSurahNames } from "../../banglasurahNames/bnSurahNames";

const SideBarSurahNames = () => {
  console.log(bnSurahNames[0].name);
  const data = useLoaderData();
  // console.log(data[0].id);
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  return (
    <motion.div
      className=" min-h-screen"
      key="modal"
      initial={{ x: "-5vh", opacity: 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className={` bg-primary top-20 ${
          isShowSidebar
            ? "left-0"
            : " lg:translate-x-[-175px] translate-x-[-175px]"
        } pt-5 rounded-l fixed max-h-screen top-0 left-0 w-62 overflow-auto transition duration-300 px-3 lg:pt-20`}
      >
        {" "}
        <div className=" fixed left-[170px] text-textWhite">
          <button onClick={() => setIsShowSidebar(!isShowSidebar)}>
            {isShowSidebar ? (
              <MdOutlineKeyboardArrowLeft size={"30px"} />
            ) : (
              <MdOutlineKeyboardArrowRight size={"30px"} />
            )}
          </button>
        </div>
        <form className="bg-textWhite flex align-middle w-40 m-auto rounded fixed">
          <input
            className="bg-transparent outline-none p-1 w-[90%]"
            type="text"
            placeholder="সুরা খুঁজুন"
          />
          <button>
            <FiSearch />
          </button>
        </form>
        <div className=" text-textWhite pt-8 pr-3">
          {data.map((name) => (
            <NavLink key={name.id} to={`/singleSurah/${name.id}`}>
              <div className="flex items-center gap-5 py-2 px-1 border-b border-secondary hover:bg-primaryHover transition">
                <p className="text-1xl">{getEngToBnNumber(name.id)}</p>
                <div>
                  <h3 className="text-1xl">{bnSurahNames[name.id]?.name}</h3>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </motion.div>
  );
};

export default SideBarSurahNames;
