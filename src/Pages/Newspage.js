import React from "react";
import Newscardcomponent from "../components/Newscardcomponent";
import { newsData } from "./NEwsData";
import UseEventFech from "../hooks/UseEventfecg";
import Loadingpage from "./Loadingpage";
import UseNewsfech from "../hooks/UseNewsfetch";
function Newspage() {
  const { data: News } = UseNewsfech();
  if (News) {
    return (
      <div className="Newspage">
        <div className="titles">
          <p>Latest News</p>
        </div>
        <div className="Newslist">
          {News?.map((news) => {
            return (
              <Newscardcomponent
                id={news.id}
                title={news.Title}
                discription={news.description}
                date={news.date}
                image={news.image}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <Loadingpage />;
  }
}

export default Newspage;
