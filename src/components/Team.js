// import React from "react";
// import './Team.css';
// import { Secretariat } from './Dataset';
// import Teamjr from "./Teamjr";
//  import Underline from "./Underline";
//  import Teammediajr from "./Teammediajr";
//  import Teamresearchjr from "./Teamresearchjr";
// import Teampr from "./Teampr";
// import Teamweb from "./Teamweb";
// export default function(){
//     return(
//            <>
//            <div className="team-head0">
//            <h1 className="team-head-h1">Secretariat</h1>
//            </div>
//         <div className="team-stats-card">
//            {Secretariat.map((item) => {
//                return(
//                        <div key={item.id} className="team-stats">
//                        <div>
//                            <center><img className="team-img" src={item.imgsrc} alt="" /></center>
//                         </div>
//                        <h1>{item.name}</h1>
//                        <h2 className="team-posting-sec">{item.post}</h2>
//                     </div>
//                )
//            })}
//            </div>
/* <Underline />
<Teamjr />
<Teammediajr />
<Teamresearchjr />
<Teampr />
<Teamweb /> */
//            </>
//     )
// }  



import React from "react";
import './Team.css';
import { Secretariat } from './Dataset';
import Teamjr from "./Teamjr";
import Underline from "./Underline";
import Teammediajr from "./Teammediajr";
import Teamresearchjr from "./Teamresearchjr";
import Teampr from "./Teampr";
import Teamweb from "./Teamweb";
import {HiOutlineMail} from 'react-icons/hi';
import {FaLinkedinIn} from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';
import Underline2 from "./Underline2";
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
                           <center><img className="team-img" src={item.imgsrc} alt="" onContextMenu="return flase;" /></center>
                        </div>


                        <div className="social-media">
                        <div className="icon1">
                            <a href={item.mail}><HiOutlineMail className="icon-color" size={20} /></a>
                        </div>
                        <div className="icon2">
                        <a href={item.linkedin} target="_blank"><FaLinkedinIn className="icon-color1" size={20} /></a>
                        </div>
                        <div className="icon3">
                        <a href={item.fb} target="_blank"><FaFacebookF className="icon-color2" size={20} /></a>
                        </div>
                        </div>



                       <h1>{item.name}</h1>
                       <Underline2 />
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