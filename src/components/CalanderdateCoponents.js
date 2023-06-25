import React, { useEffect, useState } from "react";

function CalanderdateCoponents({ day, year, month }) {
  const [event, setevent] = useState({});
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  useEffect(() => {
    checkevent(year, month, day);
  }, [year, month, day]);
  const isToday =
    day === currentDay && month === currentMonth + 1 && year === currentYear;
  console.log(currentMonth);
  const eventData = [
    {
      id: 1,
      title: "Meeting",
      date: new Date(2023, 6, 15),
      description: "Team meeting at 2:00 PM",
    },
    {
      id: 2,
      title: "Registration",
      date: new Date(2023, 5, 20),
      description: "John's birthday party at 7:00 PM",
    },
    // Add more event objects as needed
  ];
  const checkevent = () => {
    const events = eventData.filter(
      (event) =>
        event.date.getDate() === day &&
        event.date.getMonth() === month &&
        event.date.getFullYear() === year
    );
    setevent(events);
  };

  return (
    <div
      className="CalanderdateCoponents"
      style={{
        backgroundColor: isToday
          ? "orange"
          : event.length > 0
          ? "yellow"
          : "white",
      }}
    >
      <p>{day}</p>
      {event?.length > 0 && (
        <>
          {event.map((eventd) => (
            <p>{eventd.title}</p>
          ))}
        </>
      )}
    </div>
  );
}

export default CalanderdateCoponents;
