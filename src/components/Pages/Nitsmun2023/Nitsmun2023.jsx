import React, { useEffect } from 'react'
import './Nitsmun2023.css'

const Nitsmun2023 = () => {
    useEffect(() => {
        document.title = 'NITSMUN 2023 | NITSMUN';
    }, []);
    return (
        <div style={{ userSelect: 'none' }}>
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
                    <h2>Do you like to think critically and imagine yourself in the shoes of world leaders? Do you feel that you can form strong blogs and tilt the final decision in your interest? Do you have enough knowledge about the world that embraces wizards and magic? If yes, <span style={{ fontFamily: "Nunito", fontStyle: "italic" }}>NITSMUN, 2023</span> is surely for you!<br /><br />After two continuous years of online conferences, this time <span style={{ fontWeight: "900", fontFamily: "nunito" }}>NITSMUN</span> is all set to organise its annual conference offline, under the NITSMUN module of     <span style={{ fontFamily: "Nunito", fontStyle: "italic" }}>Incandescence, 2023</span>. With the theme of <span style={{ fontStyle: 'italic', fontFamily: 'nunito', fontWeight: '900', color: "#794894" }}>"breaking free"</span>, Incandescence, this year, comes in with the promise of being one of its kind. This cultural fest of <span style={{ fontFamily: "Nunito", fontStyle: "italic" }}>NIT, Silchar</span> has always witnessed numerous talents from all over the country. Being one of the best cultural fests of the Northeast, this time too Incandescence promises to keep up to its legacy and "break free" from the normal, you have always seen.<br /><br />Going with the promise made by Incandescence, NITSMUN too has made it a point to make its annual conference different from the past years. The conference will be held from <span style={{ fontFamily: 'nunito', fontWeight: '900' }}>17<sup style={{ fontWeight: "900" }}>th</sup> February 2023</span> to <span style={{ fontFamily: 'nunito', fontWeight: '900' }}>19<sup style={{ fontWeight: "900" }}>th</sup> February 2023</span>.</h2>
                </div>

                <div className='off-reg-msg'>UPD: NITSMUN 2023 registration form will be released soon!</div>

                <div className="bg-pvd"></div>
                <div className="comt-sn" id="comt-23">
                    <div className="mock23-title comt-ipm">
                        <h1>Committees</h1>
                    </div>

                    <div className="ntsmn23-rl-cont">
                        <div className="agnd">

                            <div className="commt-nme">
                                <h1>International Confederation Of Wizards</h1>
                            </div>
                            <div className="img-nts23">
                                <img src="https://www.linkpicture.com/q/icow-min.jpg" alt="" />
                            </div>
                            <div className="comt-txt-imp">
                                <h2>Presenting to you, our first committee and also the one we are particularly the most thrilled for and for which we wish you would be equally excited, <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>The International Confederation of Wizards</span>!</h2>
                            </div>

                            <div className="rgster-nts23-rd-mr">
                                <div className="rgster-nts23">
                                    {/* <Link to="#">       <button style={{ cursor: "pointer" }}>Register Now!</button></Link> */}

                                    <button style={{ cursor: 'not-allowed' }}>Register Now!</button>
                                </div>


                                <div className="rd-mr-0">
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>

                        <div className="agnd">
                            <div className="commt-nme">
                                <h1>International Press Corps (IPC)</h1>
                            </div>
                            <div className="img-nts23">
                                <img src="https://www.linkpicture.com/q/ipc-min.jpg" alt="" />
                            </div>
                            <div className="comt-txt-imp">
                                <h2>Our second committee is for all the journalism enthusiasts out there, the <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>International Press Corps</span>.</h2>
                            </div>

                            <div className="rgster-nts23-rd-mr">
                                <div className="rgster-nts23">
                                    {/* <Link to="#">       <button style={{ cursor: "pointer" }}>Register Now!</button></Link> */}

                                    <button style={{ cursor: 'not-allowed' }}>Register Now!</button>
                                </div>

                                <div className="rd-mr-0">
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>

                        <div className="agnd">
                            <div className="commt-nme">
                                <h1>North Atlantic Treaty Organzation (NATO)</h1>
                            </div>
                            <div className="img-nts23">
                                <img src="https://www.linkpicture.com/q/nato-min.jpg" alt="" />
                            </div>
                            <div className="comt-txt-imp">
                                <h2>Presenting to you our third Committee:  <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>North Atlantic Treaty Organzation</span> (NATO): The <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>NATO</span> having been established in 1949 has since been serving its task of protecting the states of Europe, facilitate cooperation among states and secure peace in the continent.</h2>
                            </div>

                            <div className="rgster-nts23-rd-mr">
                                <div className="rgster-nts23">
                                    {/* <Link to="#">       <button style={{ cursor:'not-allowed' }}>Register Now!</button></Link> */}

                                    <button style={{ cursor: 'not-allowed' }}>Register Now!</button>
                                </div>
                                <div className="rd-mr-0">
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Nitsmun2023