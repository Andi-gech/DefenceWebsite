import React, { useState } from "react";
import CalanderdateCoponents from "./CalanderdateCoponents";
import UseEventFech from "../hooks/UseEventfecg";

function Calander() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const { data } = UseEventFech();

  const getDaysInMonth = (year, month) => {
    const date = new Date(year, month + 1, 0);
    return date.getDate();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const daysArray = Array.from(
    { length: daysInMonth },
    (_, index) => index + 1
  );

  const getPreviousMonth = () => {
    const previousMonth = (month - 1 + 13) % 13;
    setMonth(previousMonth === 0 ? month : previousMonth);
  };

  const getNextMonth = () => {
    const nextMonth = (month + 1 + 13) % 13;
    setMonth(nextMonth === 0 ? month : nextMonth);
  };

  return (
    <div className="Calander">
      <div className="titles">
        <p>Academic Calendar of Defence</p>
      </div>
      <div className="year">
        <button onClick={() => setYear(year - 1)}>-</button>
        <p>{year}</p>
        <button onClick={() => setYear(year + 1)}>+</button>
      </div>
      <div className="year">
        <button onClick={getPreviousMonth}>-</button>
        <p>{month}</p>
        <button onClick={getNextMonth}>+</button>
      </div>

      <div className="datelist">
        {daysArray?.map((day) => (
          <CalanderdateCoponents
            key={day}
            year={year}
            month={month}
            day={day}
            data={data}
          />
        ))}
      </div>
    </div>
  );
}

export default Calander;
