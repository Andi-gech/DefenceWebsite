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
            <a href="https://www.facebook.com/ethdefuni">
              {" "}
              <div className="Socialcard">
                <FaFacebookSquare />
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=0-ND5ib9FkY">
              <div className="Socialcard">
                <FaLinkedin />
              </div>
            </a>
            <a href="https://www.youtube.com/watch?v=0-ND5ib9FkY">
              <div className="Socialcard">
                <FaYoutubeSquare />
              </div>
            </a>
          </div>
          <div className="Map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.639378766347!2d38.97793492518764!3d8.74745241788386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b0d0d39a7d6af%3A0xd77fcf3e790eca05!2sEthiopian%20Defence%20University!5e0!3m2!1sam!2set!4v1688057565229!5m2!1sam!2set"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="text-right">
          <p id="linktitle">Direct links </p>
<<<<<<< HEAD
          <a href="http://10.228.10.13/"><p id="links">Engineering Students Portal</p></a>
          <a href="http://10.228.10.23/"><p id="links">RSM Students Portal</p></a>
          <a href="http://10.228.140.9/"><p id="links">Health Students Portal</p></a>
          <a href="http://10.228.10.13/"><p id="links">Library</p></a>
          <a href="https://forms.gle/UBv6CDdsXXpWqkSR8"><p id="links">Comment</p></a>
=======
          <a href="http://10.228.10.13/">
            <p id="links">Engineering Students Portal</p>
          </a>
          <a href="http://10.228.10.13/">
            <p id="links">RSM Students Portal</p>
          </a>
          <a href="http://10.228.10.13/">
            <p id="links">Health Students Portal</p>
          </a>
          <a href="http://10.228.10.13/">
            <p id="links">Library</p>
          </a>
>>>>>>> 1874233dfb295c490bad1a4c19ec8a5803752a27
          <p id="linktitle">Emergency Contacts </p>
          <a href="tel:123-456-7890">
            <p id="links">DU Clinic</p>
          </a>
        </div>
      </div>
      <div className="copyrightmessage">
        <p>&#169; Ethiopian Defence University 2023</p>
      </div>
    </div>
  );
}

export default Footer;
