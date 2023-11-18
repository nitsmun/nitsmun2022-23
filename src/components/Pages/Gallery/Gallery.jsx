import React, { useEffect, useState } from 'react'

import Scrolldown from '../../ScollDown/Scrolldown';
import Day1 from './Day1';
import Day2 from './Day2';
import Day3 from './Day3';

import './Gallery.css'
const Gallery = () => {
    useEffect(() => {
        document.title = "Photographs | NITSMUN";
    }, []);

    const [gal, setGal] = useState("Day1");

    return (
        <>
            <div className="gallery-main">
                <div className="gallerytop">
                    <div className="sdowncont">
                        <a href="#picmain"><Scrolldown /></a>
                    </div>
                </div>
                <div className="gallertstrts" id='picmain'>
                    <div className="gleryhead">
                        <h1>Annual Conference' 23 - in pictures</h1>
                    </div>

                    <div className="selectorgal">
                        <div className="btn-junior moredaybtn">
                            <div className={`Rupay ${gal === "Day1" ? " galactive" : ""}`}>
                                <button className="galbtn" onClick={() => { setGal("Day1") }}>
                                    Day 1
                                </button>
                            </div>
                            <div className={`Rupay ${gal === "Day2" ? " galactive" : ""}`}>
                                <button
                                    className="galbtn"
                                    onClick={() => { setGal("Day2") }}
                                >
                                    Day 2
                                </button>
                            </div>
                            <div className={`Rupay ${gal === "Day3" ? " galactive" : ""}`}>
                                <button
                                    className="galbtn"
                                    onClick={() => { setGal("Day3") }}
                                >
                                    Day 3
                                </button>
                            </div>
                        </div>
                    </div>
                    {gal === "Day1" && <Day1 />}
                    {gal === "Day2" && <Day2 />}
                    {gal === "Day3" && <Day3 />}
                </div>
            </div>
        </>
    )
}

export default Gallery