import React from "react";
import "./Juniormun.css";
import { TabTitle } from "../Utils/Genfn";

const Juniormun = () => {
  TabTitle("NITSMUN >> NITS Junior MUN");
  return (
    <>
      <div className="event-pic">
        <img src="https://nitsmun.in/img/munu18.jpg" alt="NITS Junior MUN" />
      </div>
      <div className="event-title">
        <h1>NITS Junior MUN</h1>
      </div>
      <div className="event-details">
        With great pride and honour, we announced the first edition of NITS
        Junior MUN exclusively for school students. We believe that children and
        young teens should be exposed to the various intricacies of society and
        nations and should understand how the world functions from the grassroot
        level along with the challenges faced. It is only with proper grooming,
        experience and exposure that enables them to make changes in the
        society. Through this conference, we targeted students from grade VI to
        grade XII from schools all across the country.
        <br /> <br />A day-long free-of-cost workshop was held a few days before
        the conference in order to acclimatise those without prior experience.
        Keeping in mind the various examination schedules of the Central and
        State Boards, we organised our conference from October 16, 2021 to
        October 17, 2021.
      </div>
      <div className="junmun-partners">
        <div className="junmunpart-heading">
          <h1>Our Partners</h1>
        </div>
        <div className="junmun-flexing">
          <div className="partner1">
            <div className="part-indi1">
              <img src="./Images/dias_logo.jpg" alt="" />
            </div>
            <div className="part-indi2">
              <img src="./Images/ids_logo.png" alt="" />
            </div>
          </div>
          <div className="partner2">
          <div className="part-indi3"></div>
          <div className="part-indi4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Juniormun;
