import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import { ThemeContext } from "../contexts/themeProvider";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Box, Skeleton } from "@mui/material";

const Layout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    console.log("I'm Loading");
  }

  return (
    <div className="bg-secondary font-Siliguri selection:first-letter:bg-green-600 selection:bg-secondary selection:text-textWhite">
      <Header />
      <ScrollRestoration />
      {navigation.state === "loading" ? (
        <div className="flex h-screen justify-center align-middle mt-20">
          <Box sx={{ width: 300 }}>
            <Skeleton />
            <Skeleton animation="wave" />
            <Skeleton animation={false} />
          </Box>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
};

export default Layout;
