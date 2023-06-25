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

  // Find the matching college based on the Collages parameter
  const college = collages.find((college) => college.name === Collages);
  console.log(college);

  if (!college) {
    return <h1 id="PAgesh1">page not found </h1>;
  }
  return (
    <div className="Collegescreen">
      <Smallbanner name={Collages} />
      <Subheadercomponent />

      <div className="ECpageBody">
        <div className="ECLeftBody">
          <div className="titles">
            <p>Wellcome Message</p>
          </div>
          <WellcomeMessage />

          <div className="titles">
            <p>Departments</p>
          </div>
          <Slideshow images={college.depatments} />

          <div className="titles">
            <p>About DEC</p>
          </div>
          <div className="Text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              aliquet metus ac nunc hendrerit, et finibus justo mollis. Sed sed
              neque a ex aliquam feugiat. Donec tristique purus ut justo
              pharetra, ac commodo dui ullamcorper. Suspendisse potenti. Morbi
              lobortis aliquet volutpat. Aliquam dignissim nibh et mauris
              dictum, et dapibus mi tincidunt. Duis sit amet arcu id sem
              pulvinar fermentum. Integer auctor, nulla vel posuere lacinia,
              tortor urna eleifend ex, nec luctus elit turpis vitae eros. Sed at
              efficitur ex. In hac habitasse platea dictumst. Proin pellentesque
              ex eget quam pharetra semper. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
              sed facilisis ligula. Sed varius faucibus nisi id vulputate.
              Phasellus mattis velit eu felis aliquam, ut dapibus nisi dapibus.
              Vivamus ut dolor euismod, eleifend felis a, fermentum tellus. Ut
              eget dapibus nisi. Aenean ut massa mauris. Fusce efficitur
              condimentum neque, ut dapibus mauris mollis ut. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Integer non vestibulum dui. Sed iaculis semper
              arcu id aliquam. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia curae; Cras nec consectetur
              ipsum. Duis faucibus sem non ex egestas efficitur. Sed fermentum
              orci risus, vel interdum elit congue ut. Ut feugiat nisl vel
              tellus tristique sollicitudin. Mauris non consectetur tellus.
              Donec non ipsum risus. Sed et dolor nec sapien iaculis tincidunt.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Maecenas sit amet nunc eu purus
              tempor lobortis ut vitae mauris. Nullam consequat ultrices erat
              non ultricies. Vestibulum auctor elit sit amet ante mollis, sit
              amet ullamcorper mauris tristique.
            </p>
          </div>
          <div className="titles">
            <p>Partners</p>
          </div>
          <div className="PartnersCards">
            <PartnerComponent />
            <PartnerComponent />
            <PartnerComponent />
          </div>
        </div>
        <div className="ECrightBody">
          <div className="titles">
            <p>Announcments</p>
          </div>
          <div className="AnnouncmentCardlsts">
            <AnnouncmentCard />
            <AnnouncmentCard />
            <AnnouncmentCard />
            <AnnouncmentCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collegescreen;
