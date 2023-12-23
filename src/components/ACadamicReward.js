import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import banner from "../Assets/5076404.jpg";

export default function ACadamicReward() {
  return (
    <div
      className="AcadamicReward"
     
    >
      <div className="titlesdec"><p>DU With Number</p></div>
    
      <div className="box">
        <div className="boxdetail">
          <p id="No">
            <VisibilitySensor>
              {({ isVisible }) => {
                const value = isVisible ? 45 : 0;
                return <CountUp end={value} />;
              }}
            </VisibilitySensor>
            +
          </p>

          <p id="value">Departments</p>
        </div>
        <div className="boxdetail">
          <p id="No">
            <VisibilitySensor>
              {({ isVisible }) => {
                const value = isVisible ? 3 : 0;
                return <CountUp end={value} />;
              }}
            </VisibilitySensor>
          </p>
          <p id="value">Campuses</p>
        </div>
        <div className="boxdetail">
          <p id="No">
            <VisibilitySensor>
              {({ isVisible }) => {
                const value = isVisible ? 100 : 0;
                return <CountUp end={value} />;
              }}
            </VisibilitySensor>
            k+
          </p>
          <p id="value">Community</p>
        </div>
      </div>
 
    </div>
  );
}
