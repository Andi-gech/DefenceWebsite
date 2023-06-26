import React from "react";
import Subheadercomponent from "../components/Subheader";
import Newscardcomponent from "../components/Newscardcomponent";
import Smallbanner from "./Smallbanner";
import DepartmentCards from "../components/DepartmentCards";
import Enginneringsvg from "../Assets/Wavy_Tech-14_Single-04.jpg";
import Enginneringsvg1 from "../Assets/5096384.jpg";

import Enginneringsvg2 from "../Assets/4002785.jpg";
import Enginneringsvg3 from "../Assets/4266773.jpg";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import WellcomeMessage from "../components/WellcomeMessage";
import AnnouncmentCard from "../components/AnnouncmentCard";
import PartnerComponent from "../components/PartnerComponent";
import { useParams } from "react-router-dom";
import { Slideshow } from "../components/Slideshow";
import UseCollageFech from "../hooks/UseCollageFech";
import UseNewsfech from "../hooks/UseNewsfetch";
import UseDepartmentFech from "../hooks/UseDepartmentFetch";
import UsePartnersFech from "../hooks/UsePartnerFech";
function Collegescreen() {
  const { Collages } = useParams();
  const images = [
    Enginneringsvg,
    Enginneringsvg1,
    Enginneringsvg2,
    Enginneringsvg3,

    "#FFBB28",
  ];
  const collages = [
    {
      id: 1,
      name: "Enginnering",
      description: "defence unversity community discription 1",
      depatments: [
        { name: "computer", images: Enginneringsvg },
        { name: "motor", images: Enginneringsvg1 },
        { name: "motor", images: Enginneringsvg2 },
        { name: "motor", images: Enginneringsvg3 },
        { name: "motor", images: Enginneringsvg2 },
        { name: "motor", images: Enginneringsvg1 },
        { name: "motor", images: Enginneringsvg },
      ],
    },
    {
      id: 2,
      name: "Health",
      description: "Defence University community discription 2",
      depatments: [
        { name: "Dental Healt", images: Enginneringsvg },
        { name: "Pharmacy", images: Enginneringsvg1 },
        { name: "LAbratopy", images: Enginneringsvg2 },
        { name: "nursing", images: Enginneringsvg3 },
        { name: "Midwifree", images: Enginneringsvg2 },
        { name: "surgical", images: Enginneringsvg1 },
        { name: "bone", images: Enginneringsvg },
      ],
    },
    {
      id: 3,
      name: "Resource",
      description: "This is the description for Card 3.",
      depatments: [
        { name: "Law", images: Enginneringsvg },
        { name: "Business", images: Enginneringsvg1 },
        { name: "Accounting", images: Enginneringsvg2 },
        { name: "Managment", images: Enginneringsvg3 },
      ],
    },
  ];
  const { data, isError, error, isLoading, refech } = UseCollageFech();

  const { data: News } = UseNewsfech();

  const college = data?.find((college) => college.pathname === Collages);
  console.log(college);
  const Anounments = News?.filter(
    (f) => f.type === "Announcment" && f.tags.some((tag) => tag === college.id)
  );
  const { data: Department } = UseDepartmentFech(college?.id);
  const { data: Partners } = UsePartnersFech(college?.id);
  if (!college) {
    return <h1 id="PAgesh1">page not found </h1>;
  }
  return (
    <div className="Collegescreen">
      <Smallbanner image={college.bannerimage} name={college.name} />
      <Subheadercomponent />

      <div className="ECpageBody">
        <div className="ECLeftBody">
          <div className="titles">
            <p>Wellcome Message</p>
          </div>
          <WellcomeMessage
            Leadername={college.leaderName}
            message={college.welcomeMessage}
            image={college.leaderimage}
          />

          <div className="titles">
            <p>Departments</p>
          </div>
          <Slideshow images={Department} />

          <div className="titles">
            <p>About {college.name}</p>
          </div>
          <div className="Text">
            <p>{college.about}</p>
          </div>
          <div className="titles">
            <p>Partners</p>
          </div>
          <div className="PartnersCards">
            {Partners?.map((Partner) => {
              return <PartnerComponent />;
            })}
          </div>
        </div>
        <div className="ECrightBody">
          <div className="titles">
            <p>Announcments</p>
          </div>
          <div className="AnnouncmentCardlsts">
            {Anounments?.map((An) => {
              return (
                <AnnouncmentCard
                  title={An.Title}
                  location={An.description}
                  date={An.date}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collegescreen;
