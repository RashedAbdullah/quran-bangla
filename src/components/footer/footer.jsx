import { TbBrandYoutubeFilled } from "react-icons/tb";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" bg-primaryHover dark:bg-gradient-to-br from-gray-200 to-gray-50 shadow-md dark:text-slate-900 text-textWhite py-10 text-lg px-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-5">
        <ul className="">
          <li>
            <NavLink to={"/"}>হোম</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>আমাদের সম্পর্কে</NavLink>
          </li>
          <li>অনান্য বিষয়াদি</li>
          <li>মতামত</li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/"}>হোম</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>আমাদের সম্পর্কে</NavLink>
          </li>
          <li>অনান্য বিষয়াদি</li>
          <li>মতামত</li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/"}>হোম</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>আমাদের সম্পর্কে</NavLink>
          </li>
          <li>অনান্য বিষয়াদি</li>
          <li>মতামত</li>
        </ul>
        <ul>
          <li>
            <NavLink to={"/"}>হোম</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>আমাদের সম্পর্কে</NavLink>
          </li>
          <li>অনান্য বিষয়াদি</li>
          <li>মতামত</li>
        </ul>
      </div>
      <div className="border-t py-2 text-sm flex items-center justify-between">
        <div>
          <p>স্বত্ব সংরক্ষিত</p>
        </div>
        <div className="flex gap-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/@Ahlam_Sub"
          >
            <TbBrandYoutubeFilled />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/rashed4abdullah"
          >
            <PiInstagramLogoFill />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/Rashed4Abdullah"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
