import React from "react";
import Main from "./style/Main.scss";
import { useState } from "react";
import Logo from "../../images/Logo (1).png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <img src={Logo} alt="" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/Desitnations">Desitnations</a>
        <a href="/Hotels">Hotels</a>
        <a href="/Flights">Flights</a>
        <a href="/Bookings">Bookings</a>
        <a href="/Login">Login</a>
        <a href="/SignUp" id="signUp">
          Sign up
        </a>
        <a href="/">
          <i class="fa-solid fa-angle-down"></i> EN
        </a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
