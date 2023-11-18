/** @format */

import React from "react";
import "./Director.css";
import Underline from "./Underline";

const Director = () => {
  return (
    <div>
      <div className="msg-secretary dir-2">
        <h2 className="sec-head1" style={{ userSelect: "none" }}>
          Message From The Faculty Advisor
        </h2>
        <Underline />
        <br />
        <br />
      </div>

      <div className="sec-main1">
        <div className="sec-padding1"></div>
        <div className="dir-imgcon">
          <div className="dir-imge">
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676620670/wasim_20arif_hgdmqj.jpg"
              alt="Dr. Wasim Arif"
              className="dir-img"
            />
            <h2 className="sec-nme">Dr. Wasim Arif</h2>
          </div>
        </div>
        <div className="sec-padding2"></div>
        <div>
          <p
            className="sec-text"
            style={{
              textAlign: "left",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              fontWeight: "500",
              userSelect: "none",
            }}
          >
            <br />
            <br />
            Since its inception NITSMUN has been working hard, trying to build a
            MUNning environment in the college. I personally feel that the
            efforts they put in in each little thing they do is commendable. It
            has been quite some time since I have been connected to this club,
            and this club has never disappointed me. I would love to see this
            club flourishing more and more in the coming years. This time they
            are planning to hold the three days annual conference in an even
            grander manner, with three very exciting and out of the box
            committees. To be held under the banner of Incandescence 2023,
            NITSMUN is all ready to welcome all MUNners and non-MUNners from all
            around the country.
            <br />
            <br />
            To everyone reading this, I would ask you to go through this website
            so that you learn more about this club and about MUNs in general.
            <br />
            <br />
            Regards
            <br />
            Dr. Wasim Arif
            <br />
            Faculty Advisor
            <br />
            NIT Silchar Model United Nations
          </p>
        </div>
        <div className="sec-padding3"></div>
      </div>
    </div>
  );
};

export default Director;
