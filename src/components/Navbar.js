import { Link, useLocation } from "react-router-dom";
import "./NavbarStyles.css";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = (props) => {
  const { noScroll = false } = props;
  const { pathname } = useLocation();

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  if (!noScroll) {
    window.addEventListener("scroll", changeColor);
  }

  useEffect(() => {
    setColor(noScroll);
  }, [noScroll]);

  return (
    <div
      className={color ? "header header-bg" : "header"}
      style={{ position: noScroll ? "inherit" : "fixed" }}
    >
      <Link to="/">
        <h1>Elderly Care & Monitoring System</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li className={pathname === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>

        <li className={pathname === "/blogs" ? "active" : ""}>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li className={pathname === "/services" ? "active" : ""}>
          <Link to="/services">Services</Link>
        </li>
        
        <li className={pathname === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button className="btnn">
            <Link to="/loginPage">Login</Link>
          </button>
        </li>
      </ul>

      <div className="hambuger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
