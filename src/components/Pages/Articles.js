import React from "react";
import "./Articles.css";
import ReactReadMoreReadLess from "react-read-more-read-less";
import { TabTitle } from "../Utils/Genfn";
import { Articledata } from "../Dataset";
import Underline3 from "../Underline/Underline3";
export default function () {
  TabTitle("NITSMUN >> Articles");
  return (
    <>
      <div className="articles-heading-cont">
        <h1>ARTICLES</h1>
      </div>
      <div className="article-main-content">
        {Articledata.map((item) => {
          return (
            <div className="article-container" key={item.id}>
              <div className="article-content">
                <h1>{item.Title}</h1>
              </div>
              <div className="article-flexing">
                <div className="img-holder">
                  <img src={item.Artimg} alt={item.Alt} />
                </div>
                <div className="content-holder">
                  <div className="post-date">
                    <h3>{item.Date}</h3>
                  </div>
                  <div className="article-cont1">
                    <ReactReadMoreReadLess
                      charLimit={500}
                      readMoreText={
                        <button className="read-more-btn">Read More</button>
                      }
                      readLessText={
                        <button className="read-less-btn">Read Less</button>
                      }
                    >
                      {item.Content}
                    </ReactReadMoreReadLess>
                  </div>
                </div>
              </div>
              <Underline3 />
            </div>
          );
        })}
      </div>
      <div className="art-home-title">
        <h1 className="apply-home-h1">
          CHECK OUT{" "}
          <a href="https://instagram.com/nitsmun" target="_blank">
            @nitsmun
          </a>{" "}
          FOR ALL OUR ARTICLES!
        </h1>
      </div>
    </>
  );
}
