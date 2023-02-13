import React from "react";
import "./Director.css";
import Underline from "./Underline";

const Director = () => {
  return (
    <div>
      <div className="msg-secretary dir-2">
        <h2 className="sec-head1" style={{userSelect:'none'}}>Message From The Faculty Advisor</h2>
        <Underline />
        <br />
        <br />
      </div>

      <div className="sec-main1">
        <div className="sec-padding1"></div>
        <div className="dir-imgcon">
          <div className="dir-imge">
            <img
              src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330956865_853335065733840_7097034676603377733_n.jpg?stp=dst-jpg_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=XAp5Z0yBP0QAX9DibhD&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfB9hfVwRAl-5YTmHwUOmlwNLA1EHiGDeY7ADUhG-ogNBg&oe=63EF3BE6"
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
              userSelect:'none'
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
