import React from "react";
import "./apply.css";
import { TabTitle } from "../Utils/Genfn";

import { Link } from "react-router-dom";
import { apply } from "../Dataset";

const Apply = () => {
  TabTitle("Link Tree | NITS MUN");

  return (
    <>
      <div className="apply-container">
        <div className="img-apply">
          <center>
            <img src="./Images/nitsmun-logo.svg" alt="NITSMUN" />
          </center>
        </div>

        {apply.map((item) => {
          return (
            <>
              <Link to={`/application/${item.id}`}>
                <button className="application-btn">{item.btnname}</button>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Apply;
