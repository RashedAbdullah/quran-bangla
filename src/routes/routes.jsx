import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home";
import SingleSurah from "../pages/surah/signgleSurah";
import SideBarSurahNames from "../pages/surah/sidebarSurahName";
import Layout from "../layouts/layout";
import SignIn from "./../auth/signin";
import SignUp from "../auth/signup";
import UserProfile from "../auth/userProfile";
import Reset from "./../auth/reset";
import PrivateRoutes from "./privateRoutes";
import SignleSurahBn from "./../pages/surah/singleSurahBn";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h2>404 NOT FOUND</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singleSurah",
        element: <SideBarSurahNames />,
        loader: () =>
          fetch(
            `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/quran_bn.json`
          ),
        children: [
          {
            path: "/singleSurah/:id",
            element: <SingleSurah />,

            loader: ({ params }) =>
              fetch(
                `https://cdn.jsdelivr.net/npm/quran-json@3.1.2/dist/chapters/bn/${params.id}.json`
              ),
          },
        ],
      },
      {
        path: "/about",
        element: (
          <PrivateRoutes>
            <SignleSurahBn />
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
