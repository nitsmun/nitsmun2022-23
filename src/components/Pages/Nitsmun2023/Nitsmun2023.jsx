import React, { useEffect } from 'react'
import './Nitsmun2023.css'
const Nitsmun2023 = () => {
    useEffect(() => {
        document.title = 'NITSMUN 2023 | NITSMUN';
    }, []);
    return (
        <div style={{userSelect:'none'}}>
            <div className="nits23-top">
                <div className="top-bner-23">
                    <img src="https://www.linkpicture.com/q/Nitsmun-2k23-min.png" alt="" />
                </div>
            </div>

            <div className="ntsmun23-content">
                <div className="mock23-title">
                    <h1>NITSMUN  2023</h1>
                </div>

                <div className="mock23-desc">
                        <h2>Do you like to think critically and imagine yourself in the shoes of world leaders? Do you feel that you can form strong blogs and tilt the final decision in your interest? Do you have enough knowledge about the world that embraces wizards and magic? If yes, NITSMUN, 2023 is surely for you!<br/><br/>After 2 continuous years of online conferences, this time NITSMUN is all set to organise its annual conference offline, under the NITSMUN module of Incandescence, 2023. With the theme of "breaking free", Incandescence, this year, comes in with the promise of being one of its kind. This cultural fest of NIT, Silchar has always witnessed numerous talents from all over the country. Being one of the best cultural fests of the Northeast, this time too Incandescence promises to keep up to its legacy and "break free" from the normal, you have always seen.<br/><br/>Going with the promise made by Incandescence, NITSMUN too has made it a point to make its annual conference different from the past years. The conference will be held from 17<sup>th</sup> 2023 to 19<sup>th</sup> February 2023.</h2>
                    </div>
            </div>
        </div>


    )
}

export default Nitsmun2023