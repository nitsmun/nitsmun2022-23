import React from "react";
import "./team.css";
import { Secretariat } from "./Dataset";
import Teamjr from "./Teamjr";
import Underline from "./Underline";
import Teammediajr from "./Teammediajr";
import Teamresearchjr from "./Teamresearchjr";
import Teampr from "./Teampr";
import Teamweb from "./Teamweb";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import Underline2 from "./Underline2";
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
                  {item.icon0}
                </a>
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
