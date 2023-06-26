import React from "react";
import { FaCalendarDay, FaMapMarker } from "react-icons/fa";

function AnnouncmentCard({ title, location, date }) {
  return (
    <div className="cardelements" style={{ paddingInline: 55 }}>
      <FaCalendarDay size={19} color="green" />
      <div className="texteventname">
        <p>{title}</p>
        <p id="location">
          <span>
            <FaMapMarker size={10} />
            {location}
          </span>
          <span>{date}</span>
        </p>
      </div>
    </div>
  );
}

export default AnnouncmentCard;
