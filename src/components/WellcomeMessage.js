import React from "react";
import Enginneringsvg from "../Assets/general pic.png";
function WellcomeMessage() {
  return (
    <div className="WellcomeMessage">
      <div className="Presidantpic">
        <img src={Enginneringsvg} />
        <div className="WellcomeMessagername">
          <p>LT General Kebede Regassa </p>
          <p style={{ fontWeight: "normal", fontSize: 14 }}>
            Defence University Commandant
          </p>
        </div>
      </div>

      <div className="WellcomeText">
        <p>
          Welcome to the official website of the Office of the Chief Academic
          Director of the Ethiopian Defence University's College of Engineering.
          We extend a warm welcome to all students, staff, and visitors as we
          strive to provide exceptional academic services and support. As a part
          of the university's Office of the Chief Executive Directorate, our
          office plays a pivotal role in ensuring a seamless academic
          experience. We are dedicated to upholding the university's mission and
          vision by collaborating with internal and external stakeholders to
          deliver high-quality services. At the Office of the Chief Academic
          Director, we are the primary resource for any academic inquiries or
          concerns. We meticulously plan and execute academic projects and
          programs, aligning them with the vision set forth by the Academic
          Council and Board of Governors. We diligently monitor academic
          activities to ensure compliance with established norms and policies,
          while fostering an environment that promotes the highest standards of
          teaching and learning. Regularly reviewing and updating academic
          programs is a priority for our office. We meticulously assess the
          curriculum, courses of study, and supporting infrastructure, such as
          laboratories and classrooms, to ensure their quality. By anticipating
          future requirements and preparing accurate forecasts, we aim to stay
          ahead of the ever-evolving educational landscape. Furthermore, the
          Office of the Chief Academic Director is instrumental in establishing
          and upholding Academic Rules and Regulations for the university. We
          work diligently to create a framework that fosters academic integrity,
          fairness, and accountability among students and faculty. We invite you
          to explore our website and discover the wide range of resources and
          information available to support your academic journey. Whether you
          are a prospective student, current student, or staff member, we are
          committed to providing you with the guidance and support you need to
          excel in your engineering education. Thank you for visiting the Office
          of the Chief Academic Director's website. We look forward to serving
          you and ensuring an enriching academic experience at the College of
          Engineering, Ethiopian Defence University.
        </p>
        <button>Read More</button>
      </div>
    </div>
  );
}

export default WellcomeMessage;
