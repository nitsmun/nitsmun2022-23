import React from "react";
import './Team.css';
import { Secretariat } from './Dataset';
import Teamjr from "./Teamjr";
import Underline from "./Underline";
import Teammediajr from "./Teammediajr";
import Teamresearchjr from "./Teamresearchjr";
import Teampr from "./Teampr";
import Teamweb from "./Teamweb";
export default function(){
    return(
           <>
           <div className="team-head0">
           <h1 className="team-head-h1">Secretariat</h1>
           </div>
        <div className="team-stats-card">
           {Secretariat.map((item) => {
               return(
                       <div key={item.id} className="team-stats">
                       <div>
                           <center><img className="team-img" src={item.imgsrc} alt="" /></center>
                        </div>
                       <h1>{item.name}</h1>
                       <h2 className="team-posting-sec">{item.post}</h2>
                    </div>
               )
           })}
           </div>
           <Underline />
           <Teamjr />
           <Teammediajr />
           <Teamresearchjr />
           <Teampr />
           <Teamweb />
           </>
    )
}