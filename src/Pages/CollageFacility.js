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
import UseFacilitiesFech from "../hooks/UseFacilities";
import UseCollageFech from "../hooks/UseCollageFech";

function CollageFacility() {
  const { Collages } = useParams();
  const { data: collage } = UseCollageFech();

  const college = collage?.find((college) => college.pathname === Collages);
  const { data, isError, error, isLoading, refech } = UseFacilitiesFech(
    college.id
  );
  if (data) {
    return (
      <div className="CollageFacility">
        <Smallbanner name={college.name} image={college.bannerimage} />

        <Subheadercomponent />
        {data.map((Facility) => {
          return (
            <FacilityComponent
              name={Facility.Facilityname}
              Bigbanner={Facility.image}
              detail={Facility.Facilities_detail}
            />
          );
        })}
      </div>
    );
  }
}

export default CollageFacility;
