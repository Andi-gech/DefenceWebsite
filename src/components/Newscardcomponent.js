import React from "react";
import newssvg from "../Assets/photo_2023-06-16_22-33-56.jpg";
import { FaCalendar, FaCalendarWeek } from "react-icons/fa";
import { Link } from "react-router-dom";
function Newscardcomponent({ id, title, discription, date, image }) {
  const dates = new Date(date);

  const year = dates.getFullYear();
  const month = dates.getMonth() + 1; // Month is zero-based (0-11)
  const day = dates.getDate();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const seconds = dates.getSeconds();

  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  console.log("Date:", formattedDate);
  console.log("Time:", formattedTime);

  return (
    <div className="Newscard">
      <img src={image} />
      <div className="NewsText">
        <Link to={`/latest-news/${id}`} id="NewsTitle">
          {title}
        </Link>

        <p id="newsdescription">{discription}</p>
        <p id="date">
          {" "}
          <FaCalendar size={12} color="rgb(8, 8, 54)" /> {`${formattedDate} `}
        </p>
      </div>
    </div>
  );
}

export default Newscardcomponent;
