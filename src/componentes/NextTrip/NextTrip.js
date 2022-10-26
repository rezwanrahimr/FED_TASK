import React from "react";
import Main from "./style/Main.scss";
import chooseImg from "../../images/Group 7.png";
import reach from "../../images/Group 11.png";
import payment from "../../images/Group 12.png";
import tripImg from "../../images/Rectangle 17.png";
import logo1 from "../../images/LEAF.png";
import logo2 from "../../images/map icon.png";
import logo3 from "../../images/send.png";
import logo4 from "../../images/building 1.png";
import logo5 from "../../images/heart (6) 1.png";
import logo6 from "../../images/Ellipse 7.png";

const NextTrip = () => {
  return (
    <div id="trip">
      <div id="trip-content" className="col-5">
        <h6>Easy and Fast</h6>
        <h1>
          Book Your Next Trip <br />
          in 3 easy steps{" "}
        </h1>
        <div>
          <div className="choose">
            <div>
              <img src={chooseImg} alt="" />
            </div>
            <div>
              <h3>Choose </h3>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
          <div className="choose">
            <div>
              <img src={payment} alt="" />
            </div>
            <div>
              <h3>Make Payment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
          <div className="choose">
            <div>
              <img src={reach} alt="" />
            </div>
            <div>
              <h3>Reach Airport on Selected Date</h3>
              <p>Lorem ipsum dolor sit amet, consectetur </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-5">
        <div id="TripToGreece">
          <img src={tripImg} alt="Avatar" />
          <div class="container">
            <h3>Trip To Greece</h3>
            <div id="date">
              <div>
                <p>14-29 </p>
              </div>
              <div id="robbin">
                <p>| by Robbin </p>
              </div>
            </div>
            <div id="logo-group">
              <img src={logo1} alt="" />
              <img src={logo2} alt="" />
              <img src={logo3} alt="" />
            </div>
            <div id="people">
              <div className="col-2">
                <img src={logo4} alt="" />
              </div>
              <div className="col-8">
                <p>24 people</p>
              </div>
              <div>
                <img src={logo5} alt="" />
              </div>
            </div>
          </div>
          <div id="ongoin">
            <div className="col-4">
              <img src={logo6} alt="" />
            </div>
            <div className="col-6 text-contant">
              <h6>Ongoin</h6>
              <h4>Trip to </h4>
              <p>40%</p>
              <h5>
                <span id="spann"></span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextTrip;
