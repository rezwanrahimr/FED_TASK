import React from "react";
import Main from "./Style/Main.scss";
import Img from "../../images/Traveller 1 (1).png";
import BtnImg from "../../images/rsz_11play_button-removebg-preview.png";

const Banner = () => {
  return (
    <div className="row banner">
      <div id="header-content">
        <div className="col-5 content">
          <h6>BEST DESTINATIONS AROUND THE WORLD</h6>
          <h1>
            Travel, enjoy <br></br> and live a new <br></br> and full life
          </h1>
          <p>
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div id="button-group">
            <button id="find-btn">Find out more</button>
            <div>
              <button id="ply-btn"></button>{" "}
              <p>
                <b>Play Demo</b>
              </p>
            </div>
          </div>
        </div>
        <div className="col-5 header-img">{/* <img src={Img} alt="" /> */}</div>
      </div>
    </div>
  );
};

export default Banner;
