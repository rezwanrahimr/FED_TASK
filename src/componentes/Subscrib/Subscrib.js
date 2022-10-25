import React from "react";
import Main from "./style/Main.scss";
import subImg from "../../images/Group 77.png";
import subImg2 from "../../images/Group 5.png";

const Subscrib = () => {
  return (
    <div id="subscribe-section">
      <div id="subscibe">
        <p>
          Subscribe to get information, latest news and other <br /> interesting
          offers about Cobham
        </p>
        <div id="subscribe-group">
          <div id="subscribe-field">
            <input id="email" type="text" placeholder="Your email" />
            <button id="subscribe-btn">Subscribe</button>
          </div>
        </div>
        <img id="subImg" src={subImg} alt="" />
        <img id="subImg2" src={subImg2} alt="" />
      </div>
    </div>
  );
};

export default Subscrib;
