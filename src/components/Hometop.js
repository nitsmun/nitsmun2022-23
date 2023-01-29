import React from "react";
import "./Hometop.css";
import { Link } from "react-router-dom";
const Hometop = () => {
  return (
    <div>
      <div className="hometop-main">
        <div className="hometop-img">
          <img src="./Images/nitsmun-logo.svg" alt="NITSMUN" />
        </div>
      </div>

      <div className="home-wrapped">
        <Link to="/wrapped">
          <img
            src="./Images/wrapped2022/wrapping up 2022 button.png"
            alt="Wrapped 2022"
          />
        </Link>
      </div>

      

      <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            {/* <span style={{ color: "rgb(45, 210, 255)" }} className="home-bner">Mock Mun 2023</span>{" "} */}
            {/* And{" "} */}
            <span style={{ color: "rgb(45, 210, 255)" }} className="home-bner">Executive Board </span>
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
