import React from "react";
import Logo from "../assets/logo.png"; // your logo path

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-start p-4 backdrop-blur-sm">
      <img src={Logo} alt="Logo" className="h-12 w-auto" />
    </header>
  );
};

export default TopBar;
