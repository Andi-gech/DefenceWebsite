import React, { useState } from "react";
import logo from "../Assets/newlogo.jpeg";
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
  FaAngleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import UseCollageFech from "../hooks/UseCollageFech";

function Header({ click }) {
  const [isLatest, setIsLatest] = useState(false);
  const [isAcademy, setIsAcademy] = useState(false);
  const [ismenuopen, setmenuopen] = useState(false);
  const [iscolllage, setcollageopen] = useState(false);
  const [isregestar, setregstraropen] = useState(false);
  const [isresearch, setreseachopen] = useState(false);
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
  const supportclick = () => {
    click();
    setmenuopen(false);
  };

  const { data } = UseCollageFech();

  return (
    <div className="Header">
      <div className="Logo-container">
        <img src={logo} alt="Logo" />
        <div className="headerText">
          <p className="headerTexteach">
Ethiopian Defence University</p>
<p className="headerTexteach">

የኢትዮጵያ መከላከያ ዩኒቨርሲቲ</p>
        </div>
      </div>
      {isTabletOrMobile && (
        <div className="headermobile">
          {ismenuopen && (
            <div className="menusidebar">
              <Link
                to={"home"}
                onClick={() => setmenuopen(false)}
                className="Sidemenubutton"
              >
                <p>Home</p>
              </Link>
              <div
                className="Sidemenubutton"
                onClick={() => setIsLatest(!isLatest)}
              >
                <p>Latest {isLatest ? <FaAngleDown /> : <FaAngleRight />}</p>
              </div>
              {isLatest && (
                <div className="sidemenusub">
                  <Link
                    to={"latest-news"}
                    onClick={() => setmenuopen(false)}
                    className="Sidemenubutton"
                  >
                    <p>News</p>
                  </Link>
                  <Link
                    to={"latest-announcement"}
                    onClick={() => setmenuopen(false)}
                    className="Sidemenubutton"
                  >
                    <p>Announcement</p>
                  </Link>
                  <Link
                    to={"Latest-Research"}
                    onClick={() => setmenuopen(false)}
                    className="Sidemenubutton"
                  >
                    <p>Research News</p>
                  </Link>
                </div>
              )}
              <div
                className="Sidemenubutton"
                onClick={() => setIsAcademy(!isAcademy)}
              >
                <p>
                  Acadamics {isAcademy ? <FaAngleDown /> : <FaAngleRight />}
                </p>
              </div>
              {isAcademy && (
                <div className="sidemenusub">
                  <div
                    className="Sidemenubutton"
                    onClick={() => setcollageopen(!iscolllage)}
                  >
                    <p>
                      Collages {iscolllage ? <FaAngleDown /> : <FaAngleRight />}
                    </p>
                  </div>
                  {iscolllage && (
                    <div className="sidemenufinalsub">
                      {data?.map((college) => (
                        <Link
                          onClick={() => setmenuopen(false)}
                          to={college.pathname}
                          className="Sidemenubutton"
                          key={college?.id}
                        >
                          <p>{college.name}</p>
                        </Link>
                      ))}
                    </div>
                  )}
                  <div
                    className="Sidemenubutton"
                    onClick={() => setregstraropen(!isregestar)}
                  >
                    <p>
                      Register {isregestar ? <FaAngleDown /> : <FaAngleRight />}
                    </p>
                  </div>
                  {isregestar && (
                    <div className="sidemenufinalsub">
                      <Link
                        to={"AcadamicCalander"}
                        onClick={() => setmenuopen(false)}
                        className="Sidemenubutton"
                      >
                        <p>Academic Calendar</p>
                      </Link>
                      <Link
                        to={"Admission"}
                        onClick={() => setmenuopen(false)}
                        className="Sidemenubutton"
                      >
                        <p>Admission</p>
                      </Link>
                      <Link
                        to={"admissioncontact"}
                        onClick={() => setmenuopen(false)}
                        className="Sidemenubutton"
                      >
                        <p>admissioncontact</p>
                      </Link>
                    </div>
                  )}
                  <div
                    className="Sidemenubutton"
                    onClick={() => setreseachopen(!isresearch)}
                  >
                    <p>
                      Research {isresearch ? <FaAngleDown /> : <FaAngleRight />}
                    </p>
                  </div>
                  {isresearch && (
                    <div className="sidemenufinalsub">
                      <Link
                        to={"research-project"}
                        onClick={() => setmenuopen(false)}
                        className="Sidemenubutton"
                      >
                        <p>Projects</p>
                      </Link>
                      <Link
                        to={"research-Community"}
                        onClick={() => setmenuopen(false)}
                        className="Sidemenubutton"
                      >
                        <p> Community activities</p>
                      </Link>
                    </div>
                  )}
                </div>
              )}

              <Link
                to={"Administration"}
                onClick={() => setmenuopen(false)}
                className="Sidemenubutton"
              >
                <p>Administration</p>
              </Link>
              <Link
                to={"Downloads"}
                onClick={() => setmenuopen(false)}
                className="Sidemenubutton"
              >
                <p>Downloads</p>
              </Link>
              <Link
                to={"about"}
                onClick={() => setmenuopen(false)}
                className="Sidemenubutton"
              >
                <p>About-us</p>
              </Link>
              <div onClick={supportclick} className="Sidemenubutton">
                Support
              </div>
            </div>
          )}
          <FaBars
            size={25}
            color="black"
            onClick={() => setmenuopen(!ismenuopen)}
          />
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
                color: selected === "home" ? "white" : "white",
              }}
            >
              <Link to={"home"} className="EachHeaderbutton">
                Home
              
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
                color: selected === "latest" ? "white" : "white",
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
            
            </li>

            <li
              className="EachHeaderbutton"
              onClick={acadamicClicked}
              onMouseEnter={() => setIsAcademy(true)}
              onMouseLeave={() => setIsAcademy(false)}
              style={{
                backgroundColor:
                  selected === "academics" ? "white" : "transparent",
                color: selected === "academics" ? "white" : "white",
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
           
          
            </li>
            <li
              onClick={() => setSelected("library")}
              style={{
                backgroundColor:
                  selected === "library" ? "white" : "transparent",
                color: selected === "library" ? "white" : "white",
              }}
            >
              <Link to={"Administration"} className="EachHeaderbutton">
                Administration
              
              </Link>
            </li>

            <li
              onClick={() => setSelected("calendar")}
              style={{
                backgroundColor:
                  selected === "calendar" ? "white" : "transparent",
                color: selected === "calendar" ? "white" : "white",
              }}
            >
              <Link to={"Downloads"} className="EachHeaderbutton">
                Downloads{" "}
               
              </Link>
            </li>
            <li
              onClick={() => setSelected("about")}
              style={{
                backgroundColor: selected === "about" ? "white" : "transparent",
                color: selected === "about" ? "white" : "white",
              }}
            >
              <Link to={"about"} className="EachHeaderbutton">
                About
               
              </Link>
            </li>
            <li
              onClick={() => setSelected("support")}
              style={{
                backgroundColor:
                  selected === "support" ? "white" : "transparent",
                color: selected === "support" ? "white" : "white",
              }}
            >
              <div onClick={click} className="EachHeaderbutton">
                Support 
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
