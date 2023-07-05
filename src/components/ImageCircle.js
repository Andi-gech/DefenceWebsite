import React from "react";
import banner from "../Assets/banner.jpg";
import UseStafmemberFech from "../hooks/UseUserfechhook";
import { useEffect } from "react";
import { useState } from "react";

function ImageCircle({ id }) {
  const [images, setdata] = useState();
  const fecthuser = (id) => {
    refetch();
  };
  useEffect(() => {
    fecthuser(id);
    setdata(data?.image);
  }, [id]);
  const { data, refetch } = UseStafmemberFech(id);

  console.log(data);

  return (
    <div className="ImageCircle">
      <img src={images} />
    </div>
  );
}

export default ImageCircle;
