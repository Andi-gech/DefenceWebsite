import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaCalendarDay,
  FaMapMarker,
  FaShare,
} from "react-icons/fa";
import Bannercomponent from "../components/Bannercomponent";
import Newscardcomponent from "../components/Newscardcomponent";
import WellcomeMessage from "../components/WellcomeMessage";
import ACadamicReward from "../components/ACadamicReward";
import CommunityOutreach from "../components/CommunityOutreach";
import UseUniversityFech from "../hooks/UseUniversity";
import UseNewsfech from "../hooks/UseNewsfetch";
import UseEventFech from "../hooks/UseEventfecg";
import UseCollageFech from "../hooks/UseCollageFech";
import Loadingpage from "./Loadingpage";
import logo from "../Assets/defenceLogo.png";

import Erorrpage from "./Errorpage";

function HomeScreen() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { data, isLoading, isError } = UseUniversityFech();
  const {
    data: collages,
    isError: collegeerror,
    isLoading: loadingcollage,
  } = UseCollageFech();
  const {
    data: News,
    isError: Newserror,
    isLoading: newsloading,
  } = UseNewsfech();
  const {
    data: Event,
    isError: eventerror,
    isLoading: eventloading,
  } = UseEventFech();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    if (data && data.length > 0) {
      const img = new Image();
      img.src = data[0].bannerimage;
      img.onload = handleImageLoad;

      return () => {
        img.onload = null;
      };
    }
  }, [data]);

  if (isLoading || loadingcollage || newsloading || eventloading) {
    return <Loadingpage />;
  }
  if (data && News && Event) {
    return (
      <>
        <div
          className="HomeScreen"
          style={{ display: imageLoaded ? "flex" : "none" }}
        >
          <Bannercomponent
            banner={data[0].bannerimage}
            onImageLoad={() => setImageLoaded(true)}
          />
          <div className="bodycontainer">
            <div className="leftbodycontainer">
              <div>
                <div className="">
                  <p id="title">Welcome Message From Commandant</p>
                </div>
                <WellcomeMessage
                  Leadername={data[0]?.leaderName}
                  message={data[0]?.welcomeMessage}
                  image={data[0]?.leaderimage}
                />
              </div>

              <div className="Newscontainerlist">
                <p id="Newcontainertitle">Latest News</p>
                <p id="Newcontainertitle">
                  Sort
                  <FaArrowDown style={{ fontWeight: "normal" }} />
                </p>
              </div>
              <div className="Newslist">
                {News.reverse().map((news) => (
                  <Newscardcomponent
                    key={news.id}
                    id={news.id}
                    title={news.Title}
                    discription={news.description}
                    date={news.date}
                    image={news.image}
                  />
                ))}
              </div>
              <p className="seemore">
                See more
                <FaShare />
              </p>
              <div className="feature_Vidos">
                <div className="feature_Vidos_header">
                  <p id="title">Feature Video</p>
                </div>
                <div className="feature_Vidocontent">
                  <iframe
                    src="https://www.youtube.com/embed/0-ND5ib9FkY"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="Defence University"
                  />
                </div>
              </div>
            </div>
            <div className="rightbodycontainer">
              <div className="Cards">
                <div className="cardstitle">
                  <p id="Newcontainertitle">CAMPUSES</p>
                </div>
                {collages.map((collage) => (
                  <div className="cardelements" key={collage.id}>
                    <img src={logo} alt={collage.name} />
                    <p>{collage.name}</p>
                    <FaArrowRight />
                  </div>
                ))}
              </div>
              <div className="Cards">
                <div className="cardstitle">
                  <p id="Newcontainertitle">Events</p>
                </div>
                {Event.map((e) => (
                  <div
                    className="cardelements"
                    key={e.id}
                    style={{ paddingInline: 10 }}
                  >
                    <FaCalendarDay size={19} color="green" />
                    <div className="texteventname">
                      <p>{e.Title}</p>
                      <p id="location">
                        <span>
                          <FaMapMarker size={10} /> {e.location}
                        </span>
                        <span>{e.date}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ACadamicReward />
          <CommunityOutreach />
        </div>
        <div style={{ display: !imageLoaded ? "block" : "none" }}>
          <Loadingpage />
        </div>
      </>
    );
  }
  if (isError || collegeerror || Newserror || eventerror) {
    return <Erorrpage />;
  }
}
export default HomeScreen;
