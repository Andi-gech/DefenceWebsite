import React, { useEffect } from "react";
import UseCollageFech from "../hooks/UseCollageFech";
import { useParams } from "react-router-dom";
import Loadingpage from "./Loadingpage";
import UseUniversityFech from "../hooks/UseUniversity";
import { useMediaQuery } from "react-responsive";

function Aboutpages() {
  const { data, isLoading, isError } = UseUniversityFech();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (data) {
    return (
      <div className="Aboutpages">
        <div className="AboutContainer">
          <h1>ABOUT US</h1>
          <p
            style={{ width: isDesktopOrLaptop ? 800 : "95vw" }}
            dangerouslySetInnerHTML={{ __html: data[0]?.about }}
          ></p>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <Loadingpage />;
  }
}

export default Aboutpages;
