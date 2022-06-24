import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import { TabTitle } from "../Utils/Genfn";
const NotFound = () => {
  TabTitle("404 Not Found");
  return (
    <>
      <div className="not-found">
        <div className="no-existence">
          <h1 className="no-existence1"> 404</h1>
        </div>
        <div className="not-found-text">
          <h1>Whoops, page not found</h1>
          <h2>We can’t seem to find the page you’re looking for</h2>
        </div>
        {/* <div className="notfound-tohome">
          <Link className="tohome" to="/">
            <hi className="to-home">Go to Homepage.</hi>
          </Link>
        </div> */}
        <Link className="tohome" to="/"><button className="notfound-tohome">Go to Homepage</button></Link>
      </div>
    </>
  );
};
export default NotFound;
