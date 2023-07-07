import React from "react";
import { FaCalendarDay, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

function AnnouncmentCard({ title, location, date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  return (
    <Link
      to={"/AcadamicCalander"}
      className="cardelements"
      style={{ paddingInline: 25 }}
    >
      <FaCalendarDay size={19} color="gray" />
      <div className="texteventname">
        <p>{title}</p>
        <p id="location">
          <span>
            <FaMapMarker size={10} color="red" />
            {location}
          </span>
          <span>{formattedDate}</span>
        </p>
      </div>
    </Link>
  );
}

export default AnnouncmentCard;
