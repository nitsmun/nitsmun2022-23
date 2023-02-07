import React from "react";
import "./Hometop.css";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import 'react-typed/dist/animatedCursor.css';
const Hometop = () => {
  return (
    <div style={{ userSelect: "none" }}>
      <div className="hometop-main">
        <a href="https://incand.in" target="_blank" rel="norefferer">
          <div className="incand-logo">
            <img src="./Images/homeTop/incand-logo-MUN.svg" alt="" />
          </div>
        </a>

        <div className="incand-ad">
          <h1>Presents</h1>
        </div>
        <div className="hometop-img">
          <img src="./Images/nitsmun-logo.svg" alt="NITSMUN" />
        </div>
      </div>

      <div className="dte-nitsmun2k23">
        {/* <h1>17 . 18 . 19 Feb 2023</h1> */}
        <Typed
          className="typewriter-hero" style={{ userSelect: 'none' }}
          strings={[
            "17 . 18 . 19 February 2023",
          ]}
          typeSpeed={80}
          loop={false}
          showCursor={false}
        />
      </div>

      <div className="home-wrapped">
        <Link to="/wrapped">
          <img
            src="./Images/wrapped2022/wrapping up-min.png"
            alt="Wrapped 2022"
          />
        </Link>
      </div>

      <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            <span style={{ color: "rgb(45, 210, 255)" }} className="home-bner">Nitsmun Annual Conference 2023</span>{" "}
            {/* And{" "}
            <span style={{ color: "rgb(45, 210, 255)" }} className="home-bner">Executive Board </span> */}
            Registration Is Now Open!
            <img className="tnew-gif" src="./Images/tnew.gif" alt="" />
          </ul>
        </div>
        <div className="hometop-link1">
          <Link to={"/apply"}>
            <button className="hometop-link1btn">Register Now!</button>
          </Link>
        </div>
      </div>

      <div className="annual-2023-poster">
        <img
          src="./Images/nitsmun2023 poster.jpg"
          alt="2023 Annual Conference Promotion"
        />
      </div>
    </div>
  );
};

export default Hometop;
