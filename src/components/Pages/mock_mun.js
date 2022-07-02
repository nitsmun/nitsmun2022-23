import React from "react";
import './mockmun.css';
import { TabTitle } from "../Utils/Genfn";
import { Link } from "react-router-dom";
import {mockData} from '../Dataset';

const MockMun = () => {
    TabTitle("Mock MUNs | NITSMUN");

    return(
        <>
        {/* <div className="mock-event">
            <img src="https://nitsmun2022-23.vercel.app/Images/NITS%20Junior%20MUN%20official%20poster.png" alt="Mock-mun" />
        </div> */}

        <div className="mock-heading">
            <strong><h1>Mock MUN</h1></strong>
        </div>


        <div className="mock-content">
            <p>Also, to get familarised with the rules and proceedings of a MUN conference, just like each year before the main conference, this year too on 9th and 10th of July, NITSMUN presents a workshop and a mock MUN which are absolutely free.</p> <br/>
            
            <p>
            These conferences are chaired by the senior most members of the team and include a complete go through lesson of the rules and proceedings of a MUN conference. These mock sessions prepare the freshmen students for the annual conference.
            </p><br/>
            <p>So, hurry up and get yourself registered on the link given below!</p>
        </div>
        <br/>
        <div className="hometop-apply">
        <div className="hometop-reg">
          <ul style={{ color: "white" }}>
            Free Registrations for{" "}
            <strong style={{ color: "rgb(45, 210, 255)" }}>
              Mock Mun
            </strong>{" "}
            {" "}
            is now open!
          </ul>
        </div>
        <div className="hometop-link1">
          <Link to={"/apply"}>
            <button className="hometop-link1btn">Register Now</button>
          </Link>
        </div>
      </div>
        <br/>

        <div className="slider">
            <div className="slide-track">

            {mockData.map((item) => {
              return(
                <div className="slide2" key={item.id}>
                  <img src={item.mockimage} alt={item.mockalt} />
                </div>
              )
            })}


            {mockData.map((item) => {
              return(
                <div className="slide2" key={item.id}>
                  <img src={item.mockimage} alt={item.mockalt} />
                </div>
              )
            })}

            </div>
        </div>
                
        </>
    );
};
export default MockMun;