import React, { useEffect, useState } from "react";
import Smallbanner from "./Smallbanner";
import Subheadercomponent from "../components/Subheader";
import { useParams } from "react-router-dom";
import UseCollageFech from "../hooks/UseCollageFech";
import Loadingpage from "./Loadingpage";

function CollageAdminstartion() {
  const { Collages } = useParams();
  const { data: collage } = UseCollageFech();
  const college = collage?.find((college) => college.pathname === Collages);

  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const handleImageLoad = () => {
      setImageLoaded(true);
    };

    if (college) {
      const img = new Image();
      img.src = college.bannerimage;
      img.onload = handleImageLoad;

      return () => {
        img.onload = null;
      };
    }
  }, [college]);

  return (
    <>
      <div
        className="CollageAdminstartion"
        style={{ display: imageLoaded ? "flex" : "none" }}
      >
        <Smallbanner
          name={college.name}
          image={college.bannerimage}
          onImageLoad={() => setImageLoaded(true)}
        />
        <Subheadercomponent />

        <p>{college?.adminstartion}</p>

        <p>{}</p>
      </div>
      <div style={{ display: !imageLoaded ? "block" : "none" }}>
        <Loadingpage />
      </div>
    </>
  );
}

export default CollageAdminstartion;
