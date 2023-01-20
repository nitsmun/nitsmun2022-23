import React, { useEffect } from 'react'
import './mock2023.css'
import { Link } from 'react-router-dom'
const Mock2023 = () => {
    useEffect(() => {
        document.title = 'Mock MUN 2023 | NITSMUN';
    }, []);
    return (
        <>
            <div className="mock23-main">
                <div className="mock23-posters">
                    <div className="mock-post">
                        <img src="./Images/mockmun2023/mock23-1.jpg" alt="Mock MUN 2023" />
                    </div>
                    <div className="mock-post">
                        <img src="./Images/mockmun2023/mock23-2.jpg" alt="Mock MUN 2023" />
                    </div>
                    <div className="mock-post">
                        <img src="./Images/mockmun2023/mock23-3.jpg" alt="Mock MUN 2023" />
                    </div>
                </div>

                <div className="mock23-content">
                    <div className="mock23-title">
                        <h1>MOCK MUN 2023</h1>
                    </div>

                    <div className="mock23-desc">
                        <h2>As Incandescence 2023 knocks on your door, prepare to hone your diplomatic abilities, master the fundamentals of MUN, and polish your talents at the upcoming Mock MUN conference hosted by NITSMUN. Come along to our mock MUN to practise your public speaking, debating, and international relations skills. Don't pass up this chance to polish your skills, win exciting prizes and over everyone at your next MUN conference. Can't wait to host you on dice! <br /><br />And it's absolutely free of charges, so what are you waiting for?</h2>
                    </div>
                </div>

                <div className="link-btn-btm">
                    <Link to="/apply"><p className='p-by mock23-txt'>Click here to register yourself in Mock MUN 2023!</p></Link>
                </div>

                <div className="mock23-desc">
                    <h2><span style={{ fontWeight: 'bolder', fontFamily: 'Nunito', color: '#5a4894' }}>AGENDA: </span>Exploitation of Migrant workers for labour in the Middle East <span style={{ fontWeight: 'bold', fontFamily: 'Nunito' }}>(UNHRC)</span><br /><br /><span style={{ fontWeight: 'bolder', fontFamily: 'Nunito', color: '#5a4894' }}>DATE & TIME: </span>January 28 2023, 10AM - 5PM<br /><br /><span style={{ fontWeight: 'bolder', fontFamily: 'Nunito', color: '#5a4894' }}>VENUE: </span><a href="https://goo.gl/maps/YqYfgRhre9D2ZCo16" rel="noreferrer"
                        target="_#blank"><p className='p-by mock23-txt lcn-mockmun'>New Gallery (G 305), NIT Silchar</p></a></h2>
                </div>
            </div>
        </>
    )
}

export default Mock2023