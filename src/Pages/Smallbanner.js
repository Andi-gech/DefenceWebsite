import React from "react";
import banner from "../Assets/rm373batch13-085.jpg";
function Smallbanner({ name }) {
  return (
    <div
      className="Smallbanner"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPositionY: -20,
      }}
    >
      <div className="smallBanner-darken">
        <p>
          <span style={{ fontWeight: "bold", fontSize: 40, color: "orange" }}>
            DU{" "}
          </span>
          {name}
        </p>
      </div>
    </div>
  );
}

export default Smallbanner;
