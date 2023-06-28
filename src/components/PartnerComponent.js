import React from "react";

function PartnerComponent({ image }) {
  return (
    <div
      className="PartnerComponent"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default PartnerComponent;
