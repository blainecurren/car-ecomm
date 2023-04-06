import React from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlinedIcon";
import WestOutLinedIcon from "@mui/icons-material/WestOutlinedIcon";
import './slider.scss';
const Slider = () => {
  const data = [];

  return (
    <div className="slider">
      <div className="container">
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon">
          <WestOutlinedIcon />
        </div>
        <div className="icon">
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
