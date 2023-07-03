import React, { useEffect } from "react";
import Newscardcomponent from "../components/Newscardcomponent";
import UseNewsfech from "../hooks/UseNewsfetch";
import Loadingpage from "./Loadingpage";
import { useMediaQuery } from "react-responsive";

function Newspage() {
  const { data: news } = UseNewsfech();
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  if (news) {
    return (
      <div className="Newspage">
        <div className="titles">
          <p>Latest News</p>
        </div>
        {news?.length == 0 && (
          <p style={{ textAlign: "center" }}>No News Exist</p>
        )}
        <div
          className="Newslist"
          style={{ width: isTabletOrMobile ? "100vw" : 900 }}
        >
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
