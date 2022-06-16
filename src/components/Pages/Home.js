import React from "react";
import "./Home.css";
import Director from "../Director";
import Slider from "../Slider/Slider";
import ArticleHome from "../ArticleHome";

export default function () {
  return (
    <>
      <div className="dummy">
        <h1>hello</h1>
      </div>
      <br />
      <br />
      <br />
      <div className="glimpses-section">
        <div className="glimpses">
          <h1>GLIMPSES FROM PAST CONFERENCES</h1>
        </div>
        <Slider />
      </div>
      <ArticleHome />
      <br />
    </>
  );
}
