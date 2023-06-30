import React, { useEffect, useState } from "react";
import {
  FaArrowDown,
  FaArrowRight,
  FaCalendarDay,
  FaMapMarker,
  FaShare,
} from "react-icons/fa";
import { delay, motion } from "framer-motion";
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
import AnnouncmentCard from "../components/AnnouncmentCard";
import { useMediaQuery } from "react-responsive";

function HomeScreen() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { data, isLoading, isError } = UseUniversityFech();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

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
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    if (data && data.length > 0) {
      const img = new Image();
      img.src = data[0]?.bannerimage;
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
            banner={data[0]?.bannerimage}
            onImageLoad={() => setImageLoaded(true)}
          />
          {isTabletOrMobile && (
            <div className="mobilebody">
              <p id="Newcontainertitle">Welcome Message From Commandant</p>
              <WellcomeMessage
                Leadername={data[0]?.leaderName}
                message={data[0]?.welcomeMessage}
                image={data[0]?.leaderimage}
              />
              <p id="Newcontainertitle">Latest News</p>
              {News?.length == 0 && (
                <p style={{ textAlign: "center" }}>No News Exist</p>
              )}
              {News.slice()
                .reverse()
                .slice(0, 7)
                .map((news) => (
                  <Newscardcomponent
                    key={news.id}
                    id={news.id}
                    title={news.Title}
                    discription={news.description}
                    date={news.date}
                    image={news.image}
                  />
                ))}
              <p id="Newcontainertitle">Upcoming Events</p>
              {Event?.length == 0 && (
                <p style={{ textAlign: "center" }}>No Events Exist</p>
              )}
              {Event.map((e, index) => (
                <motion.div
                  key={index}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 1, delay: index / 10 }}
                >
                  <AnnouncmentCard
                    title={e.Title}
                    date={e.date}
                    location={e.location}
                  />
                </motion.div>
              ))}
              <p id="Newcontainertitle">feature Videos</p>
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
          )}
          {isDesktopOrLaptop && (
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
                  {News?.length == 0 && (
                    <p style={{ textAlign: "center" }}>No News Exist</p>
                  )}
                  {News.slice()
                    .reverse()
                    .slice(0, 4)
                    .map((news) => (
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
                  {collages?.length == 0 && (
                    <p style={{ textAlign: "center" }}>No collages Exist</p>
                  )}

                  {collages.map((collage, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ x: [150, 0] }}
                      transition={{ duration: 1, delay: index / 10 }}
                    >
                      <div className="cardelements" key={collage.id}>
                        <img src={logo} alt={collage.name} />
                        <p>{collage.name}</p>
                        <FaArrowRight />
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="Cards">
                  <div className="cardstitle">
                    <p id="Newcontainertitle">Upcoming Events</p>
                  </div>
                  {Event?.length == 0 && (
                    <p style={{ textAlign: "center" }}>No Events Exist</p>
                  )}
                  {Event.map((e, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 1, delay: index / 10 }}
                    >
                      <AnnouncmentCard
                        title={e.Title}
                        date={e.date}
                        location={e.location}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <ACadamicReward />
          <CommunityOutreach news={News} />
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
