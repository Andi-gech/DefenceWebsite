import React from "react";
import { FaCalendarDay, FaMapMarker } from "react-icons/fa";

function AnnouncmentCard() {
  return (
    <div className="cardelements" style={{ paddingInline: 55 }}>
      <FaCalendarDay size={19} color="green" />
      <div className="texteventname">
        <p>Staff Meeting</p>
        <p id="location">
          <span>
            <FaMapMarker size={10} /> Admin
          </span>
          <span>Jan-23-2014</span>
        </p>
      </div>
    </div>
  );
}

export default AnnouncmentCard;
