import React, { useEffect } from "react";
import AnnouncmentCard from "../components/AnnouncmentCard";
import UseNewsfech from "../hooks/UseNewsfetch";

function Announcmentpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { data: News } = UseNewsfech();
  const Anouncments = News?.filter((f) => f.type === "Announcment");

  return (
    <div className="Announcmentpage">
      <div className="titles">
        <p>Latest Announcement</p>
      </div>
      <div className="Anouncmentlist">
        {Anouncments?.map((item) => {
          return <AnnouncmentCard title={item.Title} date={item.date} />;
        })}
      </div>
    </div>
  );
}

export default Announcmentpage;
