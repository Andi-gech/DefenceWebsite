import React from "react";
import Newscardcomponent from "../components/Newscardcomponent";
import { newsData } from "./NEwsData";
function Newspage() {
  return (
    <div className="Newspage">
      <div className="titles">
        <p>Latest News</p>
      </div>
      <div className="Newslist">
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
    </div>
  );
}

export default Newspage;
