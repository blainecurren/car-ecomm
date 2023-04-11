import React from "react";
import { useState } from "react";
import "./product.scss";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  ];
  
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[setSelectedImg]} alt="" />
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Product;
