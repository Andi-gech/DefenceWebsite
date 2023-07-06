import React from "react";
import { Link } from "react-router-dom";

function DepartmentCards({ deparmentname, image, id, collage }) {
  return (
    <Link to={`department/${id}`} target="_blank" className="DepartmentCards">
      <div>
        <img src={image} />
      </div>
      <div className="DepcardText">
        <p>{deparmentname} Department</p>
      </div>
    </Link>
  );
}

export default DepartmentCards;
