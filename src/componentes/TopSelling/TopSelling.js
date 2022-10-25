import React from "react";
import Main from "./style/Main.scss";
import img1 from "../../images/Rectangle 14.png";
import img2 from "../../images/Rectangle 14 (1).jpg";
import img3 from "../../images/Rectangle 14 (2).jpg";
import img4 from "../../images/Decore2.png";

const TopSelling = () => {
  return (
    <div id="selling">
      <h6>Top Selling</h6>
      <h3>Top Destinations</h3>

      <div className="card-group">
        <div class="card">
          <img src={img1} alt="Avatar" />
          <div class="container">
            <div className="top">
              <div>
                <small id="rome">Rome,Italty </small>
              </div>
              <div>
                <small id="value"> $5.42k</small>
              </div>
            </div>
            <p>10 Days Trip</p>
          </div>
        </div>
        <div class="card">
          <img src={img2} alt="Avatar" />
          <div class="container">
            <div className="top">
              <div>
                <small id="rome">London,UK</small>
              </div>
              <div>
                <small id="value">$4.2k</small>
              </div>
            </div>
            <p>12 Days Trip</p>
          </div>
        </div>
        <div class="card">
          <img src={img3} alt="Avatar" />
          <div class="container">
            <div className="top">
              <div>
                <small id="rome">Full Europe </small>
              </div>
              <div>
                <small id="value"> $15k</small>
              </div>
            </div>
            <p>28 Days Trip</p>
          </div>
          <div id="imgg">
            <img src={img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSelling;
