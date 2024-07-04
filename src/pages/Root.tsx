import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLayoutEffect } from "react";

const Root = () => {
  const location = useLocation();

  useLayoutEffect(() => window.scrollTo({ top: 0 }), [location]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
