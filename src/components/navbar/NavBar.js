import React from "react";
import "./NavBar.css";
import logo from "../../assets/image.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full pr-[30px] py-2">
      <img src={logo} alt="" className="logo" />
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>Services</li>
        <li>Blog</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default NavBar;
