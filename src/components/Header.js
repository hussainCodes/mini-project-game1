import React from "react";
import "../assets/style.css";
import Logo from "./Logo";
import Credit from "./Credit";
const Header = ({ credit }) => {
  return (
    <div className="header">
      <Logo />
      <Credit credit={credit} />
    </div>
  );
};

export default Header;
