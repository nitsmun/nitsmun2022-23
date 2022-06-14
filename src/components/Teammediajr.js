import React from "react";
import './Teammediajr.css';
import { Secretariatmediajr } from './Dataset';
export default function(){
    return(
           <>
           <div className="team-head2">
           <h1>Media & Design Team</h1>
           </div>
        <div className="team-stats-card2">
           {Secretariatmediajr.map((item) => {
               return(
                       <div key={item.id} className="team-stats2">
                       <div>
                           <center><img className="team-img2" src={item.imgsrc} alt="" /></center>
                        </div>
                       <h1>{item.name}</h1>
                       <h2 className="team-posting-sec2">{item.post}</h2>
                    </div>
               )
           })}
           </div>
           </>
    )
}