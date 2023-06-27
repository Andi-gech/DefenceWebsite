import React, { useEffect } from "react";
import Calander from "../components/Calande";

function Calanderpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Calanderpage">
      <Calander />
    </div>
  );
}

export default Calanderpage;
