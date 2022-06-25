import React from "react";
import "./Teamresearchjr.css";
import { Secretariatresearchjr } from "./Dataset";

import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Underline2 from "./Underline2";
const Teamresearchjr = () => {
  return (
    <>
      <div className="team-head3">
        <h1 className="team-head-h1">Research & Development Team</h1>
      </div>
      <div className="team-stats-card3">
        {Secretariatresearchjr.map((item) => {
          return (
            <div key={item.id} className="team-stats3">
              <div>
                <center>
                  <img className="team-img3" src={item.imgsrc} alt="" />
                </center>
              </div>

              <div className="social-media">
                <a href={item.mail}>
                  <button className="btn-icon1">
                    <HiOutlineMail className="icon-color" size={30} />
                  </button>
                </a>

                <a href={item.linkedin} rel="noreferrer" target="_blank">
                  <button className="btn-icon2">
                    <FaLinkedinIn className="icon-color1" size={25} />
                  </button>
                </a>

                <a href={item.fb} rel="noreferrer" target="_blank">
                  <button className="btn-icon3">
                    <FaFacebookF className="icon-color2" size={25} />
                  </button>
                </a>
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
};
export default Teamresearchjr;
