import React from "react";
import logo from "../assets/360_F_170537083_gA1RBTufrZRvHPmlHfZtUeUnjeb4gcUD.jpg";

export default function Header() {
  return (
    <header>
      <img className="nav-image" src={logo} alt="Site Logo" />
      <h1 className="nav-header">My Travel Journal</h1>
    </header>
  );
}
