import React, { useEffect } from "react";
import Newscardcomponent from "../components/Newscardcomponent";
import UseNewsfech from "../hooks/UseNewsfetch";
import Loadingpage from "./Loadingpage";

function Newspage() {
  const { data: news } = UseNewsfech();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (news) {
    return (
      <div className="Newspage">
        <div className="titles">
          <p>Latest News</p>
        </div>
        <div className="Newslist">
          {news.map((item) => (
            <Newscardcomponent
              key={item.id}
              id={item.id}
              title={item.Title}
              discription={item.description}
              date={item.date}
              image={item.image}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return <Loadingpage />;
  }
}

export default Newspage;
