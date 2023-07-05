import React, { useEffect, useState } from "react";
import Smallbanner from "./Smallbanner";
import Subheadercomponent from "../components/Subheader";
import { Link, useParams } from "react-router-dom";
import UseCollageFech from "../hooks/UseCollageFech";

import Loadingpage from "./Loadingpage";

import Collageadminbody from "../components/Collageadminbody";

function CollageAdminstartion() {
  const { Collages: path, offices } = useParams();
  const {
    data: collage,
    refetch: colrefech,
    isRefetching: iscollagefecching,
  } = UseCollageFech();

  const college = collage?.find((college) => college.pathname === path);
  console.log(college?.id);

  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    colrefech(college?.id);
  }, [path, offices]);

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
          name={college?.name}
          image={college?.bannerimage}
          onImageLoad={() => setImageLoaded(true)}
        />
        <Subheadercomponent />
        <Collageadminbody offices={offices} path={path} college={college} />
      </div>
      <div style={{ display: !imageLoaded ? "block" : "none" }}>
        <Loadingpage />
      </div>
    </>
  );
}

export default CollageAdminstartion;
