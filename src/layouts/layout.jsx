import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";
import Loading from "../pages/loading/loading";

const Layout = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    console.log("I'm Loading");
  }

  return (
    <div className="bg-secondary font-Siliguri selection:first-letter:bg-green-600 selection:bg-secondary selection:text-textWhite">
      <Header />
      <ScrollRestoration />
      {navigation.state === "loading" ? <Loading /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default Layout;
