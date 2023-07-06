import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function CommunityCard({ name, des, banner, onclick, onnext }) {
  return (
    <div
      className="CommunityCard"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundPositionY: 0,
      }}
    >
      <div className="Rightcommunitycard">
        <FaArrowCircleLeft onClick={onclick} size={30} color="gray" />
        <div className="textwidth">
          <h2>{name}</h2>
          <p>{des}</p>
        </div>
        <FaArrowCircleRight onClick={onnext} size={30} color="gray" />
      </div>
    </div>
  );
}

export default CommunityCard;
