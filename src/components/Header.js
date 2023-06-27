import React, { useState } from "react";
import logo from "../Assets/defenceLogo.png";
import {
  FaAngleDown,
  FaFileDownload,
  FaGlobe,
  FaGraduationCap,
  FaHome,
  FaNewspaper,
  FaQuestionCircle,
  FaBars,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import UseCollageFech from "../hooks/UseCollageFech";

function Header() {
  const [isLatest, setIsLatest] = useState(false);
  const [isAcademy, setIsAcademy] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [selected, setSelected] = useState("");
  const latestClicked = () => {
    setSelected("latest");
    setIsLatest(false);
  };
  const acadamicClicked = () => {
    setSelected("academics");
    setIsAcademy(false);
  };

  const { data } = UseCollageFech();

  return (
    <div className="Header">
      <div className="Logo-container">
        <img src={logo} alt="Logo" />
      </div>
      {isTabletOrMobile && (
        <div className="headermobile">
          <FaBars size={25} color="white" />{" "}
        </div>
      )}
      {isDesktopOrLaptop && (
        <div className="Header-buttons">
          <ul>
            <li
              id="selected"
              onClick={() => setSelected("home")}
              style={{
                backgroundColor: selected === "home" ? "white" : "transparent",
                color: selected === "home" ? "black" : "white",
              }}
            >
              <Link to={"home"} className="EachHeaderbutton">
                Home
                <FaHome
                  id="icon"
                  color={selected === "home" ? "orange" : "white"}
                />
              </Link>
            </li>
            <li
              className="EachHeaderbutton"
              onMouseEnter={() => setIsLatest(true)}
              onMouseLeave={() => setIsLatest(false)}
              onClick={latestClicked}
              style={{
                backgroundColor:
                  selected === "latest" ? "white" : "transparent",
                color: selected === "latest" ? "black" : "white",
              }}
            >
              <div
                className="Drop-downlatest"
                style={{
                  display: isLatest ? "flex" : "none",
                  color: "white",
                }}
              >
                <Link className="eachelement" to={"latest-announcement"}>
                  Announcement
                </Link>
                <Link to={"latest-news"} className="eachelement">
                  News
                </Link>
                <Link to={"Latest-Research"} className="eachelement">
                  Research
                </Link>
              </div>

              <span>
                latest <FaAngleDown />
              </span>
              <FaNewspaper
                id="icon"
                color={selected === "latest" ? "orange" : "white"}
              />
            </li>

            <li
              className="EachHeaderbutton"
              onClick={acadamicClicked}
              onMouseEnter={() => setIsAcademy(true)}
              onMouseLeave={() => setIsAcademy(false)}
              style={{
                backgroundColor:
                  selected === "academics" ? "white" : "transparent",
                color: selected === "academics" ? "black" : "white",
              }}
            >
              <div
                className="Drop-downAcadmay"
                style={{
                  display: isAcademy ? "flex" : "none",
                  color: "white",
                }}
              >
                <div className="dropdownpart">
                  <p id="deptitle">Colleges</p>
                  {data?.map((college) => (
                    <Link
                      to={college.pathname}
                      className="eachelement"
                      key={college?.id}
                    >
                      <p>{college.name}</p>
                    </Link>
                  ))}
                </div>
                <div className="dropdownpart">
                  <p id="deptitle">Registrar</p>

                  <Link to={"AcadamicCalander"} className="eachelement">
                    Academic Calendar{" "}
                  </Link>
                  <Link to={"Admission"} className="eachelement">
                    Admission{" "}
                  </Link>
                  <Link to={"admissioncontact"} className="eachelement">
                    Contact{" "}
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
                Academics
                <FaAngleDown />
              </span>
              <FaGraduationCap
                id="icon"
                color={selected === "academics" ? "orange" : "white"}
              />
            </li>
            <li
              onClick={() => setSelected("library")}
              style={{
                backgroundColor:
                  selected === "library" ? "white" : "transparent",
                color: selected === "library" ? "black" : "white",
              }}
            >
              <Link to={"Administration"} className="EachHeaderbutton">
                Administration
                <FaUserShield
                  id="icon"
                  color={selected === "library" ? "orange" : "white"}
                />
              </Link>
            </li>

            <li
              onClick={() => setSelected("calendar")}
              style={{
                backgroundColor:
                  selected === "calendar" ? "white" : "transparent",
                color: selected === "calendar" ? "black" : "white",
              }}
            >
              <Link to={"Downloads"} className="EachHeaderbutton">
                Downloads{" "}
                <FaFileDownload
                  id="icon"
                  color={selected === "calendar" ? "orange" : "white"}
                />
              </Link>
            </li>
            <li
              onClick={() => setSelected("about")}
              style={{
                backgroundColor: selected === "about" ? "white" : "transparent",
                color: selected === "about" ? "black" : "white",
              }}
            >
              <Link to={"about"} className="EachHeaderbutton">
                About
                <FaGlobe
                  id="icon"
                  color={selected === "about" ? "orange" : "white"}
                />
              </Link>
            </li>
            <li
              onClick={() => setSelected("support")}
              style={{
                backgroundColor:
                  selected === "support" ? "white" : "transparent",
                color: selected === "support" ? "black" : "white",
              }}
            >
              <Link to={"support"} className="EachHeaderbutton">
                Support <FaQuestionCircle id="icon" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
