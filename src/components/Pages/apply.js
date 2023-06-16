import React from "react";
import "./apply.css";
import { TabTitle } from "../Utils/Genfn";

import { Link } from "react-router-dom";
import { apply } from "../Dataset";
import Recruiting from "./Recruitment2324/Recruiting";

const Apply = () => {
  TabTitle("Recruiting | NITS MUN");

  return (
    <>
      {/* <div className="apply-container">
        <div className="img-apply">
          <center>
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676474853/events/nitsmun/nitsmun-logo_tdkzbf.svg" alt="NITSMUN" />
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
      </div> */}
      <Recruiting />
    </>
  );
};
export default Apply;
