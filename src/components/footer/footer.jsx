import { TbBrandYoutubeFilled } from "react-icons/tb";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-primaryHover text-textWhite py-10 text-lg px-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 py-5">
        <ul className="">
          <li>الصفحة الرئيسة</li>
          <li>معلومات عنا</li>
          <li>تحديثات المنتج</li>
          <li>التعليقات</li>
          <li>مساعدة</li>
        </ul>
        <ul>
          <li>الصفحة الرئيسة</li>
          <li>معلومات عنا</li>
          <li>تحديثات المنتج</li>
          <li>التعليقات</li>
          <li>مساعدة</li>
        </ul>
        <ul>
          <li>الصفحة الرئيسة</li>
          <li>معلومات عنا</li>
          <li>تحديثات المنتج</li>
          <li>التعليقات</li>
          <li>مساعدة</li>
        </ul>
        <ul>
          <li>الصفحة الرئيسة</li>
          <li>معلومات عنا</li>
          <li>تحديثات المنتج</li>
          <li>التعليقات</li>
          <li>مساعدة</li>
        </ul>
      </div>
      <div className="border-t py-2 text-sm flex items-center justify-between">
        <div>
          <p>كل الحقوق محفوظة</p>
        </div>
        <div className="flex gap-5">
          <a href="">
            <TbBrandYoutubeFilled />
          </a>
          <a href="">
            <PiInstagramLogoFill />
          </a>
          <a href="">
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
