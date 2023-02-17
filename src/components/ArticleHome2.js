import React, { useRef } from "react";
import "./Articlehome2.css";
import { Link } from "react-router-dom";
import Underline3 from "./Underline/Underline3";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Articlehome2 = () => {
  let bybharatHolder = useRef();

  function swipeNext() {
    bybharatHolder.current.scrollLeft += bybharatHolder.current.offsetWidth;
  }

  function swipePrev() {
    bybharatHolder.current.scrollLeft -= bybharatHolder.current.offsetWidth;
  }

  let quirkyHolder = useRef();

  function swipefwd() {
    quirkyHolder.current.scrollLeft += quirkyHolder.current.offsetWidth;
  }

  function swipebk() {
    quirkyHolder.current.scrollLeft -= quirkyHolder.current.offsetWidth;
  }

  return (
    <>
      <Underline3 />
      <div className="art-home-title" style={{ userSelect: "none" }}>
        <h1 className="apply-home-h1">
          Check Out{" "}
          <a
            href="https://instagram.com/nitsmun"
            rel="noreferrer"
            target="_blank"
          >
            @nitsmun
          </a>{" "}
          For All Our Segments!
        </h1>
      </div>

      <div className="hme-art" style={{ userSelect: "none" }}>
        <div className="hme1" ref={bybharatHolder}>
          <div className="bhrt-indi">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676609698/nitsmun/e7_1_awufx7.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipePrev}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipeNext}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
        
        <h4 className="ct-art">1/6</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>

          <div className="bhrt-indi indi-op">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676609784/nitsmun/e7_2_osstm8.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipePrev}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipeNext}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
            <h4 className="ct-art">2/6</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>
          <div className="bhrt-indi indi-op">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676609961/nitsmun/e7_3_ndpt35.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipePrev}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipeNext}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
            <h4 className="ct-art">3/6</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>
          <div className="bhrt-indi indi-op">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676609890/nitsmun/e7_4_ririeo.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipePrev}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipeNext}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
            <h4 className="ct-art">4/6</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>
          <div className="bhrt-indi indi-op">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676610000/nitsmun/e7_5_gcrpac.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipePrev}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipeNext}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
            <h4 className="ct-art">5/6</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>
          <div className="bhrt-indi indi-op">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676610058/nitsmun/e7_6_lcqij0.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipePrev}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipeNext}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
            <h4 className="ct-art">6/6</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="hme2" ref={quirkyHolder}>
          <div className="bhrt-indi">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676610113/nitsmun/e5_1_k2rckt.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipebk}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipefwd}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
            <h4 className="ct-art">1/3</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>
          <div className="bhrt-indi">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676610187/nitsmun/e5_2_lxxzpg.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipebk}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipefwd}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
            <h4 className="ct-art">2/3</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>
          <div className="bhrt-indi">
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1676610243/nitsmun/e5_3_ltqndt.jpg" alt="" />
            <div className="btns btnn-hme1">
              <button className="prev btn-testimonial" onClick={swipebk}>
                <AiOutlineArrowLeft className="btn-indi-hme" />
              </button>
              <button className="next btn-testimonial" onClick={swipefwd}>
                <AiOutlineArrowRight className="btn-indi-hme" />
              </button>
            </div>
            <h4 className="ct-art">3/3</h4>
            <div className="link-btn-btm">
              <Link to="/segments">
                <p className="p-by vbghjk">Read more</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Articlehome2;
