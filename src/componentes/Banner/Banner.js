import React from "react";
import Main from "./Style/Main.scss";
import Img from "../../images/Traveller 1 (1).png";
import BtnImg from "../../images/rsz_11play_button-removebg-preview.png";
import textImg from "../../images/Decoredf.png";
import groundImg from "../../images/Group.png";
import groundImg1 from "../../images/plane.png";
import groundImg2 from "../../images/Ellipse 8.png";

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
            <div id="play-btn">
              <div className="circle">
                <p className="triangle-left"></p>
              </div>
              <div></div>
            </div>
          </div>
          <div id="text-img">
            <img src={textImg} alt="" />
          </div>
        </div>
        <div className="col-5 header-img">
          <img id="girlImg" src={Img} alt="" />
        </div>
      </div>

      <div id="groupImg">
        <img src={groundImg} alt="" />
      </div>
      <div id="groupImg1">
        <img src={groundImg1} alt="" />
      </div>
      <div id="groupImg2">
        <img src={groundImg2} alt="" />
      </div>
    </div>
  );
};

export default Banner;
