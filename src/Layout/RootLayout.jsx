import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Scroll } from "lucide-react";

const RootLayout = () => {
  return (
    // <div></div>
    <>
      <Scroll />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
