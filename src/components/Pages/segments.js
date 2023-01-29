import React, { useState } from "react";
import "./articles.css";
import { TabTitle } from "../Utils/Genfn";
import ByBharat from "../ByBharat";
import QuirkyCombats from "../QuirkyCombats";
import Articles0 from "../Articles0";
import DiplomaticDips from "../DiplomaticDips";
import {FaChevronDown} from 'react-icons/fa'
const Segments = () => {
  TabTitle("Segments | NITS MUN");
  const [active, setActive] = useState("By Bharat");

  return (
    <>
      <div className="top-bg-segment" style={{userSelect:'none'}}>
        <h1>Plethora of Content.</h1>
        <h2>Just For You.</h2>
        <a href="#selectorsegment"> <FaChevronDown color="white" className="chevron-down" size={20} style={{userSelect:'none'}} /></a>
      </div>
      <div className="top-segment" id="selectorsegment" style={{userSelect:'none'}}>
        <div className="btn-junior">
          <button className="active btn" onClick={() => setActive("By Bharat")}>
            By Bharat
          </button>
          <button
            className="active btn"
            onClick={() => setActive("Quirky Combats")}
          >
            Quirky Combats
          </button>
          <button
            className="active btn"
            onClick={() => setActive("Diplomatic Dips")}
          >
            Diplomatic Dips
          </button>
          <button className="active btn" onClick={() => setActive("Articles")}>
            Articles
          </button>
        </div>
        {active === "By Bharat" && <ByBharat />}
        {active === "Quirky Combats" && <QuirkyCombats />}
        {active === "Diplomatic Dips" && <DiplomaticDips />}
        {active === "Articles" && <Articles0 />}
      </div>
    </>
  );
};
export default Segments;
