import React from "react";
import Main from "./style/Main.scss";
import serviceLogo1 from "../../images/Group 48.png";

const Services = () => {
  return (
    <div>
      <h6>CATEGORY</h6>
      <h3>We Offer Best Services</h3>
      <div>
        <div className="service-card">
          <div id="img-div">
            <img src={serviceLogo1} alt="Avatar" />
          </div>
          <div class="container">
            <h4>Calculated Weather </h4>
            <p>Built Wicket longer admire do barton vanity itself do in it.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
