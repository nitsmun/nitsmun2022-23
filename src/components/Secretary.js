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

        <div>
          <p
            className="sec-text"
            style={{
              textAlign: "left",
              fontSize: "1.2rem",
              lineHeight: "1.6",
              fontWeight: "500",
            }}
          >
            Dear delegates,
            <br />
            <br />
            On behalf of my secretariat, with utmost honour and pride, I welcome you all to the 10th edition of NIT Silchar Model United Nations Annual Conference.
            <br />
            <br />
            The success of its maiden edition presented us with a challenge to make the upcoming edition even better and bigger.
            <br />
            <br />
            Due to the relentless efforts of the team every passing year paired with the enthusiastic participants and stellar executive board  members, NITSMUN has been able to carve its own place in the MUN circuit and now stands out as one of the forerunners amongst the NE India MUNs. Through the simulation of the annual conferences and year-round activity for the MUN enthusiasts, NITSMUN continues to uphold its passion and dedication to engage the youth in MUN culture and bring out the best in them.
            <br />
            <br />
            This will be a golden opportunity to expand your knowledge and utilize it in engaging debates and simultaneously build your critical thinking as well as writing skills. You will be able to connect with talented people and learn immensely throughout the process, all from the comfort of your home. To achieve the same you need to do extensive research beforehand and our team has put in every effort to make your research experience smoother and hassle-free by making this background guide as comprehensive as we can. From ROPs to references, the background guide has it all. We look forward to welcoming you and hope you will have an enriching experience!
            <br />
            <br />
            Best Regards,
            <br />
            Shreyashi Roymedhi
            <br />
            Secretary General
            <br />
            NIT Silchar Model United Nations
          </p>
        </div>

        <div className="sec-imgcon"></div>

        <div className="sec-padding2"></div>

        <div className="sec-imge">
          <img
            src="./Images/Shreyashi_Roymedhi_MUN.jpg"
            alt="shreyashi Roymedhi"
            className="sec-img"
          />
          <h2 className="sec-nme">Shreyashi Roymedhi</h2>
        </div>

        <div className="sec-padding3"></div>
      </div>
    </div>
  );
};

export default Secretary;
