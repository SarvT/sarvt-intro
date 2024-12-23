import React from "react";

interface ServicesProps {
    colour: string;
  }

export const Services:React.FC<ServicesProps> = ({colour}) => {
  return (
    <div>
      <div className="main-ser" 
      style={{color:`${!colour}`}}
      >
        <div className="ser1">
          <div className="ser-main">
            <h4>My Domain</h4>
            <div className="sub-line"></div>
            <p>I use the tools to craft solutions.</p>
          </div>
          <div className="ser-sub">
            <ul>
              <li>App Developement</li>
              <li>Web Developement</li>
              <li>Research</li>
              <li>UI/UX Designing</li>
              <li>Graphics</li>
            </ul>
          </div>
        </div>

        <div className="ser1">
          <div className="ser-main">
            <h4>In-hand Technologies</h4>
            <div className="sub-line"></div>
            <p>I use the tools to craft solutions.</p>
          </div>
          <div className="ser-sub">
            <ul>
              <li>Kotlin</li>
              <li>ReactJs</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
              <li>Python</li>
              <li>HTML/CSS</li>
            </ul>
          </div>
        </div>

        <div className="ser1">
          <div className="ser-main">
            <h4>My Tool bag</h4>
            <div className="sub-line"></div>
            <p>I use the tools to craft solutions.</p>
          </div>
          <div className="ser-sub">
            <ul>
              <li>Android Studio</li>
              <li>Figma</li>
              <li>VSCode</li>
              <li>Git</li>
              <li>Github</li>
              <li>Power BI</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
