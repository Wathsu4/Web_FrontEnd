import "./NavBar.css";
import logo from "../../assets/image.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";

function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="w-full pr-[30px] py-2">
        <img src={logo} alt="" className="logo" />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <li className="dropdown cursor-pointer" ref={dropdownRef}>
            <span onClick={toggleDropdown}>Services</span>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li>Professional Support</li>
                <li>Anonymous Peer Support</li>
                <li>Mental Health Assessment</li>
                <Link to="/expressiongallery">
                  <li>Expression Gallery</li>
                </Link>
                <Link to="/musictherapy">
                  <li>Music Therapy</li>
                </Link>
              </ul>
            )}
          </li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
