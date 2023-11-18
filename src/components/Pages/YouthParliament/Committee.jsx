import React from 'react'

import './Committee.css'

const Committee = () => {
    const handleOpen = (e) => {
        e.preventDefault()
        window.open("https://drive.google.com/file/d/13gwhKb3DwdIcLUFOTNJhjaISjZT0r-Kg/view?usp=drivesdk", "_blank")
    }

    return (
        <main className='cont_parent'>
            <h1>Youth Parliament 2023</h1>
            <h2 className='bio_yp'>Embracing Diversity and Democracy</h2>
            <p className='main_content_yp'>

                Get ready for a day filled with electrifying debates, passionate discussions, and the chance to make your voice heard at the NITSMUN Youth Parliament 2023! Mark your calendars for <span className='bold_custom'>November 5, 2023</span>, because we're about to dive headfirst into the hot topics of <span className='bold_custom'>"One Nation, One Election"</span> and <span className='bold_custom'>"Unrest in Manipur"</span>.<br /><br />

                Hey there! We know that politics and diplomacy might sound a bit daunting, but we promise, this event will be anything but boring. We're bringing a fresh perspective to the table, and we want you to join the conversation.<br /><br />

                Picture this: You, your friends, and some of the brightest young minds, all gathered under one roof to discuss the biggest issues being faced by our nation. Whether you're a seasoned debater or just getting started, there's a place for everyone at NITSMUN Youth Parliament.<br /><br />

                This isn't just another event. It's a chance to be part of the change you want to see in the world. Get ready to have a blast while tackling serious matters.Join us, and let's make politics fun, engaging, and interactive. The event takes place on <span className='bold_custom'>5th November, 2023.</span><br /><br /></p>

            {/* COMMITTEE */}
            <main className='committee_yp_info'>
                <h1>COMMITTEE</h1>
                <h2 className='hidden_title_loksabha'>Lok Sabha</h2>
                <div className='flex_hold_pic_cont'>
                    <div className='img_holder_yp_flex'>
                        <div className="img_container_parent">
                            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1698947454/WhatsApp_Image_2023-11-02_at_23.17.26_tzsip9.webp" alt="" />
                        </div>
                    </div>
                    <div className='content_holder_yp_flex'>
                        <h2 className='loksabha__1'>LOK SABHA</h2>
                        <p>Step into the world of NITSMUN's Youth Parliament, where vibrant young minds from diverse backgrounds converge, much like the Lok Sabha in India. Lok Sabha, the lower house of India's Parliament, is a lively microcosm of the nation's diversity. It brings together elected members from every nook and cranny of India, representing the collective voice and aspirations of its billion-plus citizens. Through engaging discussions on <span className='bold_custom'>"One Nation One Election"</span> and <span className='bold_custom'>"Unrest in Manipur"</span>, the Youth Parliament aims to bring out the inner leader in you.</p>
                        <button onClick={handleOpen} className='bg_btn__yp_1'>Background Guide</button>
                    </div>
                </div>
            </main>
        </main>
    )
}

export default Committee