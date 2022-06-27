import React from "react";
import "./Articlehome2.css";
import { Link } from "react-router-dom";
import { Articleforhome } from "./Dataset";
import Underline3 from "./Underline/Underline3";
const Articlehome2 = () => {
  return (
    <>
      <Underline3 />
      <div className="art-home-title">
        <h1 className="apply-home-h1">
          Check Out{" "}
          <a
            href="https://instagram.com/nitsmun"
            rel="noreferrer"
            target="_blank"
          >
            @nitsmun
          </a>{" "}
          For All Our Articles!
        </h1>
      </div>
      <div className="tea0">
        {Articleforhome.map((item) => {
          return (
            <div key={item.id} className="team-section">
              <img src={item.img} alt={item.alt2} />
              <div className="team-section-body">
                <h2>{item.heading}</h2>
                <p>{item.para}</p>
                <Link to={"/articles"}>
                  {" "}
                  <button className="article-home-btn">Read More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Articlehome2;
