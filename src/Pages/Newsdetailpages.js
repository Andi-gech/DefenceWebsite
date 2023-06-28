import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Newscardcomponent from "../components/Newscardcomponent";
import UseNewsfech from "../hooks/UseNewsfetch";
import UseIndividualnewsFech from "../hooks/UseIndividualnews";
import Loadingpage from "./Loadingpage";

function Newsdetailpages() {
  const { id } = useParams();
  const { data: news } = UseNewsfech();
  const { data: individualNews } = UseIndividualnewsFech(id);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formattedDate = formatDate(individualNews?.date);

  if (news && individualNews) {
    return (
      <div className="Newsdetailpages">
        <div className="MainNewsdetail">
          <div className="NEWspageTitle"> {individualNews?.Title}</div>
          <div className="newsdate"> {formattedDate}</div>
          <img src={individualNews?.image} alt="News" />
          <div>
            <p>{individualNews.description}</p>
          </div>
        </div>

        <div className="SideNEws">
          <div className="titles">Related news</div>
          <div>
            {news.map((item) => (
              <div key={item.id}>
                <Newscardcomponent
                  id={item.id}
                  title={item.Title}
                  date={item.date}
                  image={item.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <Loadingpage />;
  }
}

function formatDate(timestamp) {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default Newsdetailpages;
