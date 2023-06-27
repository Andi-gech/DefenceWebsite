import React, { useEffect, useState } from "react";
import UseNewsfech from "../hooks/UseNewsfetch";
import UseEventFech from "../hooks/UseEventfecg";

function CalanderdateCoponents({ day, year, month, data }) {
  const [event, setevent] = useState({});
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  useEffect(() => {
    checkevent(year, month, day);
  }, [year, month, day, data]);
  const isToday =
    day === currentDay && month === currentMonth + 1 && year === currentYear;

  const checkevent = () => {
    const events = data?.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month - 1 && // Month is zero-based (0-11)
        eventDate.getDate() === day
      );
    });
    setevent(events);
  };
  console.log(data);

  return (
    <div
      className="CalanderdateCoponents"
      style={{
        backgroundColor: isToday
          ? "orange"
          : event?.length > 0
          ? "yellow"
          : "white",
      }}
    >
      <div className="day">
        <p>{day}</p>
      </div>
      {event?.length > 0 && (
        <div className="dayevent">
          {event?.map((eventd) => (
            <p>{eventd.Title}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default CalanderdateCoponents;
