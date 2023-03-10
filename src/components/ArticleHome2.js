import React, { useRef, useState, useEffect } from "react";
import "./Articlehome2.css";
import { Link } from "react-router-dom";
import Underline3 from "./Underline/Underline3";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Articlehome2 = () => {
  const config = {
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.2,
  };
  const [loaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let observer = new window.IntersectionObserver(function (entries, self) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          loadImages(entry.target);
          self.unobserve(entry.target);
        }
      });
    }, config);
    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => {
      observer.observe(img);
    });
    return () => {
      imgs.forEach((img) => {
        observer.unobserve(img);
      });
    };
  }, []);

  const loadImages = (image) => {
    image.src = image.dataset.src;
  };
  
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678284463/nitsmun/byBharat/e8_1_vsnebj.webp"
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
              alt=""
            />
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678284476/nitsmun/byBharat/Slide_2_ah8sd3.webp"
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
              alt=""
            />
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678284487/nitsmun/byBharat/Slide_3_xiuydl.webp"
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
              alt=""
            />
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678284493/nitsmun/byBharat/Slide_4_gbbmbq.webp"
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
              alt=""
            />
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678284506/nitsmun/byBharat/Slide_5_eaniho.webp"
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
              alt=""
            />
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/v1678284515/nitsmun/byBharat/Slide_6_pefzoj.webp"
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
              alt=""
            />
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_600,f_auto,fl_lossy/v1678282907/nitsmun/quirky/328988127_1302819486992859_2606241095185502322_n.webp_rnpefc.webp"
              alt=""
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
            />
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_900,f_auto,fl_lossy/v1678283075/nitsmun/quirky/e6_2_mj9wge.webp"
              alt=""
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
            />
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
            <img
              src=""
              data-src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_600,f_auto,fl_lossy/v1678283094/nitsmun/quirky/e6_3_uidsz1.webp"
              className={loaded ? "loaded" : "loading"}
              onLoad={() => setIsLoaded(true)}
              alt=""
            />
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
