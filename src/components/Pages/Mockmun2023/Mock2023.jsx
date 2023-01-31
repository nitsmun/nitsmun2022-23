import React, { useEffect } from 'react'
import './mock2023.css'
// import { Link } from 'react-router-dom'
const Mock2023 = () => {
    useEffect(() => {
        document.title = 'Mock MUN 2023 | NITSMUN';
    }, []);
    return (
        <>
            <div className="mock23-main" style={{ userSelect: 'none' }}>
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
                        <h1>Mock MUN 2023</h1>
                    </div>

                    <div className="mock23-desc">
                        <h2>As <span style={{ fontStyle: 'italic', fontFamily: 'nunito', fontWeight: '900', color:"#794894" }}>Incandescence 2023</span> knocks on the door, <span style={{ fontWeight: "900", fontFamily: "nunito" }}>NITSMUN</span> organized a Mock MUN to prepare the students and enhance their diplomatic abilities to polish their skills for the upcoming annual conference. <br /><br />With the committee set as <span style={{ fontWeight: "900", fontFamily: "nunito" }}>UNHRC</span>, the conference had two <span style={{fontFamily:"Nunito", fontStyle:"italic"}}>GSL</span> sessions, one <span style={{fontFamily:"Nunito", fontStyle:"italic"}}>moderated caucus</span> and one <span style={{fontFamily:"Nunito", fontStyle:"italic"}}>unmoderated caucus</span>. The delegates expressed many different ideologies and opinions while also keeping their foreign policies intact. Though most of the countries, like <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Mongolia, Spain,</span> etc blamed the Middle Eastern countries for the ongoing modern slavery (<span style={{fontFamily:"Nunito", fontStyle:"italic"}}>The kafala system</span>), the delegates of countries like <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Saudi Arabia, Jordan, Israel, Qatar,</span> etc asked the house to join hands to take measures to prevent exploitation of migrant workers, keeping all the blame-game aside. The delegates of <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Netherlands</span> and <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Mongolia</span> claimed in their <span style={{fontFamily:"Nunito", fontStyle:"italic"}}>GSL</span> speeches that their countries have one of the best labour laws in the world. Though the delegate of <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Jordan</span> was charged by more than half of the countries present in the session, the delegate stuck to their opinion till the very end. There were two different blocs, one headed by the delegate of <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Jordan</span> and the other by the delegate of <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Spain</span>. Both the blocs put forward the reforms, that they prepared as a part of the working paper made by them during the unmoderated caucus, as the house listened to them patiently. The latter bloc passed with a majority of votes, while the former clearly failed. In the Press conference, the delegate of <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Jordan</span> passed the question by asking the press to wait for the draft resolution, while the delegate of <span style={{fontFamily:"Nunito", fontStyle:"italic", textDecoration:"underline"}}>Spain</span> accepted that their country too has flaws and that they are working to fix them. The other delegates also stated how their countries are working towards greater change in response to the questions asked in the Press conference.<br /><br />All in all, we got to see how some of the countries tried to hide the truth by playing blame games, while the others actually worked or wanted to work for the betterment of migrating workers in their specific countries.<br /><br />This was the first offline Mock mun held after the pandemic and it was indeed a great success. Hope to see such pomp and enthusiasm in the annual conference as well.<br /><br />Below are some glimpses of the conference:</h2>
                    </div>
                </div>

                <div className="container-junmun2021">
                    <div className="images-junmun21">
                        <img
                            src='https://www.linkpicture.com/q/IMG_2899-min.jpg'
                            alt="Mock MUN 2023"
                        />
                        <img
                            src='https://www.linkpicture.com/q/IMG_2926-min.jpg'
                            alt="Mock MUN 2023"
                        />
                    </div>
                    <div className="images-junmun21">
                        <img
                            src="https://www.linkpicture.com/q/IMG_2918-min.jpg"
                            alt="Mock MUN 2023"
                        />
                        <img
                            src="https://www.linkpicture.com/q/IMG_2935-min.jpg"
                            alt="Mock MUN 2023"
                        />
                        <img
                            src="./Images/mockmun2023/IMG_2996-min.jpg"
                            alt="Mock MUN 2023"
                        />
                    </div>


                </div>

                <div className='off-reg-msg'>Mock MUN 2023 Registration has been closed!</div>
                <div className="link-btn-btm">
                    <p className='p-by mock23-txt false-off-reg' style={{ cursor:'not-allowed'}}>Click here to register yourself in Mock MUN 2023!</p>
                </div>


                <div className="link-btn-btm">
                    <a href="https://drive.google.com/file/d/1ixNDUCG9pCgmDy8DS-Ile9Hw0M73LMlg/view?usp=sharing" rel="noreferrer"
                        target="_#blank" ><p className='p-by mock23-txt false-off-reg'>Background Guide Released!<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="newwindow newwinmockbg"><path d="M20.5001 2H15.5001C15.3675 2 15.2403 2.05268 15.1465 2.14645C15.0528 2.24021 15.0001 2.36739 15.0001 2.5V3.5C15.0001 3.63261 15.0528 3.75979 15.1465 3.85355C15.2403 3.94732 15.3675 4 15.5001 4H18.5901L7.6501 14.94C7.60323 14.9865 7.56604 15.0418 7.54065 15.1027C7.51527 15.1636 7.5022 15.229 7.5022 15.295C7.5022 15.361 7.51527 15.4264 7.54065 15.4873C7.56604 15.5482 7.60323 15.6035 7.6501 15.65L8.3501 16.35C8.39658 16.3969 8.45188 16.4341 8.51281 16.4594C8.57374 16.4848 8.63909 16.4979 8.7051 16.4979C8.7711 16.4979 8.83646 16.4848 8.89738 16.4594C8.95831 16.4341 9.01362 16.3969 9.0601 16.35L20.0001 5.41V8.5C20.0001 8.63261 20.0528 8.75979 20.1465 8.85355C20.2403 8.94732 20.3675 9 20.5001 9H21.5001C21.6327 9 21.7599 8.94732 21.8537 8.85355C21.9474 8.75979 22.0001 8.63261 22.0001 8.5V3.5C22.0001 3.10218 21.8421 2.72064 21.5608 2.43934C21.2795 2.15804 20.8979 2 20.5001 2V2Z" fill="currentColor"></path><path d="M21.5 13H20.5C20.3674 13 20.2402 13.0527 20.1464 13.1464C20.0527 13.2402 20 13.3674 20 13.5V20H4V4H10.5C10.6326 4 10.7598 3.94732 10.8536 3.85355C10.9473 3.75979 11 3.63261 11 3.5V2.5C11 2.36739 10.9473 2.24021 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V13.5C22 13.3674 21.9473 13.2402 21.8536 13.1464C21.7598 13.0527 21.6326 13 21.5 13Z" fill="currentColor"></path></svg></p></a>
                </div>

                <div className="mock23-desc">
                    <h2>

                        {/* <span style={{ fontWeight: 'bolder', fontFamily: 'Nunito', color: '#5a4894' }}>AGENDA: </span>Exploitation of Migrant workers for labour in the Middle East <span style={{ fontWeight: 'bold', fontFamily: 'Nunito' }}>(UNHRC)</span><br /><br />
                    <span style={{ fontWeight: 'bolder', fontFamily: 'Nunito', color: '#5a4894' }}>
                        DATE & TIME: </span>
                        January 28 2023, 10AM - 5PM
                        <br /><br /> */}

                        {/* <span style={{ fontWeight: 'bolder', fontFamily: 'Nunito', color: '#5a4894' }}>VENUE: </span><a href="https://goo.gl/maps/YqYfgRhre9D2ZCo16" rel="noreferrer"
                        target="_#blank"><p className='p-by mock23-txt'>New Gallery (G 305), NIT Silchar!<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="newwindow newwinmockbg"><path d="M20.5001 2H15.5001C15.3675 2 15.2403 2.05268 15.1465 2.14645C15.0528 2.24021 15.0001 2.36739 15.0001 2.5V3.5C15.0001 3.63261 15.0528 3.75979 15.1465 3.85355C15.2403 3.94732 15.3675 4 15.5001 4H18.5901L7.6501 14.94C7.60323 14.9865 7.56604 15.0418 7.54065 15.1027C7.51527 15.1636 7.5022 15.229 7.5022 15.295C7.5022 15.361 7.51527 15.4264 7.54065 15.4873C7.56604 15.5482 7.60323 15.6035 7.6501 15.65L8.3501 16.35C8.39658 16.3969 8.45188 16.4341 8.51281 16.4594C8.57374 16.4848 8.63909 16.4979 8.7051 16.4979C8.7711 16.4979 8.83646 16.4848 8.89738 16.4594C8.95831 16.4341 9.01362 16.3969 9.0601 16.35L20.0001 5.41V8.5C20.0001 8.63261 20.0528 8.75979 20.1465 8.85355C20.2403 8.94732 20.3675 9 20.5001 9H21.5001C21.6327 9 21.7599 8.94732 21.8537 8.85355C21.9474 8.75979 22.0001 8.63261 22.0001 8.5V3.5C22.0001 3.10218 21.8421 2.72064 21.5608 2.43934C21.2795 2.15804 20.8979 2 20.5001 2V2Z" fill="currentColor"></path><path d="M21.5 13H20.5C20.3674 13 20.2402 13.0527 20.1464 13.1464C20.0527 13.2402 20 13.3674 20 13.5V20H4V4H10.5C10.6326 4 10.7598 3.94732 10.8536 3.85355C10.9473 3.75979 11 3.63261 11 3.5V2.5C11 2.36739 10.9473 2.24021 10.8536 2.14645C10.7598 2.05268 10.6326 2 10.5 2H3.5C3.10218 2 2.72064 2.15804 2.43934 2.43934C2.15804 2.72064 2 3.10218 2 3.5V20.5C2 20.8978 2.15804 21.2794 2.43934 21.5607C2.72064 21.842 3.10218 22 3.5 22H20.5C20.8978 22 21.2794 21.842 21.5607 21.5607C21.842 21.2794 22 20.8978 22 20.5V13.5C22 13.3674 21.9473 13.2402 21.8536 13.1464C21.7598 13.0527 21.6326 13 21.5 13Z" fill="currentColor"></path></svg>
                        </p></a> */}

                    </h2>
                </div>
            </div>
        </>
    )
}

export default Mock2023