import React from "react";
import banner from "../Assets/banner.jpg";
function Smallcard() {
  return (
    <div
      className="smallcard"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default Smallcard;
