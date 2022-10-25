import React, { useState } from "react";
import "./articles.css";
import { TabTitle } from "../Utils/Genfn";
import ByBharat from "../ByBharat";
import QuirkyCombats from "../QuirkyCombats";
import Articles0 from "../Articles0";
const Segments = () => {
  TabTitle("Segments | NITS MUN");
  const [active, setActive] = useState("Articles");

  return (
    <>
      <div className="top-bg-segment">
      <h1>Plethora of Content.</h1>
      <h2>Just For You.</h2>
        
      </div>
      <div className="top-segment">
      <div className="btn-junior">
        <button className="active btn" onClick={() => setActive("Articles")}>
          Articles
        </button>
        <button className="active btn" onClick={() => setActive("By Bharat")}>
          By Bharat
        </button>
        <button
          className="active btn"
          onClick={() => setActive("Quirky Combats")}
        >
          Quirky Combats
        </button>
      </div>
      {active === "Articles" && <Articles0 />}
      {active === "By Bharat" && <ByBharat />}
      {active === "Quirky Combats" && <QuirkyCombats />}
      </div>
    </>
  );
};
export default Segments;
