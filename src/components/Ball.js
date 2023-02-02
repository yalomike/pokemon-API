import React from "react";
import pic from "../images/pokeball final.png";
import headerPic from "../images/PngItem_24215.png";
import { Link } from "react-router-dom";

export function Ball() {
  return (
    <>
      <div className="main-title pt-3">
        <img src={headerPic} alt="Pokemon" />
      </div>
      <div className="text-white pt-1">
        <Link to="/home">
          <img className="pokeball-img w-25 pt-1" src={pic} alt="" />
        </Link>
      </div>
    </>
  );
}
