import React from "react";
import './Teamresearchjr.css';
import { Secretariatresearchjr } from './Dataset';
export default function(){
    return(
           <>
           <div className="team-head3">
           <h1 className="team-head-h1">Research & Development Team</h1>
           </div>
        <div className="team-stats-card3">
           {Secretariatresearchjr.map((item) => {
               return(
                       <div key={item.id} className="team-stats3">
                       <div>
                           <center><img className="team-img3" src={item.imgsrc} alt="" /></center>
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