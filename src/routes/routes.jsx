import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import SingleSurah from "../pages/surah/signgleSurah";
import SideBarSurahNames from "../pages/surah/sidebarSurahName";
import Layout from "../layouts/layout";
import ThemeProvider from "../contexts/themeProvider";
import SignIn from "./../auth/signin";
import SignUp from "../auth/signup";
import UserProfile from "../auth/userProfile";
import Reset from "./../auth/reset";
import About from "./../pages/about/about";
import PrivateRoutes from "./privateRoutes";
import { AnimatePresence } from "framer-motion";

const lang = "bn";

const routes = createBrowserRouter([
  {
    element: (
      <ThemeProvider>
        <AnimatePresence mode="wait">
          <Layout />
        </AnimatePresence>
      </ThemeProvider>
    ),
    errorElement: <h2>404 NOT FOUND</h2>,
    children: [
      {
        path: "/",
        element: (
          <AnimatePresence mode="wait">
            <Home />
          </AnimatePresence>
        ),
      },
      {
        path: "/singleSurah",
        element: (
          <AnimatePresence>
            <SideBarSurahNames />
          </AnimatePresence>
        ),
        loader: () =>
          fetch(
            `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_bn.json`
          ),
        children: [
          {
            path: "/singleSurah/:id",
            element: (
              <AnimatePresence mode="wait">
                <SingleSurah />
              </AnimatePresence>
            ),
            loader: ({ params }) =>
              fetch(
                `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/${lang}/${params.id}.json`
              ),
          },
        ],
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <AnimatePresence mode="wait">
              <About />
            </AnimatePresence>
          </PrivateRoutes>
        ),
      },
      {
        path: "/user",
        element: <UserProfile />,
      },
    ],
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/reset",
    element: <Reset />,
  },
]);

export { routes };
