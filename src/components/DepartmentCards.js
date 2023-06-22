import React from "react";

function DepartmentCards({ deparmentname, image }) {
  return (
    <div className="DepartmentCards">
      <img src={image} />
      <div className="DepcardText">
        <p>{deparmentname} Department</p>
      </div>
    </div>
  );
}

export default DepartmentCards;
