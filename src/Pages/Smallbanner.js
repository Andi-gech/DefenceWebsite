import React, { useEffect } from "react";

function Smallbanner({ name, image, onImageLoad }) {
  useEffect(() => {
    const img = new Image();
    img.src = image;

    img.onload = () => {
      onImageLoad(true);
    };

    return () => {
      img.onload = null;
    };
  }, [image, onImageLoad]);

  return (
    <div
      className="Smallbanner"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="smallBanner-darken">
        <p>
          <span style={{ fontWeight: "bold", fontSize: 40, color: "orange" }}>
            EDU{" "}
          </span>
          {name}
        </p>
      </div>
    </div>
  );
}

export default Smallbanner;
