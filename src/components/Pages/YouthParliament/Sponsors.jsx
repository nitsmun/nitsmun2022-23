import React, { useState } from 'react'
import './Sponsors.css'
const Sponsors = () => {
  const [transform, setTransform] = useState(false)
  const handleClick = () => {
    setTransform(prev => !prev)
  }

  const [transform0, setTransform0] = useState(false)
  const handleClick0 = () => {
    setTransform0(prev => !prev)
  }
 
  return (
    <main className='sponsors_main'>
      <h1 className='sponsors_title'>Proudly co-sponsored by</h1>
      <div
        className="time_img_holder"
      onClick={handleClick}
      >
        <img className={transform ? "scale_up" : ""} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1698940535/WhatsApp_Image_2023-11-02_at_21.22.59-removebg-preview_nh7zfi.png" alt="" />

        <div className={`${transform ? "become__visible" : ""} included_content_time`}>
          <p>We're delighted to announce T.I.M.E, a leading test-prep institute, as our co-sponsor for NITSMUN Youth Parliament 2023! <br /><br />

            T.I.M.E is a true leader in the field of education. A significant number of students at different prestigious institutes like IIMs and other top business schools across India are from T.I.M.E, which provides top-notch training for various competitive exams, like CAT, at both the graduate and postgraduate levels. With 200+ offices across India, T.I.M.E is dedicated to nurturing academic excellence.
            <br /><br />
            We extend our heartfelt gratitude to T.I.M.E for their generous support. Together, we look forward to an inspiring and impactful event that will shape the future leaders of tomorrow.
            <br /><br />
            <span className='custom___pink'>#NITSMUN</span>{" "}
            <span className='custom___pink'>#YouthParliament</span>
          </p>
        </div>
      </div>

      <h1 className='sponsors_title'>Supported by</h1>

      <div
      onClick={handleClick0}
        className="time_img_holder" id='just___small'
      >
        <img className={transform0 ? "scale_up" : ""} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1698940492/WhatsApp_Image_2023-11-02_at_21.24.11-removebg-preview_elup4p.png" alt="" />

        <div className={`${transform0 ? "become__visible" : ""} included_content_time`} id='just___small0'>
          <p>We are deeply grateful to Sandhya Enterprise for their invaluable support for the NITSMUN Youth Parliament.
            <br /><br />
            Sandhya Enterprise, a trusted local departmental store in Silchar, is renowned for its diverse offerings, ranging from tailoring items, stationery supplies, decorative items, cosmetics, threads, wool threads, beads, ribbons, laces, designer cloth, and more. Their commitment to our event and their unwavering dedication to community service are truly commendable.
            <br /><br />
            We thank Sandhya Enterprise once again for their generous contribution, which has contributed to the success of the NITSMUN Youth Parliament. Their dedication is an inspiration to us all.
          </p>
        </div>
      </div>

    </main>
  )
}

export default Sponsors