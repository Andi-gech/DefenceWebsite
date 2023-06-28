import React, { useEffect } from "react";
import Smallbanner from "./Smallbanner";
import Subheadercomponent from "../components/Subheader";
import { useParams } from "react-router-dom";
import UseCollageFech from "../hooks/UseCollageFech";

function CollageAdminstartion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: collage } = UseCollageFech();
  const { Collages } = useParams();
  const college = collage?.find((college) => college.pathname === Collages);

  return (
    <div className="CollageAdminstartion">
      <Smallbanner name={Collages} />
      <Subheadercomponent />
      <div className="titles">
        <p>{college?.adminstartion}</p>
      </div>

      <p>{}</p>
    </div>
  );
}

export default CollageAdminstartion;
