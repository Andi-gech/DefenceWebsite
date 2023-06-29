import { useState } from "react";

import { FaAngleDown } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
function QuestionsCard({ name, describtion }) {
  const [visible, setvisible] = useState(false);

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="Questioncard" onClick={() => setvisible(!visible)}>
      <div
        className="listCard"
        style={{
          width: isDesktopOrLaptop ? 900 : "100vw",
        }}
      >
        <p>What to Do If You Have ADD and DRop</p>
        <FaAngleDown />
      </div>
      <div
        className="hiddentext"
        style={{
          display: visible ? "block" : "none",
          width: isDesktopOrLaptop ? 900 : "100vw",
        }}
      >
        <p>
          Each semester existing students are required to register for classes
          for the next semester. The registration is held in the respective
          college office of students’ Affairs. To register for classes, students
          should collect three copies of registration slips from the respective
          department and complete the required information and get them signed
          by the head of the department/school and submit one copy of the slip
          to the respective college office of students’ Affairs and one copy to
          the University office of the registrar. You can now apply to Jimma
          Universty Registrar office at the following programs based on the
          minimum requirements of each departments.
        </p>
      </div>
    </div>
  );
}

export default QuestionsCard;
