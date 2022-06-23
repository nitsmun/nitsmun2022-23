import React from "react";
import "./Teamweb.css";
import { Secretariatwebjr } from "./Dataset";

import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { ImGithub } from "react-icons/im";
import Underline2 from "./Underline2";
export default function () {
  return (
    <>
      <div className="team-head5">
        <h1 className="team-head-h1">Web Development Team</h1>
      </div>
      <div className="team-stats-card5">
        {Secretariatwebjr.map((item) => {
          return (
            <div key={item.id} className="team-stats5">
              <div>
                <center>
                  <img className="team-img5" src={item.imgsrc} alt="" />
                </center>
              </div>

              <div className="social-media">
                <div className="icon1">
                  <a href={item.mail}>
                    <button className="btn-icon1">
                      <HiOutlineMail className="icon-color" size={25} />
                    </button>
                  </a>
                </div>
                <div className="icon2">
                  <a href={item.linkedin} target="_blank">
                    <button className="btn-icon1">
                      <FaLinkedinIn className="icon-color1" size={25} />
                    </button>
                  </a>
                </div>
                <div className="icon3">
                  <a href={item.fb} target="_blank">
                    <button className="btn-icon1">{item.icon0}</button>
                  </a>
                </div>
              </div>

              <h1>{item.name}</h1>
              <Underline2 />
              <h2 className="team-posting-sec">{item.post}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
