import React from "react";
import "./Apply.css";
export default function () {
  return (
    <>
      <div className="apply-container">
        <div className="img-apply">
          <center>
            <img src="./Images/logo-nitsmun.png" alt="" />
          </center>
        </div>
        <div className="link-apply">
          <button className="apply-btn">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeU9fIV-yT7UdGORPqE3uPUV_miDt8XF_ySj3TbZ55cYSKwqg/viewform"
              target="blank"
            >
              Link for Junior MUN 2022
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
