import React from "react";
import QuestionsCard from "../components/Questionscard";

function Admissionpage() {
  return (
    <div className="Admissionpage">
      <div className="titles">
        <p>Admmisson</p>
      </div>
      <div className="Admissionpagetext">
        Each semester existing students are required to register for classes for
        the next semester. The registration is held in the respective college
        office of students’ Affairs. To register for classes, students should
        collect three copies of registration slips from the respective
        department and complete the required information and get them signed by
        the head of the department/school and submit one copy of the slip to the
        respective college office of students’ Affairs and one copy to the
        University office of the registrar. You can now apply to Jimma Universty
        Registrar office at the following programs based on the minimum
        requirements of each departments.
      </div>
      <QuestionsCard />
      <QuestionsCard />
      <QuestionsCard />
      <QuestionsCard />
    </div>
  );
}

export default Admissionpage;
