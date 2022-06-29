import React from "react";
import "./Secretary.css";
import Underline from "./Underline";

const Secretary = () => {
  return (
    <div>
      <div className="msg-secretary">
        <h2 className="sec-head1">Message From The Secretary-General</h2>
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
              fontWeight: "600",
            }}
          >
            Dear delegates,
            <br />
            <br />
            On behalf of my secretariat, with utmost honour and pride, I welcome you all to the annual NIT Silchar Junior Model United Nations conference to be held on 6th and 7th August, 2022.
            <br />
            <br />
            The success of its maiden edition presented us with a challenge to make the second edition even better and bigger. NITS Junior MUN is new venture mainly focused on spreading a culture of healthy and constructive debate among school students and making them aware of world security, economics and politics by acting like delegates from different countries.
            <br />
            <br />
            Due to the relentless efforts of the team every passing year paired with the enthusiastic participants and stellar executive board  members, NITSMUN has been able to carve its own place in the MUN circuit and now stands out as one of the forerunners amongst the NE India MUNs. Through the simulation of the annual conferences and year-round activity for the MUN enthusiasts, NITSMUN continues to uphold its passion and dedication to engage the youth in MUN culture and bring out the best in them.
            <br />
            <br />
            This will be a golden opportunity to expand your knowledge and utilize it in engaging debates and simultaneously build your critical thinking as well as writing skills. You will be able to connect with talented people and learn immensely throughout the process, all from the comfort of your home. To achieve the same you need to do extensive research beforehand and our team has put in every effort to make your research experience smoother and hassle-free by making this background guide as comprehensive as we can. From ROPs to references, the background guide has it all. We look forward to welcoming you and hope you will have an enriching experience!
            {/* Keeping in view the well-being of our participants, we will be
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
            you to our conference this year! */}
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
