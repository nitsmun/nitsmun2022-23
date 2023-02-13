import React from "react";
import "./juniormun.css";
import { TabTitle } from "../Utils/Genfn";
import Underline2 from "../Underline";
import { Junmun } from "../Dataset";
// import { Link } from "react-router-dom";
import Faqs from "../Faq";
// import MockMun from "./mock_mun";
// import Sponsor from "../Sponsor";
import Executive from "../Executive";
// import Loading from "../Loading";
// import SLides from "../../Threedcarausel";

const Juniormun = () => {
  // const [active, setActive] = useState("Executive Board");
  TabTitle("NITS Junior MUN | NITSMUN");
  // const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   setTimeout(function () {
  //     setIsFetching(false);
  //   }, 100);
  // }, []);

  // if (isFetching) {
  //   return <Loading />;
  // }
  return (
    <>
      <div className="event-pic">
        <img
          src="./Images/NITS Junior MUN official poster.png"
          alt="NITS Junior MUN"
        />
      </div>
      <div className="event-title">
          {/* <h1>NITS JUNIOR MUN 2022</h1> */}
          <h1>Nits Junior Mun 2022</h1>
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
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330810114_1486772055402221_8540965953596324983_n.jpg?stp=dst-jpg_p180x540&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=d4SDpyN6HaUAX90F9CA&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDzidku_UlH5U-eLjqcBBa20UfEnM3RM29SWPujGzagBA&oe=63EECE13"
            alt="Junior MUN 2022"
          />
          <img
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330980861_1112766672730982_248332356185036132_n.jpg?stp=dst-jpg_p180x540&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=HoCM4VW-xTUAX-2IKT3&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfD5rhV40HFPUAtG2mZJ0sRL_Q5EHRg8nj0jTrULvXvkzA&oe=63F05CCB"
            alt="Junior MUN 2022"
          />
         
        </div>
        <div className="images-junmun21">
          <img
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330987207_947896313237848_1824721231056822532_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=OCT6EqR9Mh0AX-F9cMD&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCIsceOfddgTbBKJ84AojwlNtF5H_l2Ih-E662dpyTdsw&oe=63F02FD4"
            alt="Junior MUN 2022"
          />
          <img
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/331022290_584201316947425_7114451133635938644_n.jpg?stp=dst-jpg_p180x540&_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=BMoXQs6atPMAX8NDnom&tn=gfOfm7OWKssWH2sG&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDMwIyrvCUDUwXQDAq5nRs9kxqbwl2CFY9cMYgRG2hQbQ&oe=63F03474"
            alt="Junior MUN 2022"
          />
          <img
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330799341_557186629697571_6008962597625901705_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=dC_EpZIL_ToAX-h5KvN&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCvzqtzuDx0Tz71wVwnmjA9snxql3L04B6aYUSu2qROIQ&oe=63EEE680"
            alt="Junior MUN 2021"
          />
        </div>
        <div className="images-junmun21">
          <img
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/331060272_1150973535617149_1880270747191740589_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=O2IRps0vQGEAX-DKRK4&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDxqwtC_-pQ9ZW_6kNwRRlvFJdM-_Q9SntibElMsnHX6Q&oe=63EEEB54"
            alt="Junior MUN 2022"
          />
          <img
            src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/331051158_721577999627983_163192483052903116_n.jpg?stp=dst-jpg_p180x540&_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=4aO7u1RQGUUAX-g-hf2&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAUOyAiVohHmcKlkL3iJK8irYzy5QEg8qVFs99uBrnBFg&oe=63F02CB3"
            alt="Junior MUN 2022"
          />
        </div>
        {/* <SLides/> */}
      </div>
    </>
  );
};

export default Juniormun;
