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
  FaSchool,
  FaShare,
  FaSpeakap,
  FaSpeakerDeck,
} from "react-icons/fa";

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
            Home{" "}
            <FaHome id="icon" color={selected == "home" ? "orange" : "white"} />
          </li>
          <li
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
              <div className="eachelement">
                Announcment
                <FaBullhorn />
              </div>
              <div className="eachelement">
                latest
                <FaBullhorn />
              </div>
              <div className="eachelement">
                Reasearch
                <FaBullhorn />
              </div>
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

                <div className="eachelement">
                  <p>College of Enginnering</p>
                </div>
                <div className="eachelement"> College of Health Science</div>
                <div className="eachelement">
                  <p> Resource Management</p>
                </div>
              </div>
              <div className="dropdownpart">
                <p id="deptitle">Regestrar</p>

                <div className="eachelement">Acadamic Calander </div>
                <div className="eachelement">Admission </div>
                <div className="eachelement">contact </div>
              </div>
              <div className="dropdownpart">
                <p id="deptitle">Research</p>

                <div className="eachelement">Projects</div>
                <div className="eachelement">Community activities</div>
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
            Library{" "}
            <FaBook
              id="icon"
              color={selected == "library" ? "orange" : "white"}
            />
          </li>

          <li
            onClick={() => setselected("clander")}
            style={{
              backgroundColor: selected === "clander" ? "white" : "transparent",
              color: selected == "clander" ? "black" : "white",
            }}
          >
            Calander{" "}
            <FaCalendar
              id="icon"
              color={selected == "clander" ? "orange" : "white"}
            />
          </li>
          <li
            onClick={() => setselected("about")}
            style={{
              backgroundColor: selected === "about" ? "white" : "transparent",
              color: selected == "about" ? "black" : "white",
            }}
          >
            About
            <FaGlobe
              id="icon"
              color={selected == "about" ? "orange" : "white"}
            />{" "}
          </li>
          <li>
            Support <FaQuestionCircle id="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
