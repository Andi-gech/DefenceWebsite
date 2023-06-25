import React from "react";
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

function HomeScreen() {
  const opts = {
    height: "360",
    width: "640",
  };

  return (
    <div className="HomeScreen">
      <Bannercomponent />
      <div className="bodycontainer">
        <div className="leftbodycontainer">
          <div>
            <div className="">
              <p id="title">Wellcome Message From Commandant</p>
            </div>
            <WellcomeMessage />
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
          <div>
            {newsData.map((news) => {
              return (
                <Newscardcomponent
                  id={news.id}
                  title={news.title}
                  discription={news.content}
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
            <div className="cardelements">
              <img src={logo} />
              <p>Enginnering Campus</p>
              <FaArrowRight />
            </div>
            <div className="cardelements">
              <img src={logo} />
              <p>Health Campus</p>
              <FaArrowRight />
            </div>
            <div className="cardelements">
              <img src={logo} />
              <p>Resource Campus</p>
              <FaArrowRight />
            </div>
          </div>
          <div className="Cards">
            <div className="cardstitle">
              <p id="Newcontainertitle">Events</p>
            </div>

            <div className="cardelements" style={{ paddingInline: 55 }}>
              <FaCalendarDay size={19} color="green" />
              <div className="texteventname">
                <p>Enginnering Campus</p>
                <p id="location">
                  <span>
                    <FaMapMarker size={10} /> Admin
                  </span>
                  <span>Jan-23-2014</span>
                </p>
              </div>
            </div>
            <div className="cardelements" style={{ paddingInline: 55 }}>
              <FaCalendarDay size={19} color="green" />
              <div className="texteventname">
                <p>Polen</p>
                <p id="location">
                  <span>
                    <FaMapMarker size={10} /> Admin
                  </span>
                  <span>Jan-23-2014</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ACadamicReward />
      <CommunityOutreach />
    </div>
  );
}

export default HomeScreen;
