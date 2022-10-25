import React from "react";
import Main from "./style/Main.scss";
import img1 from "../../images/image 31.png";
import img2 from "../../images/image 28.png";
import img3 from "../../images/image 29.png";
import img4 from "../../images/image 27.png";
import img5 from "../../images/image 30.png";

const SuppotedBy = () => {
  return (
    <div id="suppotedLogo">
      <img src={img4} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img5} alt="" />
      <img src={img1} alt="" />
    </div>
  );
};

export default SuppotedBy;
