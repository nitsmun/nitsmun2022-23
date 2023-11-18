/** @format */

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
  const [loaded, setIsLoaded] = useState(false);

  const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
  };

  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);
    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });

    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 100);
  }, []);

  if (isFetching) {
    return <Loading />;
  }

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };

  return (
    <>
      <div className="secre-pic">
        <img
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676607917/nitsmun/team_top_lnrjpn.jpg"
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
                    src={""}
                    data-src={item.imgsrc}
                    className={`${loaded ? "loaded" : "loading"} team-img`}
                    onLoad={() => setIsLoaded(true)}
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
