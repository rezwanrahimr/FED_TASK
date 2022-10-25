import React from "react";
import Main from "./style/Main.scss";
import subImg from "../../images/Group 77.png";

const Subscrib = () => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default Subscrib;
