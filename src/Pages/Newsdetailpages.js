import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { newsData } from "./NEwsData";
import newssvg from "../Assets/photo_2023-06-16_22-33-56.jpg";
import Newscardcomponent from "../components/Newscardcomponent";
import UseNewsfech from "../hooks/UseNewsfetch";
import UseIndividualnewsFech from "../hooks/UseIndividualnews";
import Loadingpage from "./Loadingpage";

function Newsdetailpages() {
  const { id } = useParams();
  const { data: News } = UseNewsfech();
  const { data: InNews } = UseIndividualnewsFech(id);
  const dates = new Date(InNews?.date);

  const year = dates.getFullYear();
  const month = dates.getMonth() + 1; // Month is zero-based (0-11)
  const day = dates.getDate();
  const hours = dates.getHours();
  const minutes = dates.getMinutes();
  const seconds = dates.getSeconds();

  const formattedDate = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  }`;
  const formattedTime = `${hours}:${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;

  console.log("Date:", formattedDate);
  console.log("Time:", formattedTime);
  if (News && InNews) {
    return (
      <div className="Newsdetailpages">
        <div className="MainNewsdetail">
          <div className="NEWspageTitle"> {InNews?.Title}</div>
          <div className="newsdate"> {formattedDate}</div>
          <img src={InNews?.image} />
          <div>
            <p>{InNews.description}</p>
          </div>
        </div>

        <div className="SideNEws">
          <div className="titles">Related news</div>
          <div>
            {News?.map((news) => {
              return (
                <div>
                  <Newscardcomponent
                    id={news.id}
                    title={news.Title}
                    date={news.date}
                    image={news.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loadingpage />;
  }
}

export default Newsdetailpages;
