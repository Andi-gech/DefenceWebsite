import React, { useState } from "react";

function CommunityCard({ name, des, banner }) {
  return (
    <div
      className="CommunityCard"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
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
