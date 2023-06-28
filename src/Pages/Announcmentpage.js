import React, { useEffect } from "react";
import AnnouncmentCard from "../components/AnnouncmentCard";

function Announcmentpage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Announcmentpage">
      <div className="title">
        <p>Latest Announcment</p>
      </div>
      <div className="Anouncmentlist">
        <AnnouncmentCard />
        <AnnouncmentCard />
        <AnnouncmentCard />
        <AnnouncmentCard />
      </div>
    </div>
  );
}

export default Announcmentpage;
