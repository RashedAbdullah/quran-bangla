import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../contexts/themeProvider";

const Layout = () => {
  const { isOn } = useContext(ThemeContext);
  return (
    <div
      className={`bg-secondary font-Siliguri selection:first-letter:bg-green-600 selection:bg-secondary selection:text-textWhite ${
        !isOn ? "dark" : ""
      }`}
    >
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
