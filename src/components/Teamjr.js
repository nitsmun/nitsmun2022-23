import React from "react";
import './Teamjr.css';
import { Secretariatjr } from './Dataset';
export default function(){
    return(
           <>
        <div className="team-stats-card1">
           {Secretariatjr.map((item) => {
               return(
                       <div key={item.id} className="team-stats1">
                       <div className="img-hold1">
                           <center><img className="team-img1" src={item.imgsrc} alt="" /></center>
                        </div>
                       <h1>{item.name}</h1>
                       <h2 className="team-posting-sec1">{item.post}</h2>
                    </div>
               )
           })}
           </div>
           </>
    )
}