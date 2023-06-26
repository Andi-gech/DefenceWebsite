import React, { useState } from "react";
import Bannercomponent from "../components/Bannercomponent";
import {
  FaArrowDown,
  FaArrowRight,
  FaCalendarDay,
  FaMapMarker,
  FaShare,
} from "react-icons/fa";
import Newscardcomponent from "../components/Newscardcomponent";
import logo from "../Assets/defenceLogo.png";
import { newsData } from "../Pages/NEwsData";
import ACadamicReward from "../components/ACadamicReward";
import CommunityOutreach from "../components/CommunityOutreach";
import WellcomeMessage from "../components/WellcomeMessage";
import UseUniversityFech from "../hooks/UseUniversity";
import UseNewsfech from "../hooks/UseNewsfetch";
import UseEventFech from "../hooks/UseEventfecg";
import UseCollageFech from "../hooks/UseCollageFech";
import Loadingpage from "./Loadingpage";

function HomeScreen() {
  const opts = {
    height: "360",
    width: "640",
  };
  const { data, isError, error, isLoading, refech } = UseUniversityFech();
  const { data: collages } = UseCollageFech();

  const { data: News } = UseNewsfech();
  const { data: Event } = UseEventFech();
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = (loaded) => {
    setImageLoaded(loaded);
  };

  if (data && News && Event) {
    return (
      <>
        <div
          className="HomeScreen"
          style={{
            display: imageLoaded ? "flex" : "none",
          }}
        >
          <Bannercomponent
            banner={data[0].bannerimage}
            onImageLoad={handleImageLoad}
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
                <p id="Newcontainertitle">Leatest News</p>
                <p id="Newcontainertitle">
                  sort
                  <FaArrowDown
                    style={{
                      fontWeight: "normal",
                    }}
                  />
                </p>
              </div>
              <div className="Newslist">
                {News?.reverse().map((news) => {
                  return (
                    <Newscardcomponent
                      id={news.id}
                      title={news.Title}
                      discription={news.description}
                      date={news.date}
                    />
                  );
                })}
              </div>
              <p className="seemore">
                seemore
                <FaShare />
              </p>
              <div className="feature_Vidos">
                <div className="feature_Vidos_header">
                  <p id="title">feature_Video</p>
                </div>
                <div className="feature_Vidocontent">
                  <iframe
                    src="https://www.youtube.com/embed/0-ND5ib9FkY"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
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
                {collages.map((collage) => {
                  return (
                    <div className="cardelements">
                      <img src={logo} />
                      <p>{collage.name}</p>
                      <FaArrowRight />
                    </div>
                  );
                })}
              </div>
              <div className="Cards">
                <div className="cardstitle">
                  <p id="Newcontainertitle">Events</p>
                </div>
                {Event.map((e) => {
                  return (
                    <div className="cardelements" style={{ paddingInline: 10 }}>
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
                  );
                })}
              </div>
            </div>
          </div>
          <ACadamicReward />
          <CommunityOutreach />
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
  } else {
    return <Loadingpage />;
  }
}

export default HomeScreen;
