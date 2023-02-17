import React from "react";
import { partnerall } from "./Dataset";

const Sponsor = () => {
  return (
    <>
      <div className="partner-head">
        <h1>EDUCATION PARTNERS</h1>
      </div>
      <div className="partner-list">
        {partnerall.map((item) => {
          return (
            <div key={item.id} className="partner-indi">
              <div className="partner-img">
                <img src={item.img} alt={item.alt} />
              </div>
              <div className="partner-about">
                <h2>{item.about}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="jdv-head">
        <h1>MUN PARTNERS</h1>
      </div>
      <div className="jdv-list">
        <img src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676660148/nitsmun/jadavpur_university_nmchdt.png" alt="Jadavpur University" />
       <div className="jdv-about">
       <h2>Jadavpur University</h2>
       </div>
      </div>
    </>
  );
};

export default Sponsor;
