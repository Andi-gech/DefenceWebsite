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
          <p id="links">Student portal</p>
          <p id="links">Student Downloads </p>
          <p id="links">Library </p>
          <p id="links">Vaccency</p>
          <p id="linktitle">Emergency Contacts </p>
          <p id="links">DU Clinic </p>
        </div>
      </div>
      <div className="copyrightmessage">
        <p>&#169;Defence University 2022</p>
      </div>
    </div>
  );
}

export default Footer;
