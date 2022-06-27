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

      <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            Round 1 Registrations for{" "}
            <strong style={{ color: "rgb(45, 210, 255)" }}>
              Junior Mun 2022
            </strong>{" "}
            and Application for{" "}
            <strong style={{ color: "rgb(45, 210, 255)" }}>
              Executive Board
            </strong>{" "}
            is now open!
          </ul>
        </div>
        <div className="hometop-link1">
          <Link to={"/apply"}>
            <button className="hometop-link1btn">Register Now</button>
          </Link>
        </div>
      </div>


    </div>
  );
};

export default Hometop;
