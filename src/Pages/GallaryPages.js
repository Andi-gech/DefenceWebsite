import React, { useEffect, useState } from "react";
import banner from "../Assets/banner.jpg";
import Facilitycard from "../components/Facilitycard";
import { useMediaQuery } from "react-responsive";
import UseCollageFech from "../hooks/UseCollageFech";
import UseFacilitiesFech from "../hooks/UseFacilities";
import { useParams } from "react-router-dom";
import Smallbanner from "./Smallbanner";
import Subheadercomponent from "../components/Subheader";
function GallaryPages() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const { Collages } = useParams();
  const { data: collages } = UseCollageFech();

  const college = collages?.find(
    (college) => college.pathname.toLowerCase() === Collages.toLowerCase()
  );
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

  return (
    <div className="GallaryPages">
      <Smallbanner
        name={college?.name}
        image={college?.bannerimage}
        onImageLoad={() => setImageLoaded(true)}
      />
      <Subheadercomponent />
      <div className="titles">
        <p>{college?.pathname} Gallary</p>
      </div>

      <div
        className="Images-container"
        style={{ width: isDesktopOrLaptop ? 900 : "100vw" }}
      >
        {data?.map((item) => {
          return (
            <div className="gallarycard">
              <Facilitycard image={item.image} />
              <p>{item.Facilityname}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GallaryPages;
