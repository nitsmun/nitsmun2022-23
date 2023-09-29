import React from "react";
import "./Secretary.css";
import Underline from "./Underline";

const Secretary = () => {
  return (
    <div>
      <div className="msg-secretary">
        <h2 className="sec-head1" style={{ userSelect: 'none' }}>Message From The Secretary-General</h2>
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
              userSelect: 'none',
              overflow: 'wrap'
            }}
          >
Merci,<br/>
Dear Readers,<br/>
            It is of utmost pride and honour to be the Secretary General of this esteemed Secretariat for this year and more prestigious to host you as our keen readers.<br/><br/>

            NITSMUN, since its inception in 2014 has always believed in striving for peace with ink and voice. With great support from our concerned members, we have hosted numerous conferences, multiple events and workshops, hosting 1000+ delegates and a family of 10k+ members on our Social Media handles.<br/><br/>

            This upcoming year, we are very keen to host numerous events and workshops to boost and strengthen the voice of our flying delegates who are ready to roar on the matters of global concern, and more importantly solve for forthcoming generations. Notable episodes include the first inaugural Youth Parliament in November (2023), the 11th edition of of our flagship Annual Conference in February (2024), and a dedicated ‘diplomacy’ week comprising of various events such as debates, extempore, quiz, G20-simulation and many more to comprehend geopolitical matters and develop the instinct to solve them with dialogues.<br/><br/>

            On behalf of my Secretariat, I welcome you all on this journey of youthful explorations, solving critical concerns, and more importantly voicing your zeal for peace. Ending my envelope with a notion: it takes billions of pounds to stock the weapons, millions of lives to victimise in wars, thousands of soldiers to fight a battle, but only one pen to hunch the harmony!
            <br /><br />
            Thank you for reading!<br />
            Maruf Padaya <br />
            Secretary General, <br />
            NITSMUN(2023-24)<br />
          </p>
        </div>

        <div className="sec-imgcon"></div>

        <div className="sec-padding2"></div>

        <div className="sec-imge">
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676476439/events/nitsmun/team/marufPadaya_faj39h.jpg"
            alt="Maruf Padaya"
            className="sec-img"
          />
          <h2 className="sec-nme">Maruf Padaya</h2>
        </div>

        <div className="sec-padding3"></div>
      </div>
    </div>
  );
};

export default Secretary;
