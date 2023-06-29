import React, { useEffect } from "react";
import notfound from "../Assets/Errorpage.svg";

function Erorrpage() {
  return (
    <div className="Erorrpage">
      <div className="Erorrpageimage">
        <img src={notfound} alt="not found" />
      </div>
      <div className="ErorrpageText">
        Sorry The Server is Down for Maintenance
      </div>
    </div>
  );
}

export default Erorrpage;
