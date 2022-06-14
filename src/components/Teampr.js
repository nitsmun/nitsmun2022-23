import React from "react";
import './Teampr.css';
import { Secretariatprjr } from './Dataset';
export default function(){
    return(
           <>
           <div className="team-head4">
           <h1 className="team-head-h1">Public Relations & Outreach Team</h1>
           </div>
        <div className="team-stats-card4">
           {Secretariatprjr.map((item) => {
               return(
                       <div key={item.id} className="team-stats4">
                       <div>
                           <center><img className="team-img4" src={item.imgsrc} alt="" /></center>
                        </div>
                       <h1>{item.name}</h1>
                       <h2 className="team-posting-sec">{item.post}</h2>
                    </div>
               )
           })}
           </div>
           </>
    )
}