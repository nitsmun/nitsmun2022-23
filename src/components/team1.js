import React from "react";
import "./team.css";
import { Secretariat } from "./Dataset";
import Teamjr from "./Teamjr1";
import Underline from "./Underline1";
import Teammediajr from "./Teammediajr1";
import Teamresearchjr from "./Teamresearchjr1";
import Teampr from "./Teampr1";
import Teamweb from "./Teamweb1";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
import Underline2 from "./Underline21";
import { TabTitle } from "./Utils/Genfn";
const team = () => {
  TabTitle("NITSMUN Team | NITS MUN");
  return (
    <>
      <div className="team-head0">
        <h1 className="team-head-h1">Secretariat</h1>
      </div>
      <div className="team-stats-card">
        {Secretariat.map((item) => {
          return (
            <div key={item.id} className="team-stats">
              <div>
                <center>
                  <img
                    className="team-img"
                    src={item.imgsrc}
                    alt=""
                    onContextMenu="return flase;"
                  />
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
                  <a href={item.linkedin} rel="noreferrer" target="_blank">
                    <button className="btn-icon2">
                      <FaLinkedinIn className="icon-color1" size={25} />
                    </button>
                  </a>
                </div>
                <div className="icon3">
                  <a href={item.fb} rel="noreferrer" target="_blank">
                    <button className="btn-icon3">{item.icon0}</button>
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
      <Underline />
      <Teamjr />
      <Teammediajr />
      <Teamresearchjr />
      <Teampr />
      <Teamweb />
    </>
  );
};
export default team;
