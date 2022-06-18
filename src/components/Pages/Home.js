import React from "react";
import "./Home.css";
import Director from "../Director";
import Slider from "../Slider/Slider";
import ArticleHome from "../ArticleHome";
import { TabTitle } from "../Utils/Genfn";
import Secretary from "../Secretary";
import Timer from '../Timer'

export default function () {
  TabTitle("NITSMUN >> Home");
  return (
    <>
      <div className="dummy">
        <h1>hello</h1>
      </div>
      <br />
      <br />
      <Timer />
      <Director />
      <Secretary />
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
