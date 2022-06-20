import React from "react";
import "./Juniormun.css";
import { TabTitle } from "../Utils/Genfn";
import Underline2 from "../Underline";
import { Junmun } from "../Dataset";
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
        Model United Nations (MUN) is an educational simulation in which
        students can learn about diplomacy, international relations, and the
        United Nations. Students play as delegates and involve themselves in
        heated debates to bring in solutions for some of the most important
        issues of recent times. Model UN organizations hold conferences that
        bring together students from elementary to college levels and provide a
        platform to discuss global issues through a formal procedure.
        <br /> <br />
        With great pride and honour, we announced the first edition of NITS
        Junior MUN exclusively for school students last year and after its great
        success , NITSMUN will be hosting the second edition of Junior MUN
        exclusively for school students from 6th August to 7th August 2022.
      </div>
      {/* <div className="junmun-partners">
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
      </div> */}
      <div className="commitees-heading">
        <h1>COMMITEES</h1>
      </div>
      <Underline2 />
      <div className="junmun-agendas">
        {Junmun.map((item) => {
          return (
            <div className="agenda" key={item.id}>
              <div className="title01-container">
                <h2>{item.Title01}</h2>
              </div>
              <img src={item.imgjunmun} alt={item.Title01} />
              <div className="agenda-only">
                <h3>Agenda:</h3>
              </div>
              <div className="agendapara-container">
                <p>{item.Agendapara}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="junmun2021">
        <h1>Reminiscence of Junior MUN 2021</h1>
      </div>{" "}
      <Underline2 />
      <br />
      <div className="container-junmun2021">
        <div className="images-junmun21">
          <img src="./Images/jmun_ss1.jpg" alt="Junior MUN 2021" />
          <img src="./Images/jmun_ss2.jpg" alt="Junior MUN 2021" />
        </div>
        <div className="images-junmun21">
          <img src="./Images/jmun_ss3.jpg" alt="Junior MUN 2021" />
          <img src="./Images/jmun_ss4.jpg" alt="Junior MUN 2021" />
          <img src="./Images/jmun_ss5.jpg" alt="Junior MUN 2021" />
        </div>
        <div className="images-junmun21">
          <img src="./Images/jmun_ss6.jpg" alt="Junior MUN 2021" />
          <img src="./Images/jmun_ss7.jpg" alt="Junior MUN 2021" />
        </div>
      </div>
    </>
  );
};

export default Juniormun;
