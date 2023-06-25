import React from "react";
import banner from "../Assets/defenceLogo.png";
function PartnerComponent() {
  return (
    <div
      className="PartnerComponent"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPositionY: -200,
      }}
    ></div>
  );
}

export default PartnerComponent;
