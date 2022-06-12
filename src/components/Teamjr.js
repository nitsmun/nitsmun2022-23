import React from "react";
import './Teamjr.css';
import { Secretariatjr } from './Dataset';
export default function Team(){
    return(
           <>
           {/* <div className="team-head">
           <h1>Secretariat</h1> <hr />
           </div> */}
           <row>
        <div className="team-stats-card">
           {Secretariatjr.map((item) => {
               return(
                       <div key={item.id} className="team-stats">
                       <div className="img-hold">
                           <center><img className="team-img" src={item.imgsrc} alt="" /></center>
                           </div>
                       <h1>{item.name}</h1>
                       <h2 className="team-posting-sec">{item.post}</h2>
                       {/* <br /> <br /> <hr /> */}
        </div>
               )
           })}
           </div>
           </row>
           </>
    )
}