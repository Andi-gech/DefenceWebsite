import React, { useState } from "react";
import logo from "../Assets/defenceLogo.png";
import {
  FaAngleDown,
  FaBeer,
  FaBook,
  FaBullhorn,
  FaCalendar,
  FaGlobe,
  FaGraduationCap,
  FaHome,
  FaLightbulb,
  FaNewspaper,
  FaQuestionCircle,
  FaRegNewspaper,
  FaSchool,
  FaShare,
  FaSpeakap,
  FaSpeakerDeck,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [islatest, setIslatest] = useState(false);
  const [isacadamy, setacadamy] = useState(false);
  const [selected, setselected] = useState("");

  return (
    <div className="Header">
      <div className="Logo-container">
        <img src={logo} />
      </div>
      <div className="Header-buttons">
        <ul>
          <li
            id="selected"
            onClick={() => setselected("home")}
            style={{
              backgroundColor: selected == "home" ? "white" : "transparent",
              color: selected == "home" ? "black" : "white",
            }}
          >
            <Link to={"home"} className="EachHeaderbutton">
              Home
              <FaHome
                id="icon"
                color={selected == "home" ? "orange" : "white"}
              />
            </Link>
          </li>
          <li
            className="EachHeaderbutton"
            onMouseEnter={() => setIslatest(true)}
            onMouseLeave={() => setIslatest(false)}
            onClick={() => setselected("latest")}
            style={{
              backgroundColor: selected == "latest" ? "white" : "transparent",
              color: selected == "latest" ? "black" : "white",
            }}
          >
            <div
              className="Drop-downlatest"
              style={{
                display: islatest ? "flex" : "none",
                color: "white",
              }}
            >
              <Link className="eachelement" to={"latest-announcement"}>
                Announcment
              </Link>
              <Link to={"latest-news"} className="eachelement">
                News
              </Link>
              <Link to={"Latest-Research"} className="eachelement">
                Reasearch
              </Link>
            </div>

            <span>
              latest <FaAngleDown />
            </span>
            <FaNewspaper
              id="icon"
              color={selected == "latest" ? "orange" : "white"}
            />
          </li>

          <li
            className="EachHeaderbutton"
            onClick={() => setselected("acadamics")}
            onMouseEnter={() => setacadamy(true)}
            onMouseLeave={() => setacadamy(false)}
            style={{
              backgroundColor:
                selected === "acadamics" ? "white" : "transparent",
              color: selected == "acadamics" ? "black" : "white",
            }}
          >
            <div
              className="Drop-downAcadmay"
              style={{
                display: isacadamy ? "flex" : "none",
                color: "white",
              }}
            >
              <div className="dropdownpart">
                <p id="deptitle">Colleges</p>

                <Link to={"DE"} className="eachelement">
                  <p>College of Enginnering</p>
                </Link>
                <Link to={"Dhe"} className="eachelement">
                  College of Health Science
                </Link>
                <Link to={"drs"} className="eachelement">
                  <p> Resource Management</p>
                </Link>
              </div>
              <div className="dropdownpart">
                <p id="deptitle">Regestrar</p>

                <Link to={"AcadamicCalander"} className="eachelement">
                  Acadamic Calander{" "}
                </Link>
                <Link to={"Admmisson"} className="eachelement">
                  Admission{" "}
                </Link>
                <Link to={"admission-contact"} className="eachelement">
                  contact{" "}
                </Link>
              </div>
              <div className="dropdownpart">
                <p id="deptitle">Research</p>

                <Link to={"research-project"} className="eachelement">
                  Projects
                </Link>
                <Link to={"research-Community"} className="eachelement">
                  Community activities
                </Link>
              </div>
            </div>
            <span>
              Acadamics
              <FaAngleDown />
            </span>
            <FaGraduationCap
              id="icon"
              color={selected == "acadamics" ? "orange" : "white"}
            />
          </li>
          <li
            onClick={() => setselected("library")}
            style={{
              backgroundColor: selected === "library" ? "white" : "transparent",
              color: selected == "library" ? "black" : "white",
            }}
          >
            <Link to={"Adminstration"} className="EachHeaderbutton">
              Adminstration
              <FaUserShield
                id="icon"
                color={selected == "library" ? "orange" : "white"}
              />
            </Link>
          </li>

          <li
            onClick={() => setselected("clander")}
            style={{
              backgroundColor: selected === "clander" ? "white" : "transparent",
              color: selected == "clander" ? "black" : "white",
            }}
          >
            <Link to={"calander"} className="EachHeaderbutton">
              Calander{" "}
              <FaCalendar
                id="icon"
                color={selected == "clander" ? "orange" : "white"}
              />
            </Link>
          </li>
          <li
            onClick={() => setselected("about")}
            style={{
              backgroundColor: selected === "about" ? "white" : "transparent",
              color: selected == "about" ? "black" : "white",
            }}
          >
            <Link to={"about"} className="EachHeaderbutton">
              About
              <FaGlobe
                id="icon"
                color={selected == "about" ? "orange" : "white"}
              />
            </Link>
          </li>
          <li
            onClick={() => setselected("Support")}
            style={{
              backgroundColor: selected === "Support" ? "white" : "transparent",
              color: selected == "Support" ? "black" : "white",
            }}
          >
            <Link to={"support"} className="EachHeaderbutton">
              Support <FaQuestionCircle id="icon" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
