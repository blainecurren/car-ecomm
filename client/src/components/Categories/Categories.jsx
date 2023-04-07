import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/818922/pexels-photo-818922.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <Link className="link" to="/products/1">
            Sale
          </Link>
        </div>
        <div className="row">r2</div>
      </div>
      <div className="col">
        <div className="row">r3</div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">r4</div>
          </div>
          <div className="col">
            <div className="row">r5</div>
          </div>
        </div>
        <div className="row">r6</div>
      </div>
    </div>
  );
};

export default Categories;
