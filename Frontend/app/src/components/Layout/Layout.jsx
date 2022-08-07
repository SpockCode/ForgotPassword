import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div className="max-w-screen-2xl mx-auto overflow-y-hidden">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
