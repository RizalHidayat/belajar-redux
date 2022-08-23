import React from "react";
// import CardImage from "./CardImage";
// import CardName from "./CardName";
import NavbarImage from "./NavbarImage";
import NavbarName from "./NavbarName";
// import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NavbarName />
      <NavbarImage />
    </div>
  );
};

export default Navbar;
