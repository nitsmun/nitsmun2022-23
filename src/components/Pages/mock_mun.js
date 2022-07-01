import React from "react";
import './mockmun.css';
import { TabTitle } from "../Utils/Genfn";
import { Link } from "react-router-dom";

const MockMun = () => {
    TabTitle("Mock MUNs | NITSMUN");

    return(
        <>
        <div className="mock-event">
            <img src="https://nitsmun2022-23.vercel.app/Images/NITS%20Junior%20MUN%20official%20poster.png" alt="Mock-mun" />
        </div>

        <div className="mock-heading">
            <strong><h1>Mock MUNs</h1></strong>
        </div>


        <div className="mock-content">
            <p>Each year, NITSMUN conducts about one to two Mock MUN conferences for the freshmen to get familiar with the rules and proceedings of a MUN conference.</p> <br/>
            
            <p>
            These conferences are chaired by the senior most members of the team and include a complete go through lesson of the rules and proceedings of a MUN conference. These mock sessions prepare the freshmen students for the annual conference.
            </p>
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
                    <div className="slide2">
                    <img src="./Images/Mock mun 1.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Mock mun 2.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Mock mun 3.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Agenda1.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Agenda2.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Agenda3.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/International Press Corps.png" alt="" />
                    </div>

                    <div className="slide2">
                    <img src="./Images/Mock mun 1.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Mock mun 2.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Mock mun 3.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Agenda1.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Agenda2.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/Agenda3.jpeg" alt="" />
                    </div>
                    <div className="slide2">
                    <img src="./Images/International Press Corps.png" alt="" />
                    </div>
            </div>
        </div>
                
        </>
    );
};
export default MockMun;