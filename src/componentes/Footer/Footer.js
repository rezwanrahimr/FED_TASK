import React from "react";
import Main from "./style/Main.scss";
import Logo from "../../images/Jadoo..png";
import google from "../../images/google.png";
import apple from "../../images/asdsdsad2.png";

const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div class="footer-col">
              <img src={Logo} alt="" />
              <p>Book your trip in minute, get fullControl for much longer.</p>
            </div>
            <div class="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Mobile</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Contact</h4>
              <ul>
                <li>
                  <a href="#">Help/FAQ</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Affilates</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>More</h4>
              <ul>
                <li>
                  <a href="#">Airlinefees</a>
                </li>
                <li>
                  <a href="#">Airline</a>
                </li>
                <li>
                  <a href="#">Low fare tips</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <div class="social-links">
                <a href="#">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
              <p>Discover our app</p>
              <div id="store">
                <div>
                  <img src={google} width="90%" alt="" />
                </div>
                <div>
                  <img src={apple} width="60%" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>All rights reserved@jadoo.co</p>
      </footer>
    </div>
  );
};

export default Footer;
