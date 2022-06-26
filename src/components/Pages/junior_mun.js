import React from "react";
import "./juniormun.css";
import { TabTitle } from "../Utils/Genfn";
import Underline2 from "../Underline";
import { Junmun } from "../Dataset";
import { Link } from "react-router-dom";
const juniormun = () => {
  TabTitle("NITS Junior MUN | NITSMUN");
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
        After successfully conducting NITS Junior MUN exclusively for school
        students last year and with its great success , NITSMUN is proud to
        announce the second edition of NITS Junior MUN exclusively for school
        students from 6th August to 7th August 2022.
      </div>
      <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            Early Bird registrations for{" "}
            <strong style={{ color: "rgb(45, 210, 255)" }}>
              Junior MUN 2022
            </strong>{" "}
            is now open!
          </ul>
        </div>
        <div className="hometop-link1">
          <Link to={"/apply"}>
            <button className="hometop-link1btn">Register Now</button>
          </Link>
        </div>
      </div>
      <div className="commitees-heading">
        <h1>COMMITTEES</h1>
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

export default juniormun;
