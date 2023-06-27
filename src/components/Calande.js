import React, { useState } from "react";
import CalanderdateCoponents from "./CalanderdateCoponents";
import UseEventFech from "../hooks/UseEventfecg";
import UseNewsfech from "../hooks/UseNewsfetch";

function Calander() {
  const [year, setyear] = useState(new Date().getFullYear());
  const [month, setmonth] = useState(new Date().getMonth() + 1);
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
  console.log(month);
  console.log(daysArray);
  const getMonth = () => {
    const date = (month - 1 + 13) % 13;
    if (date === 0) {
      setmonth(month);
    } else {
      setmonth(date);
    }
  };
  const incresemonth = () => {
    const date = (month + 1 + 13) % 13;
    if (date === 0) {
      setmonth(month);
    } else {
      setmonth(date);
    }
  };
  return (
    <div className="Calander">
      <div className="titles">
        <p>Acadamic Calander of defence</p>
      </div>
      <div className="year">
        <button
          onClick={() => {
            setyear(year - 1);
          }}
        >
          -
        </button>
        <p>{year}</p>
        <button
          onClick={() => {
            setyear(year + 1);
          }}
        >
          +
        </button>
      </div>
      <div className="year">
        <button
          onClick={() => {
            getMonth();
          }}
        >
          -
        </button>
        <p>{month}</p>
        <button
          onClick={() => {
            incresemonth();
          }}
        >
          +
        </button>
      </div>

      <div className="datelist">
        {daysArray.map((day) => {
          return (
            <CalanderdateCoponents
              year={year}
              month={month}
              day={day}
              data={data}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Calander;
