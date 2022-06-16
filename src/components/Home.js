import React from "react";
import './Home.css';
import Director from "./Director";
import Slider from "./Slider/Slider";
import ArticleHome from "./Article-home";
export default function() {
  return(
    <>
    <div className="dummy">
      <h1>hello</h1>
    </div>
    <Slider />
    <br/>
    <br/>
    <ArticleHome />
    <br/>
    <br/>
    </>
  )
}
