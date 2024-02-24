import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ThemeContext } from "../contexts/themeProvider";
import { useContext } from "react";
import { motion } from "framer-motion";

const Layout = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <div className="bg-secondary font-Siliguri selection:first-letter:bg-green-600 selection:bg-secondary selection:text-textWhite">
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
