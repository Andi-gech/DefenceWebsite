import React, { useEffect, useState } from "react";
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
import Loadingpage from "./Loadingpage";
function Collegescreen() {
  const { Collages } = useParams();

  const { data } = UseCollageFech();

  const { data: News } = UseNewsfech();
  const college = data?.find((college) => college.pathname === Collages);
  const Anounments = News?.filter(
    (f) => f.type === "Announcment" && f.tags.some((tag) => tag === college.id)
  );

  const { data: Partners } = UsePartnersFech(college?.id);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = (loaded) => {
    setImageLoaded(loaded);
  };

  if (data && News && Partners) {
    if (!college) {
      return <h1 id="PAgesh1">page not found </h1>;
    } else {
      return (
        <>
          <div
            className="Collegescreen"
            style={{
              display: imageLoaded ? "flex" : "none",
            }}
          >
            <Smallbanner
              image={college.bannerimage}
              name={college.name}
              onImageLoad={handleImageLoad}
            />
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
                <Slideshow id={college.id} />

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
          <div
            style={{
              display: !imageLoaded ? "block" : "none",
            }}
          >
            <Loadingpage />
          </div>
        </>
      );
    }
  } else {
    return <Loadingpage />;
  }
}

export default Collegescreen;
