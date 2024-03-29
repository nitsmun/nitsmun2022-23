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
        <img src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1676621238/nitsmun/nitsmun-blue-logo-min_o3panz.png" alt="nitsmun blue logo" />
        {/* <img src="https://scontent.fmaa8-1.fna.fbcdn.net/v/t39.30808-6/330903493_851943615877828_5069266823863244602_n.jpg?stp=dst-jpg_p526x296&_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=lEc9fXAzEo8AX8Rg1do&_nc_ht=scontent.fmaa8-1.fna&oh=00_AfBBmtQRIpUJCEhHJbDH64EU4kiXWGoDm2xALh3EZYfopw&oe=63EF4F67" alt="nitsmun blue logo" /> */}
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