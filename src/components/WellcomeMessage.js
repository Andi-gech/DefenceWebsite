import React from "react";
import Enginneringsvg from "../Assets/general pic.png";
function WellcomeMessage({ Leadername, message, image }) {
  return (
    <div className="WellcomeMessage">
      <div className="Presidantpic">
        <img src={image} />
        <div className="WellcomeMessagername">
          <p>{Leadername} </p>
          <p style={{ fontWeight: "normal", fontSize: 14 }}>
            Defence University Commandant
          </p>
        </div>
      </div>

      <div className="WellcomeText">
        <p>{message}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default WellcomeMessage;
