import React, { useEffect, useState } from "react";
import Subheadercomponent from "../components/Subheader";
import Smallbanner from "./Smallbanner";

import FacilityComponent from "../components/FacilityComponent";
import { useParams } from "react-router-dom";
import UseFacilitiesFech from "../hooks/UseFacilities";
import UseCollageFech from "../hooks/UseCollageFech";
import Loadingpage from "./Loadingpage";

function CollageFacility() {
  const { Collages } = useParams();
  const { data: collage } = UseCollageFech();

  const college = collage?.find((college) => college.pathname === Collages);
  const { data } = UseFacilitiesFech(college?.id);

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    if (college) {
      const img = new Image();
      img.src = college.bannerimage;
      img.onload = handleImageLoad;

      return () => {
        img.onload = null;
      };
    }
  }, [college]);

  if (data) {
    return (
      <>
        <div
          className="CollageFacility"
          style={{ display: imageLoaded ? "flex" : "none" }}
        >
          <Smallbanner
            name={college.name}
            image={college.bannerimage}
            onImageLoad={() => setImageLoaded(true)}
          />

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
        <div style={{ display: !imageLoaded ? "block" : "none" }}>
          <Loadingpage />
        </div>
      </>
    );
  } else {
    return <Loadingpage />;
  }
}

export default CollageFacility;
