/** @format */

import React, { useState } from "react";

import { TabTitle } from "../Utils/Genfn";
import Underline2 from "../Underline";
import { Junmun } from "../Dataset";
import { jrmunallphotos } from "../Dataset";

import "./juniormun.css";

const Juniormun = () => {
    TabTitle("NITS Junior MUN | NITSMUN");

    const [indexjr, setIndexjr] = useState(0);

    function handleNextClickjrmun() {
        setIndexjr(indexjr + 1);
    }

    function handlePrevClickjrmun() {
        setIndexjr(indexjr - 1);
    }

    let jrmunallphotosimg = jrmunallphotos[indexjr];
    // const [isFetching, setIsFetching] = useState(true);

    // useEffect(() => {
    //   setTimeout(function () {
    //     setIsFetching(false);
    //   }, 100);
    // }, []);

    // if (isFetching) {
    //   return <Loading />;
    // }
    return (
        <>
            <div className="event-pic">
                <img
                    src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_400,f_auto,fl_lossy/v1676658768/nitsmun/NITS_20Junior_20MUN_20official_20poster_mju9g6.png"
                    alt="NITS Junior MUN"
                />
            </div>
            <div className="event-title">
                <h1>Nits Junior Mun 2022</h1>
            </div>
            <div className="event-details">
                Model United Nations (MUN) is an educational simulation in which
                students can learn about diplomacy, international relations, and
                the United Nations. Students play as delegates and involve
                themselves in heated debates to bring in solutions for some of
                the most important issues of recent times. Model UN
                organizations hold conferences that bring together students from
                elementary to college levels and provide a platform to discuss
                global issues through a formal procedure.
                <br /> <br />
                NITS Junior MUN 2022 was held on the 6 and 7 August 2022. It ran
                in a hybrid mode this time with a grand opening ceremony that
                took place offline. There were three commitees this time which
                took place in online mode. Even if it was held online, the pomp
                and enthusiasm shown by the delegates of the various commitees
                were praise-worthy. And we hope to witness this energy and
                enthusiasm in the coming years as well.
            </div>
            <div className="commitees-heading">
                <h1>Committees</h1>
            </div>
            <Underline2 />
            <div className="junmun-agendas">
                {Junmun.map((item) => {
                    return (
                        <div className="agenda" key={item.id}>
                            <div className="title01-container">
                                <h2>{item.Title01}</h2>
                            </div>
                            <img src={item.imgjunmun} alt={item.Title01} />
                            <div className="agenda-only">
                                <h3>{item.agenda0}</h3>
                            </div>
                            <div className="agendapara-container">
                                <p>{item.Agendapara}</p>
                            </div>

                            {item.linkbg1}
                        </div>
                    );
                })}
            </div>
            {/* <div className="btn-junior">
        <button
          className="active btn"
          onClick={() => setActive("Executive Board")}
        >
          Executive Board
        </button>
        <button className="active btn" onClick={() => setActive("Partners")}>
          Partners
        </button>
      </div>
      {active === "Executive Board" && <Executive />}
      {active === "Partners" && <Sponsor />} */}
            <Executive />
            <Faqs />
            <div className="junmun2021">
                <h1>Reminiscence Of Junior Mun 2022</h1>
            </div>{" "}
            <Underline2 />
            <br />
            <div className="container-junmun2021">
                <div className="images-junmun21">
                    <img
                        src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676612934/nitsmun/DSC_0689-compressed_v6cyij.jpg"
                        alt="Junior MUN 2022"
                    />
                    <img
                        src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676612978/nitsmun/DSC_0648-compressed_dnkbug.jpg"
                        alt="Junior MUN 2022"
                    />
                </div>
                <div className="images-junmun21">
                    <img
                        src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676613015/nitsmun/DIP_8467-compressed_mkur8x.jpg"
                        alt="Junior MUN 2022"
                    />
                    <img
                        src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676613047/nitsmun/DIP_8541-compressed_pvktco.jpg"
                        alt="Junior MUN 2022"
                    />
                    <img
                        src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676613080/nitsmun/DSC_0672-compressed_xggbie.jpg"
                        alt="Junior MUN 2021"
                    />
                </div>
                <div className="images-junmun21">
                    <img
                        src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676613115/nitsmun/DIP_8466-min_ggszy5.jpg"
                        alt="Junior MUN 2022"
                    />
                    <img
                        src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676613148/nitsmun/DSC_0675-compressed_dubrs7.jpg"
                        alt="Junior MUN 2022"
                    />
                </div>
            </div>
            <div className="junmun2021" id="junmunallphto__opil">
                <h1>Reminiscence Of Junior Mun 2021</h1>
            </div>{" "}
            <Underline2 />
            <br />
            <div className="hjhdfkw" id="jrmunallphotos">
                <div className="memory-nits22">
                    <img
                        src={jrmunallphotosimg.img}
                        alt={jrmunallphotosimg.alt}
                    />
                </div>

                <h2 className="uioips">
                    ({indexjr + 1} of {jrmunallphotos.length})
                </h2>

                <div className="btns btnn-hme1">
                    <button
                        className="prev btn-testimonial"
                        onClick={handlePrevClickjrmun}
                    >
                        <AiOutlineArrowLeft className="btn-indi-hme" />
                    </button>
                    <button
                        className="next btn-testimonial"
                        onClick={handleNextClickjrmun}
                    >
                        <AiOutlineArrowRight className="btn-indi-hme" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Juniormun;
