import React from "react";
import "./home.css";
import Director from "../Director";
import Slider from "../Slider/Slider";
import { TabTitle } from "../Utils/Genfn";
import Secretary from "../Secretary";
import Timer from "../Timer";
import Hometop from "../Hometop";
import ArticleHome2 from "../ArticleHome21";

const home = () => {
  TabTitle("NITS MUN");
  return (
    <>
      <div>
        <Hometop />
        <Timer />
      </div>
      <br />
      <br />
      <Director />
      {/* <br/>
      <br/> */}
      <Secretary />
      <div className="glimpses-section">
        <div className="glimpses">
          <h1>GLIMPSES FROM PAST CONFERENCES</h1>
        </div>
        <Slider />
      </div>
      <ArticleHome2 />
      <br />
    </>
  );
};
export default home;
