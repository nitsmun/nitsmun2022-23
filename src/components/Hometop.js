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
      <Link to='/wrapped'>
            <img src="./Images/wrapped2022/wrapping up 2022 button.png" alt="Wrapped 2022" />
          </Link>
        </div>


      <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            New{" "}
            <span style={{ color: "rgb(45, 210, 255)" }}>
              Segments
            </span>{" "}
            are out!
          </ul>
        </div>
        <div className="hometop-link1">
          <Link to={"/segments"}>
            <button className="hometop-link1btn">Check Them Now!</button>
          </Link>
        </div>
      </div>


    </div>
  );
};

export default Hometop;
