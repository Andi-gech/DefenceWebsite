import React, { useEffect } from "react";
import UseCollageFech from "../hooks/UseCollageFech";
import { useParams } from "react-router-dom";
import Loadingpage from "./Loadingpage";
import UseUniversityFech from "../hooks/UseUniversity";

function Aboutpages() {
  const { data, isLoading, isError } = UseUniversityFech();
  if (data) {
    return (
      <div className="Aboutpages">
        <div className="AboutContainer">
          <h1>ABOUT US</h1>
          <p>{data[0]?.about}</p>
        </div>
      </div>
    );
  }
  if (isLoading) {
    return <Loadingpage />;
  }
}

export default Aboutpages;
