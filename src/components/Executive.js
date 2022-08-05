import React from 'react';
import {allexecutive} from './Dataset';

const Executive = () => {
  return (
    <>
    <div className="partner-head">
        <h1>EXECUTIVE BOARD</h1>
      </div>
      <div className="exe-cont">
        <div className="exe-all">
          {allexecutive.map((item) => {
            return (
              <div key={item.id} className="image-all">
                <img src={item.img} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Executive;