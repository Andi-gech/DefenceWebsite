import React from "react";

import { Link, useParams } from "react-router-dom";
function Subheadercomponent() {
  const { Collages } = useParams();

  return (
    <div className="Subheadercomponent">
      <ul>
        <li>
          <Link to={`/${Collages}/`}>Home-DE</Link>
        </li>
        <li>
          <Link to={`/${Collages}/facilities`}>Facilities</Link>
        </li>
        <li>
          <Link to={`/${Collages}/Adminstration`}>Adminstration</Link>
        </li>
        <li>Gallary</li>
        <li>Rules And regualation</li>
      </ul>
    </div>
  );
}

export default Subheadercomponent;
