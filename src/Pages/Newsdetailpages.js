import React from "react";
import { useParams } from "react-router-dom";
import { newsData } from "./NEwsData";
import newssvg from "../Assets/photo_2023-06-16_22-33-56.jpg";
import Newscardcomponent from "../components/Newscardcomponent";

function Newsdetailpages() {
  const { id } = useParams();
  const newdat = newsData.filter((data) => data.id == id);
  return (
    <div className="Newsdetailpages">
      <div className="MainNewsdetail">
        <div className="NEWspageTitle"> {newdat[0].title}</div>
        <div className="newsdate"> {newdat[0].date}</div>
        <img src={newssvg} />
        <div>
          <p>{newdat[0].content}</p>
        </div>
      </div>

      <div className="SideNEws">
        <div className="titles">Related news</div>
        <div>
          {newsData
            .reverse()
            .slice(0, 5)
            .map((news) => {
              return (
                <div>
                  <Newscardcomponent
                    id={news.id}
                    title={news.title}
                    discription={news.content}
                    date={news.date}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Newsdetailpages;
