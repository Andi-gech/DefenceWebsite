import React from "react";
import banner from "../Assets/banner.jpg";
import Facilitycard from "../components/Facilitycard";
import { useMediaQuery } from "react-responsive";
import UseCollageFech from "../hooks/UseCollageFech";
import UseFacilitiesFech from "../hooks/UseFacilities";
import { useParams } from "react-router-dom";
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

  return (
    <div className="GallaryPages">
      <p>Dec GAllary</p>
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
