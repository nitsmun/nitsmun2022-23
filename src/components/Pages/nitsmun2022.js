import React from "react";
import "./nitsmun2022.css";
import { TabTitle } from "../Utils/Genfn";
import Underline from "../Underline";
import Slider from "../Slider/Slider";
import "./home.css";
const nitsmun2022 = () => {
  TabTitle("NITSMUN 2022 | NITSMUN");

  return (
    <div style={{ background: "rgba(137, 255, 230, 0.2)" }}>
      {/* <div className="nm22-bgpic">
        <img src="./Images/annualConf.jpeg" alt="NITS MUN 2022" />
      </div> */}
      <div className="nm22-head">
        <h1>NITSMUN 2022</h1>
        <Underline />
      </div>
      <div className="nm22-body1">
        After conducting numerous conferences, both online and offline, and
        hosting delegates from different schools and colleges from across the
        country, NITSMUN is all set for its conference scheduled to be held on
        the 12 and 13 March, 2022. Owing to the current situation, this
        conference will be conducted online, giving a chance to students from
        any nook and corner of the country or around the world to participate.
        <br />
        <br />
        {/* <br /> */}
        We will be having three committees this year:
        <br />
        <br />
        UNSC (United Nations Security Council), with the agenda{" "}
        <b>
          “The Occupation of major water ways for strong military presence
          overseas and it's impact on overseas trade”
        </b>
        .
        <br />
        <br />
        UNEP (United Nations Environment Programme), with the agenda{" "}
        <b>
          “Eliminating the domestic and international trafficking and illegal
          trade of wildlife
        </b>
        ”.
        <br />
        <br />
        IPC (International Press Corps) which will allow participants to act as
        unbiased journalists, reporting on the proceedings of each simulation in
        the Conference. They will get a chance to investigate committee debates,
        conduct interviews, edit articles, and cover press conferences.{" "}
        <b>
          "If you prefer writing over speaking, be a member of the International
          Press and keep a check on the delegates!"
        </b>
        <br />
        <br />
      </div>
      <br />
      <div className="nm22-agenda">
        <div className="nm22-agendaimgcon1">
          {" "}
          <img
            src="./Images/UNSCbg12022.jpg"
            alt="NITSMUN 2022"
            className="nm22-agendaimg1"
          />
        </div>
        <div className="nm22-agendaimgcon1">
          <img
            src="./Images/UNEPbg12022.jpg"
            alt="NITSMUN 2022"
            className="nm22-agendaimg1"
          />
        </div>
      </div>
      <div className="nm222-agendaimgcon2">
        <img
          src="./Images/international_press.jpg"
          alt="NITSMUN 2022"
          className="nm22-agendaimg2"
        />
      </div>
      <br />
      <br />

      <div className="nm22-body2">
        <div>
          The theme for the year is <b>“Nous voyons notre avenir”</b>, French
          for <b>“We see our future”</b>. The pandemic has made us realise that
          if we don't work together, we won't be able to go ahead. We are our
          future, and until all of humanity comes together, it will be
          impossible to make this planet liveable.
        </div>
        <br />
        <br />
      </div>
      <div className="nm22-exemain">
        <div className="nm22-exmainhead">
          <h1>Executive Board</h1>
          <Underline />
        </div>

        <div className="nm22-grid">
          <div className="grid1">
            <img src="./Images/nm22j1.jpg" alt="" className="nm22-exmianimg" />
            <img src="./Images/nm22j2.jpg" alt="" className="nm22-exmianimg" />
            <img src="./Images/nm22j3.jpg" alt="" className="nm22-exmianimg" />
          </div>
          <div className="grid1">
            <img src="./Images/nm22j4.jpg" alt="" className="nm22-exmianimg" />
            <img src="./Images/nm22j5.jpg" alt="" className="nm22-exmianimg" />
            <img src="./Images/nm22j6.jpg" alt="" className="nm22-exmianimg" />
          </div>
          <div className="grid1">
            <img src="./Images/nm22j7.jpg" alt="" className="nm22-exmianimg" />
            <img src="./Images/nm22j8.jpg" alt="" className="nm22-exmianimg" />
            <img src="./Images/nm22j9.jpg" alt="" className="nm22-exmianimg" />
          </div>
        </div>
      </div>
      <div className="glimpses">
        <h1>Glimpses From Past Conferences</h1>
      </div>

      <Slider />
    </div>
  );
};
export default nitsmun2022;
