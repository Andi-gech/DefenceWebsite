import React, { useEffect } from "react";

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
          <p id="wellcome">Welcome to Ethiopian Defence University</p>
          <p>largest learning center in Africa</p>
          <button>Our Vision</button>
        </div>
      </div>
    </div>
  );
}

export default Bannercomponent;
