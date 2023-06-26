import React from "react";
import b1 from "../Assets/rm373batch13-085.jpg";
import b2 from "../Assets/26363.jpg";
import b3 from "../Assets/OMHWPG0.jpg";
function Smallbanner({ name, image }) {
  const collages = [
    {
      id: 1,
      name: "Enginnering",
      description: "defence unversity community discription 1",
      images: b1,
    },
    {
      id: 2,
      name: "Health",
      description: "Defence University community discription 2",
      images: b2,
    },
    {
      id: 3,
      name: "Resource",
      description: "This is the description for Card 3.",
      images: b3,
    },
  ];
  return (
    <div
      className="Smallbanner"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPositionY: -200,
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
