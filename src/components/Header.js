import React, { useState } from "react";
import logo from "../Assets/defenceLogo.png";
import {
  FaAngleDown,
  FaBeer,
  FaBook,
  FaBullhorn,
  FaCalendar,
  FaFileDownload,
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
  FaBars,
  FaUserShield,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import UseCollageFech from "../hooks/UseCollageFech";

function Header() {
  const [islatest, setIslatest] = useState(false);
  const [isacadamy, setacadamy] = useState(false);
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [selected, setselected] = useState("");
  const latestclicked = () => {
    setselected("latest");
    setIslatest(false);
  };
  const Acadamicclicked = () => {
    setselected("acadamics");
    setacadamy(false);
  };
  const collages = [
    {
      id: 1,
      name: "Enginnering ",
      description: "defence unversity community discription 1",
    },
    {
      id: 2,
      name: "Health",
      description: "Defence University community discription 2",
    },
    {
      id: 3,
      name: "Resource",
      description: "This is the description for Card 3.",
    },
  ];
  const { data, isError, error, isLoading, refech } = UseCollageFech();

  return (
    <div className="Header">
      <div className="Logo-container">
        <img src={logo} />
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
              onClick={latestclicked}
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
              onClick={Acadamicclicked}
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
                  {data?.map((college) => (
                    <Link to={college.pathname} className="eachelement">
                      <p>{college.name}</p>
                    </Link>
                  ))}
                </div>
                <div className="dropdownpart">
                  <p id="deptitle">Regestrar</p>

                  <Link to={"AcadamicCalander"} className="eachelement">
                    Acadamic Calander{" "}
                  </Link>
                  <Link to={"Admmisson"} className="eachelement">
                    Admission{" "}
                  </Link>
                  <Link to={"admissioncontact"} className="eachelement">
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
                backgroundColor:
                  selected === "library" ? "white" : "transparent",
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
                backgroundColor:
                  selected === "clander" ? "white" : "transparent",
                color: selected == "clander" ? "black" : "white",
              }}
            >
              <Link to={"Downloads"} className="EachHeaderbutton">
                Downloads{" "}
                <FaFileDownload
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
                backgroundColor:
                  selected === "Support" ? "white" : "transparent",
                color: selected == "Support" ? "black" : "white",
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
