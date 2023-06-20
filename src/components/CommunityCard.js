import React, { useState } from "react";

function CommunityCard({ name, des, banner }) {
  return (
    <div className="CommunityCard">
      <div className="leftcommunitycard">
        <img src={banner} />
      </div>
      <div className="Rightcommunitycard">
        <div className="textwidth">
          <h2>{name}</h2>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityCard;
