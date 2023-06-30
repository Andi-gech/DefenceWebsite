import React, { useEffect } from "react";
import underConstruction from "../Assets/undraw_under_construction_-46-pa.svg";
import { Link } from "react-router-dom";

function Pagesunderconstraction() {
  return (
    <div className="Pagesunderconstraction">
      <div className="NoFoundPageimage">
        <img src={underConstruction} alt="not found" />
      </div>
      <div className="NoFoundPageText">This Pages Under Construction</div>
      <div>
        <Link to={"home"}>Back to Home</Link>
      </div>
    </div>
  );
}

export default Pagesunderconstraction;
