import React from "react";
import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";

function Newscardcomponent({ id, title, discription, date, image }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="Newscard">
      <img src={image} alt="News" />
      <div className="NewsText">
        <Link to={`/latest-news/${id}`} id="NewsTitle">
          {title}
        </Link>
        <p id="newsdescription">{discription}</p>
        <p id="date">
          <FaCalendar size={12} color="rgb(8, 8, 54)" /> {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default Newscardcomponent;
