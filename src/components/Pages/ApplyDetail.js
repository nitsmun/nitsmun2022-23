import React from "react";
import { apply } from "../Dataset";
import { TabTitle } from "../Utils/Genfn";
import { useParams, Link } from "react-router-dom";

const ApplyDetail = () => {
  TabTitle("Applications | NITS MUN");
  const { id } = useParams();

  return (
    <>
      {apply
        .filter((item) => item.id === id)
        .map((item) => (
          <>
            <div className="apply-container">
              <div className="img-apply">
                <center>
                  <img src="../Images/nitsmun-logo.svg" alt="NITSMUN" />
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
