import React from "react";
import notfound from "../Assets/pagenotfound.svg";
import { Link } from "react-router-dom";
function NoFoundPage() {
  return (
    <div className="NoFoundPage">
      <div className="NoFoundPageimage">
        <img src={notfound} alt="not found" />
      </div>
      <div className="NoFoundPageText">Looks Like Your page NotFound</div>
      <div>
        <Link to={""}>Back to Home</Link>
      </div>
    </div>
  );
}

export default NoFoundPage;
