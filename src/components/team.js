import React, { useState, useEffect } from "react";
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
import Loading from "./Loading";

const Team = () => {
  TabTitle("NITSMUN Team | NITS MUN");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 100);
  }, []);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <div className="secre-pic">
        <img
          src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330815748_902749757439595_2309249886487204672_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=XltEZ9K5cnQAX_LYGRE&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAFxvwech8YGJKKp8cfRRXNpyAgg5J-x0qz2EYVjYtlyQ&oe=63EE7AE7"
          alt="NITS Secretariat"
        />
      </div>
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
      <Teamresearchjr />
      <Teampr />
      <Teammediajr />
      <Teamweb />
    </>
  );
};
export default Team;
