import React from "react";

function WellcomeMessage({ Leadername, message, image }) {
  return (
    <div className="WellcomeMessage">
      <div className="Presidantpic">
        <img src={image} alt="presidantpic" />
        <div className="WellcomeMessagername">
          <p>{Leadername.toUpperCase()} </p>
          <p style={{ fontWeight: "bold",fontFamily: "'Alike Angular', serif", fontSize: 14 }}>
            Defence University Commandant
          </p>
        </div>
      </div>

      <div className="WellcomeText">
        <p id="Message">{message}</p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default WellcomeMessage;
