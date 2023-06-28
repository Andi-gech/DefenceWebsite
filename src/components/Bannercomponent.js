import React from "react";
import banner from "../Assets/banner.jpg";
function Bannercomponent({ banner }) {
  return (
    <div
      className="Bannercomponent"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPositionY: -200,
      }}
    >
      <div className="Banner-darken">
        <div className="Wellcome-text">
          <p id="wellcome">Welcome to Ethiopian Defence University</p>
          <p>largrest learning center in africa</p>
          <button>Our Vision</button>
        </div>
      </div>
    </div>
  );
}

export default Bannercomponent;
