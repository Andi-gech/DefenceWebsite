import React from "react";
import Subheadercomponent from "../components/Subheader";
import Smallbanner from "./Smallbanner";
import CommunityCard from "../components/CommunityCard";
import banner from "../Assets/OIP.jpg";
import banner2 from "../Assets/labratory.jpg";
import banner3 from "../Assets/cafe.jpg";
import banner4 from "../Assets/run.jpg";
import FacilityComponent from "../components/FacilityComponent";
import { useParams } from "react-router-dom";

function CollageFacility() {
  const { Collages } = useParams();
  return (
    <div className="CollageFacility">
      <Smallbanner name={Collages} />

      <Subheadercomponent />

      <FacilityComponent name={"Library"} Bigbanner={banner} />
      <FacilityComponent name={"Labratories"} Bigbanner={banner2} />
      <FacilityComponent name={"Cafteria"} Bigbanner={banner3} />
      <FacilityComponent
        name={"Recreation and Excersice fields"}
        Bigbanner={banner4}
      />
    </div>
  );
}

export default CollageFacility;
