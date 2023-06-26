import React, { useEffect } from "react";
import banner from "../Assets/banner.jpg";
function Bannercomponent({ banner, onImageLoad }) {
  useEffect(() => {
    const img = new Image();
    img.src = banner;

    img.onload = () => {
      onImageLoad(true);
    };

    return () => {
      img.onload = null;
    };
  }, [banner, onImageLoad]);

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
          <p id="wellcome">Wellcome to Ethiopian Defence University</p>
          <p>largrest learning center in africa</p>
          <button>Our Vision</button>
        </div>
      </div>
    </div>
  );
}

export default Bannercomponent;
