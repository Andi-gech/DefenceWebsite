import React from "react";
import { useMediaQuery } from "react-responsive";

import { Link, useParams } from "react-router-dom";
function Subheadercomponent() {
  const { Collages } = useParams();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className="Subheadercomponent"
      style={{ overflowX: isTabletOrMobile ? "scroll" : "hidden" }}
    >
      <ul>
        <li>
          <Link to={`/${Collages}/`}>Home-DE</Link>
        </li>
        <li>
          <Link to={`/${Collages}/facilities`}>Facilities</Link>
        </li>
        <li>
          <Link to={`/${Collages}/Adminstration/Academic Office`}>
            Adminstration
          </Link>
        </li>
        <li>
          {" "}
          <Link to={`/${Collages}/Gallary`}> Gallary</Link>
        </li>
        <li>
          <Link to={`/${Collages}/RuleAndRegulation`}>
            Rules And regualation
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Subheadercomponent;
