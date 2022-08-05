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
        <img src="./Images/jadavpur university.png" alt="Jadavpur University" />
       <div className="jdv-about">
       <h2>Jadavpur University</h2>
       </div>
      </div>
    </>
  );
};

export default Sponsor;
