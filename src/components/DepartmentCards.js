import React from "react";

function DepartmentCards({ deparmentname, image }) {
  return (
    <div className="DepartmentCards">
      <div>
        <img src={image} />
      </div>
      <div className="DepcardText">
        <p>{deparmentname} Department</p>
      </div>
    </div>
  );
}

export default DepartmentCards;
