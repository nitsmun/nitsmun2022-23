import React, {useEffect} from 'react'
import './wrapped2022.css'
import { Link } from 'react-router-dom'
const Wrapped = () => {
  useEffect(() => {
    document.title = "Wrapped | NITS MUN";
  }, []);
  return (
    
    <>
      <div className="wrapped-top">
        <img src="./Images/wrapped2022/nitsmun blue logo.png" alt="nitsmun blue logo" />
      </div>

      <div className="wraping-2022">
        <h1>WRAPPING UP 2022</h1>
      </div>

      <div className="wrapping-content-short">
        <h3>With that the 2022 season comes to an end. 2022 was an eventful year, having a lots of ups and downs. So, let's end this 2022 season with a quick recap of the year. Presenting to you some of the major changes, that took place in different nooks and corners of the globe, this year.</h3>
      </div>

      <div className="link-btn-btm read-more-wrapped">
        <Link to='wrapped2022'><p className='p-by read-more-wrapped-btn'>Read more...</p></Link>
      </div>
    </>
  )
}

export default Wrapped