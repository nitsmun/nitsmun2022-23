import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <>
      <div className="dotdotload">
        <div className="loading-8">
          <h1 className="load-name">Fetching Data...</h1>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Loading;

