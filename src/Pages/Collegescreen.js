import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import Subheadercomponent from "../components/Subheader";

import Smallbanner from "./Smallbanner";

import WellcomeMessage from "../components/WellcomeMessage";
import AnnouncmentCard from "../components/AnnouncmentCard";
import PartnerComponent from "../components/PartnerComponent";
import Slideshow from "../components/Slideshow";
import UseCollageFech from "../hooks/UseCollageFech";
import UseNewsfech from "../hooks/UseNewsfetch";

import UsePartnersFech from "../hooks/UsePartnerFech";
import Loadingpage from "./Loadingpage";

function Collegescreen() {
  const { Collages } = useParams();

  const { data } = UseCollageFech();
  const { data: News } = UseNewsfech();

  const college = data?.find((college) => college.pathname === Collages);
  const Anounments = News?.filter(
    (f) => f.type === "Announcment" && f.tags.some((tag) => tag === college?.id)
  );

  const { data: Partners } = UsePartnersFech(college?.id);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    if (college) {
      const img = new Image();
      img.src = college.bannerimage;
      img.onload = handleImageLoad;

      return () => {
        img.onload = null;
      };
    }
  }, [college]);

  if (data && News && Partners) {
    if (!college) {
      return <h1 id="PAgesh1">Page not found</h1>;
    } else {
      return (
        <>
          <div
            className="Collegescreen"
            style={{ display: imageLoaded ? "flex" : "none" }}
          >
            <Smallbanner
              image={college.bannerimage}
              name={college.name}
              onImageLoad={() => setImageLoaded(true)}
            />
            <Subheadercomponent />

            <div className="ECpageBody">
              <div className="ECLeftBody">
                <div className="titles">
                  <p>Welcome Message</p>
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
                  {Partners?.map((Partner) => (
                    <PartnerComponent key={Partner.id} />
                  ))}
                </div>
              </div>
              <div className="ECrightBody">
                <div className="titles">
                  <p>Announcements</p>
                </div>
                <div className="AnnouncmentCardlsts">
                  {Anounments?.map((An) => (
                    <AnnouncmentCard
                      key={An.id}
                      title={An.Title}
                      location={An.description}
                      date={An.date}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: !imageLoaded ? "block" : "none" }}>
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
