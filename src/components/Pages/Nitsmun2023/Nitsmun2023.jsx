import React, { useEffect, useState } from 'react'
import './Nitsmun2023.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';
import Faq23 from './Faq23';
import { nitsmun2k22 } from '../../Dataset';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import AboutBetn from './AboutBetn';
// import EB23 from './EB23';


const Nitsmun2023 = () => {
    useEffect(() => {
        document.title = 'NITSMUN 2023 | NITSMUN';
    }, []);

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    const [openipc, setOpenipc] = useState(false);
    const onOpenModalipc = () => setOpenipc(true);
    const onCloseModalipc = () => setOpenipc(false);

    const [openipcj, setOpenipcj] = useState(false);
    const onOpenModalipcj = () => setOpenipcj(true);
    const onCloseModalipcj = () => setOpenipcj(false);

    const [opennato, setOpennato] = useState(false);
    const onOpenModalnato = () => setOpennato(true);
    const onCloseModalnato = () => setOpennato(false);

    const [index, setIndex] = useState(0);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handlePrevClick() {
        setIndex(index - 1);
    }

    let nitsmun22img = nitsmun2k22[index];
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

                <div className="theme-nitsmun23">
                    {/* <div className="quote quote-rotate">
                        <img style={{ pointerEvents: 'none' }} src="./Images/nitsmun2k23/Quote.svg" alt="" />
                        
                    </div> */}

                    <h1> Rise: The Future Seeks Defense.</h1>
                    {/* <div className="quote">
                        <img style={{ pointerEvents: 'none' }} src="./Images/nitsmun2k23/Quote.svg" alt="" />
                    </div> */}

                </div>
                <div className="mun-sponsor">
                    <span className="powered-by">POWERED BY</span>
                    <a href="https://unstop.com/" target="_blank"
                        rel="norefferer"><img className='powered-by-img' src="https://www.linkpicture.com/q/unstop-logo.png" alt="UNSTOP" /></a>
                </div>


                <div className="mock23-desc">
                    <h2>Do you like to think critically and imagine yourself in the shoes of world leaders? Do you feel that you can form strong blogs and tilt the final decision in your interest? Do you have enough knowledge about the world that embraces wizards and magic? If yes, <span style={{ fontFamily: "Nunito", fontStyle: "italic" }}>NITSMUN, 2023</span> is surely for you!<br /><br />After two continuous years of online conferences, this time <span style={{ fontWeight: "900", fontFamily: "nunito" }}>NITSMUN</span> is all set to organise its annual conference offline, under the NITSMUN module of     <span style={{ fontFamily: "Nunito", fontStyle: "italic" }}>Incandescence, 2023</span>. With the theme of <span style={{ fontStyle: 'italic', fontFamily: 'nunito', fontWeight: '900', color: "#794894" }}>"breaking free"</span>, Incandescence, this year, comes in with the promise of being one of its kind. This cultural fest of <span style={{ fontFamily: "Nunito", fontStyle: "italic" }}>NIT, Silchar</span> has always witnessed numerous talents from all over the country. Being one of the best cultural fests of the Northeast, this time too Incandescence promises to keep up to its legacy and "break free" from the normal, you have always seen.<br /><br />Going with the promise made by Incandescence, NITSMUN too has made it a point to make its annual conference different from the past years. The conference will be held from <span style={{ fontFamily: 'nunito', fontWeight: '900' }}>17<sup style={{ fontWeight: "900" }}>th</sup> February 2023</span> to <span style={{ fontFamily: 'nunito', fontWeight: '900' }}>19<sup style={{ fontWeight: "900" }}>th</sup> February 2023</span>.</h2>
                </div>

                <AboutBetn />
                {/* <div className='off-reg-msg'>UPD: NITSMUN 2023 registration form will be released soon!</div> */}

                <div className="bg-pvd"></div>
                <div className="comt-sn" id="comt-23">
                    <div className="mock23-title comt-ipm">
                        <h1>Committees</h1>
                    </div>

                    <div className="ntsmn23-rl-cont">

                        {/* icow starts */}
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

                                    <Link to="/apply"><button style={{ cursor: "pointer" }}>Register Now!</button></Link>
                                    {/* <button style={{ cursor: 'not-allowed' }}>Register Now!</button> */}
                                </div>
                                <div className="rd-mr-0">
                                    <button onClick={onOpenModal}>Read More</button>
                                </div>
                                <Modal open={open} onClose={onCloseModal} center>
                                    <div className="icow-mdl" style={{ userSelect: "none" }}>
                                        <div className="title-hld">
                                            <h1>International Confederation Of Wizards</h1>
                                        </div>

                                        <div className="img-nts23 img-re-mr">
                                            <img src="https://www.linkpicture.com/q/icow-min.jpg" alt="" />
                                        </div>

                                        <div className="rd-mr-agnd">
                                            <h2> AGENDA- "Prosecuting Mr. Harry James Potter for destroying the elder wand"</h2>
                                        </div>

                                        <div className="rd-mr-cont">
                                            <h2>
                                                The all-mighty elder wand passes on from the previous master to the next one who wins it. Harry Potter was the last true and last master of the wand, and at the end of the battle of Hogwarts, he destroyed the wand. Putting it in Dumbledore's grave or snapping it in half, either way he made sure it came into no one's possession. Do you think Harry made the right call back then by taking matters in his own hands? Was not there a possibility of a better wizard in the future who would use the wand for a greater cause? Was destroying this rare artefact the only way out? This committee with the agenda "Prosecuting Mr. Harry James Potter for destroying the elder wand" will give you the chance to think and rethink. Reframe the story, if you want, just make sure to make the right decisions this time around.
                                            </h2>
                                        </div>

                                        <div className='off-reg-msg cntr-rd-mr-mg'>UPD:Background guide will be released soon!</div>

                                        <div className="btn-rd-mr">
                                            <div className="rgster-nts23">
                                                <Link to="/apply"><button style={{ cursor: "pointer" }}>Register Now!</button></Link>
                                            </div>

                                            <div className="rgster-nts23">
                                                <button style={{ cursor: 'not-allowed' }}>Background guide</button>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        {/* Icow ends */}

                        {/* IPc starts */}
                        <div className="agnd">
                            <div className="commt-nme hjipo">
                                <h1>International Press Corps (IPC)</h1>
                            </div>
                            <div className="img-nts23 bnjh">
                                <img src="https://www.linkpicture.com/q/ipc-min.jpg" alt="" />
                            </div>
                            <div className="comt-txt-imp">
                                <h2>Our second committee is for all the journalism enthusiasts out there, the <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>International Press Corps</span>.</h2>
                            </div>

                            <div className="rgster-nts23-rd-mr">
                                <div className="rgster-nts23">
                                    <Link to="/apply"><button style={{ cursor: "pointer" }}>Register Now!</button></Link>
                                </div>

                                <div className="rd-mr-0">
                                    <button onClick={onOpenModalipc}>Read More</button>
                                </div>

                                <Modal open={openipc} onClose={onCloseModalipc} center>
                                    <div className="icow-mdl" style={{ userSelect: "none" }}>
                                        <div className="title-hld">
                                            <h1>International Press Corps</h1>
                                        </div>

                                        <div className="img-nts23 img-re-mr">
                                            <img src="https://www.linkpicture.com/q/ipc-min.jpg" alt="" />
                                        </div>

                                        <div className="rd-mr-cont">
                                            <h2>
                                                Do you want to step in the shoes of the journalists, who work day and night to bring out information about the world? Do you feel you can hold press conferences and question world leaders? If yes, then IPC is the right place for you. The delegates under IPC keep a note of the happenings of a particular committee and question the other delegates under that committee from time to time when the need arises. As they say, the pen is mightier than the sword, your pen might help to become the best journalist at the conference. So, join in, show the power of your pen and win the title.
                                            </h2>
                                        </div>

                                        {/* <div className='off-reg-msg cntr-rd-mr-mg'>UPD:Background guide will be released soon!</div> */}

                                        <div className="btn-rd-mr">
                                            <div className="rgster-nts23">
                                                <Link to="/apply"><button style={{ cursor: "pointer" }}>Register Now!</button></Link>
                                            </div>

                                            <div className="rgster-nts23">
                                                <button style={{ cursor: 'not-allowed' }}>Background guide</button>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        {/* IPc ends */}


                        {/* nato starts */}
                        <div className="agnd">
                            <div className="commt-nme">
                                <h1>North Atlantic Treaty Organization (NATO)</h1>
                            </div>
                            <div className="img-nts23">
                                <img src="https://www.linkpicture.com/q/nato-min.jpg" alt="" />
                            </div>
                            <div className="comt-txt-imp">
                                <h2>Presenting to you our third Committee:  <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>North Atlantic Treaty Organization</span> (NATO): The <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>NATO</span> having been established in 1949 has since been serving its task of protecting the states of Europe, facilitate cooperation among states and secure peace in the continent.</h2>
                            </div>

                            <div className="rgster-nts23-rd-mr">
                                <div className="rgster-nts23">
                                    <Link to="/apply"><button style={{ cursor: "pointer" }}>Register Now!</button></Link>
                                </div>
                                <div className="rd-mr-0">
                                    <button onClick={onOpenModalnato}>Read More</button>
                                </div>

                                <Modal open={opennato} onClose={onCloseModalnato} center>
                                    <div className="icow-mdl" style={{ userSelect: "none" }}>
                                        <div className="title-hld">
                                            <h1>North Atlantic Treaty Organization (NATO)</h1>
                                        </div>

                                        <div className="img-nts23 img-re-mr">
                                            <img src="https://www.linkpicture.com/q/nato-min.jpg" alt="" />
                                        </div>

                                        <div className="rd-mr-agnd">
                                            <h2>AGENDA- "Expansion of NATO to establish peace in Europe" </h2>
                                        </div>

                                        <div className="rd-mr-cont">
                                            <h2>
                                                Recently, NATO has been the talk of the town and We believe you too have some thoughts about it that you would like to express. How about being a representative of a particular country and expressing the thoughts you have been holding on to? Sounds fun and appealing right? With the agenda "Expansion of NATO to establish peace in Europe", this committee is all set to welcome delegates that have the guts to fight and defeat.
                                            </h2>
                                        </div>

                                        <div className='off-reg-msg cntr-rd-mr-mg'>UPD:Background guide will be released soon!</div>

                                        <div className="btn-rd-mr">
                                            <div className="rgster-nts23">
                                                <Link to="/apply"><button style={{ cursor: "pointer" }}>Register Now!</button></Link>
                                            </div>

                                            <div className="rgster-nts23">
                                                <button style={{ cursor: 'not-allowed' }}>Background guide</button>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        {/* nato ends */}

                        {/* ipc journalism starts */}
                        <div className="agnd">
                            <div className="commt-nme hjipo">
                                <h1>Photo Journalism (IPC)</h1>
                            </div>
                            <div className="img-nts23 bnjh">
                                <img src="https://www.linkpicture.com/q/ipc-journalism-min.jpg" alt="" />
                            </div>
                            <div className="comt-txt-imp">
                                <h2>Calling all shutterbugs! <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>NITSMUN</span>, joining hands with <a href="https://www.instagram.com/obiettivo_official/" target="_blank" rel="norefferer"><span style={{ fontWeight: '900', fontFamily: "Nunito", textDecoration:"underline", color:"black"}}>OBIETTIVO</span></a> is on the lookout of photographers to join us at the upcoming Annual Conference and capture the essence of the event through your lenses!</h2>
                            </div>

                            <div className="rgster-nts23-rd-mr">
                                <div className="rgster-nts23">
                                    <Link to="/apply"><button style={{ cursor: "pointer" }}>Register Now!</button></Link>
                                </div>

                                <div className="rd-mr-0">
                                    <button onClick={onOpenModalipcj}>Read More</button>
                                </div>

                                <Modal open={openipcj} onClose={onCloseModalipcj} center>
                                    <div className="icow-mdl" style={{ userSelect: "none" }}>
                                        <div className="title-hld">
                                            <h1>Photo Journalism (IPC)</h1>
                                        </div>
                                        <div className="img-nts23 img-re-mr">
                                            <img src="https://www.linkpicture.com/q/ipc-journalism-min.jpg" alt="" />
                                        </div>
                                        <div className="rd-mr-cont jkio__lop" >
                                            <h2>
                                            <span style={{ fontWeight: '900', fontFamily: "Nunito" }}>NITSMUN</span> is back with another very interesting announcement. We have collaborated with the official photography club of NITS, <span style={{ fontWeight: '900', fontFamily: "Nunito", color:"black"}}>Obiettivo</span> and added a new segment to the IPC committee!<br/><br/>
                                            Yes, you guessed it right. We are adding in Photojournalism for the very first time. So, photographers, take out your camera, set the right lens and click the best moments! Our conference is all set to get captured by you!
                                            <br/><br/>
                                           
                                            As a photo journalist, you'll play an integral role in capturing and documenting the most important moments, speeches, and discussions of the conference. Your photos will serve as a visual representation of the conference, helping to spread awareness and promote the event long after it's over.<br/><br/>This is a fantastic opportunity to showcase your skills, network with other photographers and delegates, and contribute to a meaningful cause. If you're passionate about photography and interested in the world of diplomacy and international relations, this is the perfect role for you!<br/><br/>
                                            <span  style={{ fontWeight: '900', fontFamily: "Nunito", textDecoration:"underline" }}>RULES:</span><br/>

                                            <ul className='rules-ipc-jout__lksdws'>
                                                <li>You can use any camera or even your mobile camera. But, we won't provide you with one, if you come without it.</li><br/>
                                                <li>
                                                This is just an addition so it is not open to people who have already registered for the other committees (or even for IPC committee).
                                                </li>
                                            </ul>
                                            </h2>
                                        </div>
                                        <div className="btn-rd-mr hjko">
                                            <div className="rgster-nts23">
                                                <Link to="/apply"><button style={{ cursor: "pointer" }}>Register Now!</button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            </div>
                        </div>

                        {/* ipc journalism ends */}
                    </div>

                    <div className='off-reg-msg'>UPD: NITSMUN 2023 Executive Board will be released soon!</div>
                    {/* <EB23 /> */}
                    <Faq23 />
                </div>


                <div className="hjhdfkw">
                    <div className="faq-section bnhjh">
                        <h1>Reminiscence Of Nitsmun 2022</h1>
                    </div>

                    <div className="memory-nits22">
                        <img
                            src={nitsmun22img.img}
                            alt={nitsmun22img.alt}
                        />
                    </div>

                    <h2 className='uioips'>
                        ({index + 1} of {nitsmun2k22.length})
                    </h2>

                    <div className="btns btnn-hme1">
                        <button className="prev btn-testimonial" onClick={handlePrevClick}>
                            <AiOutlineArrowLeft className="btn-indi-hme" />
                        </button>
                        <button className="next btn-testimonial" onClick={handleNextClick}>
                            <AiOutlineArrowRight className="btn-indi-hme" />
                        </button>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Nitsmun2023