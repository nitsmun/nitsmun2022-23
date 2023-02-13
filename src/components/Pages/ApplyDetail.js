import React from "react";
import { apply } from "../Dataset";
import { useParams, Link } from "react-router-dom";
import Helmet from "react-helmet";

const ApplyDetail = () => {
  const { id } = useParams();

  return (
    <>
      {apply
        .filter((item) => item.id === id)
        .map((item) => (
          <>
            <Helmet>
              <title>{item.Title}</title>
            </Helmet>
            <div className="apply-container">
              <div className="img-apply">
                <center>
                  <img src="https://svgshare.com/i/qDd.svg" alt="NITSMUN" />
                </center>
              </div>

              <div className="apply-display">
                <h2 className="msg-apply"> {item.msg}</h2>
                <br />
                <br />
                <Link to="/apply">
                  <button className="read-more-btn">Go Back</button>
                </Link>
                <br />
                <br />
              </div>
            </div>
          </>
        ))}
    </>
  );
};

export default ApplyDetail;
