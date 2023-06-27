import React, { useEffect, useState } from "react";

function CalanderdateCoponents({ day, year, month, data }) {
  const [events, setEvents] = useState([]);
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  useEffect(() => {
    checkEvents(year, month, day);
  });

  const isToday =
    day === currentDay && month === currentMonth + 1 && year === currentYear;

  const checkEvents = () => {
    const filteredEvents = data?.filter((event) => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getFullYear() === year &&
        eventDate.getMonth() === month - 1 &&
        eventDate.getDate() === day
      );
    });
    setEvents(filteredEvents);
  };
  if (events) {
    return (
      <div
        className="CalanderdateCoponents"
        style={{
          backgroundColor: isToday
            ? "orange"
            : events?.length > 0
            ? "yellow"
            : "white",
        }}
      >
        <div className="day">
          <p>{day}</p>
        </div>
        {events?.length > 0 && (
          <div className="dayevent">
            {events?.map((event) => (
              <p key={event.id}>{event.Title}</p>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CalanderdateCoponents;
