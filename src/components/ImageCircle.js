import React from "react";
import banner from "../Assets/banner.jpg";
import UseStafmemberFech from "../hooks/UseUserfechhook";
import { useEffect } from "react";
import { useState } from "react";

function ImageCircle({ id, user }) {
  const staffmember = user?.find((usr) => usr.id === id);
  console.log(staffmember, "heer");

  return (
    <div className="ImageCircle">
      <img src={staffmember?.image} />
      <p>{staffmember?.name}</p>
    </div>
  );
}

export default ImageCircle;
