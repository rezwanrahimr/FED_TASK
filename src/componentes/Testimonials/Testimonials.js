import React from "react";
import Main from "./style/Main.scss";
import image from "../../images/Image.png";

const Testimonials = () => {
  return (
    <div id="testimonial">
      <div className="col-5 text-content">
        <h6>TESTIMONIALS</h6>
        <h1>
          What People Say <br />
          about Us.
        </h1>
        <div id="dot">
          <div id="dot1"></div>
          <div id="dot2"></div>
          <div id="dot3"></div>
        </div>
      </div>
      <div className="col-5" id="exam">
        <div id="review">
          <p>
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <h6>Mike taylor</h6>
          <br />
          <span>Lahore, Pakistan</span>
          <img id="image" src={image} alt="" />
          <div id="review1">
            <h6>Chris Thomas</h6>
            <br />
            <span>CEO of Red Button</span>
          </div>
          <div id="arrow">
            <div>
              <i class="fa-solid fa-angle-up"></i>
            </div>
            <div>
              <i class="fa-solid fa-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
