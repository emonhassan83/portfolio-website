import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollUp from "../components/ScrollUp/ScrollUp";
import DarkAndLightToggle from "../components/DarkLightToogle/DarkAndLightToggle";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");

  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <>
        <Outlet />
        <Toaster />
        <ScrollUp />
        <DarkAndLightToggle />
      </>
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default MainLayout;
