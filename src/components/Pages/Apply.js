import React from "react";
import "./Apply.css";
import { TabTitle } from "../Utils/Genfn";
export default function () {
  TabTitle("NITSMUN >> Link Tree");
  return (
    <>
      <div className="apply-container">
        <div className="img-apply">
          <center>
            <img src="./Images/logo-nitsmun.png" alt="NITSMUN" />
          </center>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeU9fIV-yT7UdGORPqE3uPUV_miDt8XF_ySj3TbZ55cYSKwqg/viewform"
          target="_blank"
        >
          Link for Early Bird Registrations for NITSMUN Junior MUN 2022
        </a>
      </div>
    </>
  );
}
