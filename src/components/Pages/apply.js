import React, { useState, useEffect } from "react";
import "./apply.css";
import { TabTitle } from "../Utils/Genfn";
import Loading from "../Loading";
const Apply = () => {
  TabTitle("Link Tree | NITS MUN");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 200);
  }, []);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <>
      <div className="apply-container">
        <div className="img-apply">
          <center>
            <img src="./Images/nitsmun-logo.svg" alt="NITSMUN" />
          </center>
        </div>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeU9fIV-yT7UdGORPqE3uPUV_miDt8XF_ySj3TbZ55cYSKwqg/viewform"
          rel="noreferrer"
          target="_blank"
        >
          Link For Round 2 Registrations For NITSMUN Junior Mun 2022!
        </a>

        {/* <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfdZRZcI0T4z9SrjLjZNk59s4wi-35lOVqeXJkE34mIbyqsbA/viewform?pli=1"
          rel="noreferrer"
          target="_blank"
        >
          Link For Executive Board For NITSMUN Junior Mun 2022!
        </a> */}

        <a
          href="https://forms.gle/tGVReDKBLACxzayY6"
          rel="noreferrer"
          target="_blank"
        >
          Link For Free Workshop And Mock Mun For NITSMUN Junior Mun 2022!
        </a>
      </div>
    </>
  );
};
export default Apply;
