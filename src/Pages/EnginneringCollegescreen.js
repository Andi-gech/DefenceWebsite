import React from "react";
import Subheadercomponent from "../components/Subheader";
import Bannercomponent from "../components/Bannercomponent";
import Smallbanner from "./Smallbanner";
import DepartmentCards from "../components/DepartmentCards";
import Enginneringsvg from "../Assets/Wavy_Tech-14_Single-04.jpg";
import Enginneringsvg1 from "../Assets/5096384.jpg";

import Enginneringsvg2 from "../Assets/4002785.jpg";
import Enginneringsvg3 from "../Assets/4266773.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function EnginneringCollegescreen() {
  return (
    <div className="EnginneringCollegescreen">
      <Smallbanner name={"Collage of Enginnering"} />
      <Subheadercomponent />
      <div className="ECpageBody">
        <div className="ECLeftBody">
          <div className="title">
            <p>Wellcome Message</p>
          </div>
          <div className="EcLeftbottom">
            <p>
              Welcome to the official website of the Office of the Chief
              Academic Director of the Ethiopian Defence University's College of
              Engineering. We extend a warm welcome to all students, staff, and
              visitors as we strive to provide exceptional academic services and
              support. As a part of the university's Office of the Chief
              Executive Directorate, our office plays a pivotal role in ensuring
              a seamless academic experience. We are dedicated to upholding the
              university's mission and vision by collaborating with internal and
              external stakeholders to deliver high-quality services. At the
              Office of the Chief Academic Director, we are the primary resource
              for any academic inquiries or concerns. We meticulously plan and
              execute academic projects and programs, aligning them with the
              vision set forth by the Academic Council and Board of Governors.
              We diligently monitor academic activities to ensure compliance
              with established norms and policies, while fostering an
              environment that promotes the highest standards of teaching and
              learning. Regularly reviewing and updating academic programs is a
              priority for our office. We meticulously assess the curriculum,
              courses of study, and supporting infrastructure, such as
              laboratories and classrooms, to ensure their quality. By
              anticipating future requirements and preparing accurate forecasts,
              we aim to stay ahead of the ever-evolving educational landscape.
              Furthermore, the Office of the Chief Academic Director is
              instrumental in establishing and upholding Academic Rules and
              Regulations for the university. We work diligently to create a
              framework that fosters academic integrity, fairness, and
              accountability among students and faculty. We invite you to
              explore our website and discover the wide range of resources and
              information available to support your academic journey. Whether
              you are a prospective student, current student, or staff member,
              we are committed to providing you with the guidance and support
              you need to excel in your engineering education. Thank you for
              visiting the Office of the Chief Academic Director's website. We
              look forward to serving you and ensuring an enriching academic
              experience at the College of Engineering, Ethiopian Defence
              University.
            </p>
          </div>
          <div>
            <p>Departments</p>
          </div>
          <div className="DepartmentCardList">
            <div className="pervious">
              <FaAngleLeft />
            </div>
            <div className="depCardListslideshow">
              <div>
                <DepartmentCards
                  deparmentname={"Computer Science and Enginnering"}
                  image={Enginneringsvg2}
                />
              </div>
              <div>
                <DepartmentCards
                  deparmentname={"Motor Vehicle"}
                  image={Enginneringsvg}
                />
              </div>
              <div>
                <DepartmentCards
                  deparmentname={"Civil Enginnering"}
                  image={Enginneringsvg1}
                />
              </div>
              <div>
                <DepartmentCards
                  deparmentname={"Auronatical Department"}
                  image={Enginneringsvg3}
                />
              </div>
              <div>
                <DepartmentCards deparmentname={"Electrical Power "} />
              </div>
            </div>
            <div className="pervious">
              <FaAngleRight />
            </div>
          </div>
        </div>
        <div className="ECrightBody"></div>
      </div>
    </div>
  );
}

export default EnginneringCollegescreen;
