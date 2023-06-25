import React from "react";

function Facilitycard({ image }) {
  return (
    <div
      className="Facilitycard"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default Facilitycard;
