import React from "react";
import "./Articlehome2.css";
import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import "./Article-home.css";
import { Articleforhome } from "./Dataset";
// import useCollapse from "react-collapsed";
import Underline3 from "../components/Underline/Underline3";
export default function () {
  //   const [isExpanded, setExpanded] = useState(false);
  //   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <Underline3 />
      <div className="art-home-title">
        <h1 className="apply-home-h1">
          CHECK OUT{" "}
          <a href="https://instagram.com/nitsmun" target="_blank">
            @nitsmun
          </a>{" "}
          FOR ALL OUR ARTICLES!
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
                <Link to={"/Articles"}>
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
}
