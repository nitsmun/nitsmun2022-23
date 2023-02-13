import React from "react";
import "./Hometop.css";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
const Hometop = () => {
  return (
    <div style={{ userSelect: "none" }}>
      <div className="hometop-main">
        <a href="https://incand.in" target="_blank" rel="norefferer">
          <div className="incand-logo">
            <img src="https://svgshare.com/i/qFT.svg" alt="" />
            {/* <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330789814_1330772101100144_692698332556843342_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=vJtf5_90OGQAX8t219t&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDGjdu7ihYCrtLgNIg-fdFOeZ_a-08QRlNRvIw1O7Yb3A&oe=63EF5D80" alt="" /> */}
          </div>
        </a>

        <div className="incand-ad">
          <h1>Presents</h1>
        </div>
        <div className="hometop-img">
          <img src="https://svgshare.com/i/qDd.svg" alt="NITSMUN" />
        </div>
      </div>

      <div className="dte-nitsmun2k23">
        {/* <h1>17 . 18 . 19 Feb 2023</h1> */}
        <Typed
          className="typewriter-hero"
          style={{ userSelect: "none" }}
          strings={["17 . 18 . 19 February 2023"]}
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
            <h2 className="ipc-jour-prom">
              Photographs let you live the best memories over and over again
            </h2>
            <span style={{ color: "rgb(45, 210, 255)" }} className="home-bner">
              Photo Journalism - International Press Corps (IPC)
            </span>{" "}
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
          src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/325767124_6231249770240462_3359318043356229049_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=OVrKzFpGia8AX9kfhQA&tn=4LMS0JUT-q81qyRv&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCTBs87JIotpAjWCdIlmKLTYptBUcY2y5k-QuNaXvYKZA&oe=63EED60B"
          alt="2023 Annual Conference Promotion"
        />
      </div>
    </div>
  );
};

export default Hometop;
