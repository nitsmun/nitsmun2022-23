import React, { useRef } from "react";
import './EB.css'
import { Eb0 } from "./Dataset";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
// import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
const Eb = () => {

  let testimonHolder = useRef();

  function swipeNext() {
    testimonHolder.current.scrollLeft += (testimonHolder.current.offsetWidth);
  };

  function swipePrev() {
    testimonHolder.current.scrollLeft -= (testimonHolder.current.offsetWidth);
  };


  return (
    <>
      <main id="main__ebb">
        <div className="mock23-title comt-ipm">
          <h1>Executive Board</h1>
        </div>
        <div className="exe23-ko_p" ref={testimonHolder}>
          {Eb0.map((item) => {
            return (
              <>
                <div className="eb23-indi__oip" key={item.id}>
                  <div className="exe23-img__hlder" id="nooverflow__eb" >
                    <img src={item.img} alt="" />
                  </div>


                  <div className="eb23-indi-abt__pn">
                    <div className="post-eb23__oip">
                      <h1> {item.post}</h1>
                    </div>
                    <h2>{item.about}</h2>
                  </div>
                </div>


              </>
            )
          })}
        </div>
        <div className="btns btnn-hme1 hjip__plk">
          <button className="prev btn-testimonial" onClick={swipePrev}>
            <AiOutlineArrowLeft className="btn-indi-hme" />
          </button>
          <button className="next btn-testimonial" onClick={swipeNext}>
            <AiOutlineArrowRight className="btn-indi-hme" />
          </button>
        </div>
      </main>
    </>
  )
}

export default Eb