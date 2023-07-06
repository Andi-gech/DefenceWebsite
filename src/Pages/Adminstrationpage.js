import React from "react";
import { useMediaQuery } from "react-responsive";

function Adminstrationpage() {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="Adminstrationpage">
      <h1>Hierarchy</h1>
      <div
        class="container"
        style={{ flexDirection: isTabletOrMobile ? "column-reverse" : "23vw" }}
      >
        <div class="column-container">
          <h3>Commandant Office</h3>
          <div
            class="column"
            style={{ width: isTabletOrMobile ? "95vw" : "23vw" }}
          >
            <ul>
              <li>About President Office</li>
              <li>Legal service directorate</li>
              <li>Women and community affairs</li>
              <li>Plan, Information and budget directorate</li>
              <li>ict infrastructure and information technology directorate</li>
              <li>Public and international relation and alumni directorate</li>
              <li>change and good governace directorate</li>
              <li>Ethics and anti-corruption Directorate</li>
              <li>Internal audit service directorate</li>
            </ul>
          </div>
        </div>
        <div
          class="column-container"
          style={{ width: isTabletOrMobile ? "80vw" : "23vw" }}
        >
          <h3>Acadamic VP Office</h3>
          <div class="column">
            <ul>
              <li>Administration Vice President</li>
              <li>Human Resource Development</li>
              <li>Finance Administration</li>
              <li>Procurement Administration</li>
              <li>General Service</li>
              <li>Campus Security and Safety</li>
              <li>Resource Development and income generation</li>
              <li>Housing Administration Directorate</li>
              <li>Engineering services</li>
              <li>Administration Vice President Directorate</li>
            </ul>
          </div>
        </div>
        <div
          class="column-container"
          style={{ width: isTabletOrMobile ? "65vw" : "23vw" }}
        >
          <h3>Research and Technology transfer vp office</h3>
          <div class="column">
            <ul>
              <li>Research and technology transfer Vice President</li>
              <li>Research and Publication directorate</li>
              <li>Community Engagement Directorate</li>
              <li>Technology transfer and industry linkage directorate</li>
              <li>Disability research and service directorate</li>
              <li>Community school</li>
            </ul>
          </div>
        </div>
        <div
          class="column-container"
          style={{ width: isTabletOrMobile ? "50vw" : "23vw" }}
        >
          <h3>Academic VP office</h3>
          <div class="column">
            <ul>
              <li>Abcademic Vice President</li>
              <li>Academic Program Director</li>
              <li>Postgraduate Directorate</li>
              <li>Continuing & Distance Education Directorate</li>
              <li>Education Quality Assurance audit Directorate</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminstrationpage;
