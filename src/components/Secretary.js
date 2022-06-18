import React from "react";
import "./Secretary.css";
import Underline from "../components/Underline";

const Secretary = () => {
  return (
    <div>
      <div className="msg-secretary">
        <h2 className="sec-head1">Message from the Secretary-General</h2>
        <Underline />
        <br />
        <br />
      </div>

      <div className="sec-main">
        <div className="sec-padding1"></div>
        <div className="sec-imgcon">
          <div>
            <img
              src="./Images\shreyashiRoymedhi.jpeg"
              alt="shreyashi Roymedhi"
              className="sec-img"
            />

            <h2 className="sec-nme">Shreyashi Roymedhi</h2>
          </div>
        </div>
        <div className="sec-padding2"></div>
        <div>
          {/* <div className="msg-secretary">
            <h2 className="sec-head1">Message from the Secretary-General</h2>   
            <Underline />
            <br />
            <br />
          </div> */}

          <p
            className="sec-text"
            style={{
              textAlign: "justify",
              fontSize: "1.1rem",
              lineHeight: "1.6",
              fontWeight: "500",
            }}
          >
            Greetings delegates,
            <br />
            <br />
            On behalf of my secretariat, it is my utmost honour and pride to
            welcome you all to the NIT Silchar Model United Nations.
            <br />
            <br />
            Since its inception in 2014, NITSMUN has grown in every aspect,
            ranging from the number of participants to the scale of our
            conference. From holding annual conferences, workshops, mock
            sessions, we have even collaborated with world-class universities to
            hold conferences for students all around the world.
            <br />
            <br />
            NITSMUN offers a platform to shape the participants into an
            individual with a voice and make the leaders of tomorrow. I can
            assure, this conference will not only benefit you academically but
            will help you meet strong individuals like yourself, help you
            sharpen your debating, presentation, deliberative, and interpersonal
            skills along the way. Gear up to solve critical and pressing issues
            of today and indulge yourself in world-changing debates, throughout
            your experience.
            <br />
            <br />
            Keeping in view the well-being of our participants, we will be
            holding our conferences online. For general assistance and business
            and sponsorship-related queries, you can mail our secretariat
            at&nbsp;
            <a
              href="mailto:team.nitsmun@gmail.com"
              style={{ color: "#732445", textDecoration: "none" }}
            >
              team.nitsmun@gmail.com
            </a>
            .
            <br />
            <br />
            Wishing you the best of your luck and we look forward to welcoming
            you to our conference this year!
            <br />
            <br />
            Best Regards,
            <br />
            Shreyashi Roymedhi
            <br />
            Secretary-General
            <br />
            NIT Silchar Model United Nations
          </p>
        </div>
        <div className="sec-padding3"></div>
      </div>
    </div>
  );
};

export default Secretary;
