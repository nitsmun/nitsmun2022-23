import React from "react";
import "./apply.css";
import { TabTitle } from "../Utils/Genfn";
const apply = () => {
  TabTitle("Link Tree | NITS MUN");
  return (
    <>
      <div className="apply-container">
        <div className="img-apply">
          <center>
            <img src="./Images/logo-nitsmun.png" alt="NITSMUN" />
          </center>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeU9fIV-yT7UdGORPqE3uPUV_miDt8XF_ySj3TbZ55cYSKwqg/viewform" rel="noreferrer" target="_blank"
        >
          Link for Early Bird Registrations for NITSMUN Junior MUN 2022
        </a>
      </div>
    </>
  );
};
export default apply;
