import React, { useEffect } from "react";
import pdf from "../Assets/pdf.pdf";
import logo from "../Assets/pdf.png";
function Downloadpage() {
  return (
    <div className="Downloadpage">
      <div>
        <h1>Downloads</h1>
        <div>
          <a href={pdf} class="my-container">
            <div class="item">
              <div class="icon">
                <img src={logo} alt="Icon" />
              </div>
              <div class="description">
                <h3>Academic Calander</h3>
                <p>2023 G.C Academic Calander</p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href={pdf} class="my-container">
            <div class="item">
              <div class="icon">
                <img src={logo} alt="Icon" />
              </div>
              <div class="description">
                <h3>Rules and Regulations</h3>
                <p>2023 G.C </p>
              </div>
            </div>
          </a>
        </div>
        <div>
          <a href={pdf} class="my-container">
            <div class="item">
              <div class="icon">
                <img src={logo} alt="Icon" />
              </div>
              <div class="description">
                <h3>ADMISSION FORMS</h3>
                <p></p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Downloadpage;
