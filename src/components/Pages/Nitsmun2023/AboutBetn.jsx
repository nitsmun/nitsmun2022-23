import React, { useState } from 'react'

import { Modal } from 'react-responsive-modal';

import './AboutBetn.css';
import 'react-responsive-modal/styles.css';

const AboutBetn = () => {
    const [openmun, setOpenmun] = useState(false);
    const onOpenModalmun = () => setOpenmun(true);
    const onCloseModalmun = () => setOpenmun(false);

    const [openicnd, setOpenicnd] = useState(false);
    const onOpenModalicnd = () => setOpenicnd(true);
    const onCloseModalicnd = () => setOpenicnd(false);

    const [opensecg, setOpensecg] = useState(false);
    const onOpenModalsecg = () => setOpensecg(true);
    const onCloseModalsecg = () => setOpensecg(false);

    return (
        <>
            <div className="middle-n-23">
                <div className="chld-nml" onClick={onOpenModalmun} style={{ cursor: 'pointer' }}>
                    <img src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676474853/events/nitsmun/nitsmun-logo_tdkzbf.svg" alt="" />
                </div>

                <Modal open={openmun} onClose={onCloseModalmun} center>
                    <div className="nhu__ghsd">
                        <h1 className='hjfe_dlk'>About NITSMUN</h1>
                        <p className='kopeor____jkej'>NITSMUN was founded in 2014 when a group of like-minded people wanted to create a society for younger people to discuss, debate, and deliberate present-day crises whilst experiencing themselves being in the shoes of various world leaders. Ever since the first MUN session in 2014, our society has grown manifold with more enthusiastic people joining in and helping us emerge as one the best and most promising MUN societies in NE India. Our conference offers its delegates an unrivaled Model UN experience by running highly personalized, engaging, and dynamic committees.<br /><br />NITSMUN aspires to involve youth in international dialogue, deliberate upon the dire issues of the world and shape them into strong individuals who'll become the leaders of tomorrow.<br /><br />Besides having participated in various MUNs in and around the country and bringing home numerous accolades and valuable experience, we have also hosted MUNs every single year since, with multiple mock sessions and collaborative conferences with world-class universities, with awe-inspiring members of the EB training and guiding us to think rationally, act quickly and solve modern-day problems and at the same time also provide us with the support required. NITSMUN aims at polishing the interpersonal, debating, and deliberating skills of the participants and mold them into a leader of tomorrow.</p>
                    </div>
                </Modal>

                <div className="chld-nml" onClick={onOpenModalicnd} style={{ cursor: 'pointer' }}>
                    <img src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676474673/events/nitsmun/incand_aq33rz.svg" alt="" />
                </div>

                <Modal open={openicnd} onClose={onCloseModalicnd} center>
                    <div className="nhu__ghsd">
                        <h1 className='hjfe_dlk'>About <a style={{ fontFamily: 'Nunito', fontWeight: "900", color: "#794894" }} href="https://incand.in" target="_blank" rel="norefferer">INCANDESCENCE</a></h1>
                        <p className='kopeor____jkej'>Incandescence, the cultural fest of NIT Silchar, is one of the most hyped and happening fest in the entire North East. The land of NITS witnesses some of the most famous artists of the nation, while the air of the place is filled with excitement, exhilaration and enthusiasm. This year, Incandescence promises to 'Break Free' and take you quite a journey so stay tuned for what’s coming!</p>
                    </div>
                </Modal>

                <div className="chld-nml hjkilt" onClick={onOpenModalsecg} style={{ cursor: 'pointer' }}>
                    <img src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676475172/events/nitsmun/eml-removebg-preview_mmhogs.png" alt="" />
                </div>
                <Modal open={opensecg} onClose={onCloseModalsecg} center>
                    <div className="nhu__ghsd">
                        <h1 className='hjfe_dlk'>Welcome Letter from the Secretary General</h1>
                        <p className='kopeor____jkej'>Dear delegates,
                            <br />
                            On behalf of my secretariat, with utmost honour and pride, I welcome you all to the 10th edition of NIT Silchar Model United Nations Annual Conference.
                            <br />
                            The success of its maiden edition presented us with a challenge to make the upcoming edition even better and bigger.
                            <br />
                            <br />
                            Due to the relentless efforts of the team every passing year paired with the enthusiastic participants and stellar executive board  members, NITSMUN has been able to carve its own place in the MUN circuit and now stands out as one of the forerunners amongst the NE India MUNs. Through the simulation of the annual conferences and year-round activity for the MUN enthusiasts, NITSMUN continues to uphold its passion and dedication to engage the youth in MUN culture and bring out the best in them.
                            <br />
                            <br />
                            This will be a golden opportunity to expand your knowledge and utilize it in engaging debates and simultaneously build your critical thinking as well as writing skills. You will be able to connect with talented people and learn immensely throughout the process, all from the comfort of your home. To achieve the same you need to do extensive research beforehand and our team has put in every effort to make your research experience smoother and hassle-free by making this background guide as comprehensive as we can. From ROPs to references, the background guide has it all. We look forward to welcoming you and hope you will have an enriching experience!

                            <br />
                            <br />
                            Shreyashi Roymedhi
                            <br />
                            Secretary General
                        </p>
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default AboutBetn