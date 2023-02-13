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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/322687172_1248256806087613_7743691605802179804_n.jpg?stp=dst-jpg_p600x600&_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=BedLeKBf5WMAX_FXa67&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAxzHUpaS7TcvdtFdIBdftvrxTtr7ozJP75enN29ooUmg&oe=63EF1320" alt="" />
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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/322332602_1255872474963524_5321604304607992407_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=h2L8dx8jpmAAX_UBR2E&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDTjqJZCOieueuXuJfYF743_Uk_OFRKzk8dJv8D-2atig&oe=63EF1CCE" alt="" />
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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/322633409_1779590992440559_4718711189640053873_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Pm9ROF_iXvkAX8xxQXP&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfCSb3_r-vIGjyPMX_MXDKYRNp379Q9Mw4N_ow6wq8_oSQ&oe=63EF6D86" alt="" />
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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/321947980_599031305561855_3700818193831827876_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uBdGbsHlWckAX9DWh1n&tn=4LMS0JUT-q81qyRv&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBojtFT0xNiO2l7oaSXW5rhP2z68wq4GR8IMiOnO2-ADA&oe=63EEE9D3" alt="" />
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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/322838990_906299703870510_5697010146612876975_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=KvJ_odv0LfMAX83evhO&tn=4LMS0JUT-q81qyRv&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfArvNHLWddV5nLUUXCJnED5FEvXTNQpUfVNKyjSBNHLWQ&oe=63EE9920" alt="" />
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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/322526790_955159868787372_6007371335435211947_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ZEfdANfyvecAX-Y6wOn&_nc_oc=AQkox_e0e9tnIoRbDMEtDFw-ZHm-vUEzw8U6u4uY0uRfF_YSGToc4d3n4TLpzLuFGWU&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAQbGoh5H_3qA-YqzKzGMaBCttb4BBqUQPU_2ASzr6ilQ&oe=63EE8B0C" alt="" />
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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/320889701_687948209454743_7811522530338940715_n.jpg?stp=dst-jpg_p600x600&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lbvyG_FL-VgAX8s_Scg&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfDgeFiwhnb85vrxmj9Sw3KPVQdlCMK6e3AJ94eg4yIIYg&oe=63EED87B" alt="" />
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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/320708292_518394510228337_8319084469389876072_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=SJu3pU-MeIcAX_45oid&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAP2iuU39AXdQJyBhRycdjLO85KntOFIxyemFRy1_jo0A&oe=63EED3B7" alt="" />
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
            <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/320754630_873440947126117_364657942473173256_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=B2bFejXUWEoAX-7g8np&tn=4LMS0JUT-q81qyRv&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfAmILEtcH_yQF2avOUPVpDSOyJagHe8mz916HdePRw5DQ&oe=63EE7307" alt="" />
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
