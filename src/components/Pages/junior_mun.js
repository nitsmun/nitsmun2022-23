import React, { useState, useEffect } from "react";
import "./juniormun.css";
import { TabTitle } from "../Utils/Genfn";
import Underline2 from "../Underline";
import { Junmun } from "../Dataset";
// import { Link } from "react-router-dom";
import Faqs from "../Faq";
// import MockMun from "./mock_mun";
// import Sponsor from "../Sponsor";
import Executive from "../Executive";
import Loading from "../Loading";
import SLides from "../../Threedcarausel";

const Juniormun = () => {
  // const [active, setActive] = useState("Executive Board");
  TabTitle("NITS Junior MUN | NITSMUN");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 200);
  }, []);

  if (isFetching) {
    return <Loading />;
  }
  return (
    <>
      <div className="event-pic">
        <img
          src="./Images/NITS Junior MUN official poster.png"
          alt="NITS Junior MUN"
        />
      </div>
      <div className="event-title">
        <strong>
          <h1>NITS JUNIOR MUN 2022</h1>
        </strong>
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
        NITS Junior MUN 2022 was held on the 6 and 7 August 2022. It ran in a
        hybrid mode this time with a grand opening ceremony that took place
        offline. There were three commitees this time which took place in online
        mode. Even if it was held online, the pomp and enthusiasm shown by the
        delegates of the various commitees were praise-worthy. And we hope to
        witness this energy and enthusiasm in the coming years as well.
      </div>
      {/* 

      <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            Round 2 Registrations for{" "}
            <strong style={{ color: "rgb(45, 210, 255)" }}>
              Junior Mun 2022
            </strong>{" "}
            is now open!
          </ul>
        </div>
        <div className="hometop-link1">
          <Link to={"/apply"}>
            <button className="hometop-link1btn">Register Now</button>
          </Link>
        </div>
      </div> */}
      {/* <MockMun /> */}
      <div className="commitees-heading">
        <h1>Committees</h1>
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
                <h3>{item.agenda0}</h3>
              </div>
              <div className="agendapara-container">
                <p>{item.Agendapara}</p>
              </div>

              {item.linkbg1}
            </div>
          );
        })}
      </div>
      {/* <div className="btn-junior">
        <button
          className="active btn"
          onClick={() => setActive("Executive Board")}
        >
          Executive Board
        </button>
        <button className="active btn" onClick={() => setActive("Partners")}>
          Partners
        </button>
      </div>
      {active === "Executive Board" && <Executive />}
      {active === "Partners" && <Sponsor />} */}
      <Executive />
      <Faqs />
      <div className="junmun2021">
        <h1>Reminiscence Of Junior Mun 2022</h1>
      </div>{" "}
      <Underline2 />
      <br />
      <div className="container-junmun2021">
        <div className="images-junmun21">
        <img
            src="./Images/juniormun2022/DSC_0689-compressed.jpg"
            alt="Junior MUN 2022"
          />
          <img
            src="./Images/juniormun2022/DSC_0648-compressed.jpg"
            alt="Junior MUN 2022"
          />
         
        </div>
        <div className="images-junmun21">
          <img
            src="./Images/juniormun2022/DIP_8467-compressed.jpg"
            alt="Junior MUN 2022"
          />
          <img
            src="./Images/juniormun2022/DIP_8541-compressed.jpg"
            alt="Junior MUN 2022"
          />
          <img
            src="./Images/juniormun2022/DSC_0672-compressed.jpg"
            alt="Junior MUN 2021"
          />
        </div>
        <div className="images-junmun21">
          <img
            src="./Images/juniormun2022/DIP_8466-min.jpg"
            alt="Junior MUN 2022"
          />
          <img
            src="./Images/juniormun2022/DSC_0675-compressed.jpg"
            alt="Junior MUN 2022"
          />
        </div>
        <SLides/>
      </div>
    </>
  );
};

export default Juniormun;
