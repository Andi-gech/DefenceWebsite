import React from "react";
import newssvg from "../Assets/photo_2023-06-16_22-33-56.jpg";
import { FaCalendar, FaCalendarWeek } from "react-icons/fa";
import { Link } from "react-router-dom";
function Newscardcomponent({ id, title, discription, date }) {
  return (
    <div className="Newscard">
      <img src={newssvg} />
      <div className="NewsText">
        <Link to={`/latest-news/${id}`} id="NewsTitle">
          {title}
        </Link>

        <p id="newsdescription">{discription}</p>
        <p id="date">
          {" "}
          <FaCalendar size={12} color="rgb(8, 8, 54)" /> {date}
        </p>
      </div>
    </div>
  );
}

export default Newscardcomponent;
