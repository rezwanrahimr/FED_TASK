import React from "react";
import Main from "./style/Main.scss";
import serviceLogo1 from "../../images/Group 48.png";
import serviceLogo2 from "../../images/Group 49.png";
import serviceLogo3 from "../../images/image 25.png";
import serviceLogo4 from "../../images/Group 51.png";
import serviceLogo5 from "../../images/Rectangle 159.png";
import serviceLogo6 from "../../images/Rectangle 157.png";

const Services = () => {
  return (
    <div id="services">
      <h6>CATEGORY</h6>
      <h3>We Offer Best Services</h3>
      <div id="card-group">
        <div className="service-card">
          <div id="img-div">
            <img src={serviceLogo1} alt="Avatar" />
          </div>
          <div class="container">
            <h4>Calculated Weather </h4>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>
        <div className="service-card card-2">
          <div id="img-div">
            <img src={serviceLogo4} alt="Avatar" />
          </div>
          <div class="container">
            <h4>Calculated Weather </h4>
            <p>Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div id="card-2D">
            <img src={serviceLogo6} alt="" />
          </div>
        </div>
        <div className="service-card">
          <div id="img-div">
            <img src={serviceLogo3} alt="Avatar" />
          </div>
          <div class="container">
            <h4>Local Events </h4>
            <p>
              Barton vanity itself do in it. Preferd to men it engrossed
              listening.{" "}
            </p>
          </div>
          <div id="logo3">
            <img src={serviceLogo5} alt="" />
          </div>
        </div>
        <div className="service-card">
          <div id="img-div">
            <img src={serviceLogo2} alt="Avatar" />
          </div>
          <div class="container">
            <h4>Customization </h4>
            <p>We deliver outsourcedaviation services formilitary customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
