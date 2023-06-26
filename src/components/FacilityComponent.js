import React from "react";
import Facilitycard from "../components/Facilitycard";
import Smallcard from "./Smallcard";

function FacilityComponent({ name, Bigbanner, detail }) {
  return (
    <div className="FacilityComponent">
      <div className="titles">
        <p>{name}</p>
      </div>
      <div className="inlinecardfacility">
        <p>{detail}</p>
        <div className="Facilitycardlist">
          <Facilitycard image={Bigbanner} />
          <div className="inline-smallcard">
            <Smallcard />
            <Smallcard />
            <Smallcard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacilityComponent;
