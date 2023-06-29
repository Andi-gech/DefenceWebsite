import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaYoutubeSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="Footer">
      <div className="text">
        <div className="text-left">
          <p id="linktitle">DEFENCE UNIVERSITY</p>
          <div className="inline-text">
            <div className="Socialcard">
              <FaMailBulk />
            </div>
            <p>Edu@gmail.com</p>
          </div>
          <div className="inline-text">
            <div className="Socialcard">
              <FaPhone />
            </div>
            <p>+251983647484</p>
          </div>

          <div className="inline-text">
            <div className="Socialcard">
              <FaFacebookSquare />
            </div>
            <div className="Socialcard">
              <FaLinkedin />
            </div>
            <div className="Socialcard">
              <FaYoutubeSquare />
            </div>
          </div>
          <div className="Map"></div>
        </div>
        <div className="text-right">
          <p id="linktitle">Direct links </p>
          <a href="http://10.228.10.13/"><p id="links">Engineering Students Portal</p></a>
          <a href="http://10.228.10.13/"><p id="links">RSM Students Portal</p></a>
          <a href="http://10.228.10.13/"><p id="links">Health Students Portal</p></a>
          <a href="http://10.228.10.13/"><p id="links">Library</p></a>
          <p id="linktitle">Emergency Contacts </p>
          <a href="tel:123-456-7890"><p id="links">DU Clinic</p></a>
        </div>
      </div>
      <div className="copyrightmessage">
        <p>&#169; Ethiopian Defence University 2023</p>
      </div>
    </div>
  );
}

export default Footer;
