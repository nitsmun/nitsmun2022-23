import React from 'react'
import { useParams, Link } from "react-router-dom";
import Helmet from "react-helmet";
import { mainbybharat } from "./Dataset";
import './ByBharatDetail.css';
const ByBharatDetail = () => {
  const { id } = useParams();

  return (
    <>
      {mainbybharat.filter((item) => item.id === id).map((item) => (
        <div className='bybharatdetail-top' key={item.id}>
          <Helmet>
            <title>{item.title}</title>
          </Helmet>
          <h1>{item.top}</h1>
          <div className='main-bybharatdetail' key={item.id}>
            <div className="indi-poster-bybharat">
              <img src={item.image} alt={item.alt} />
            </div>
            <div className="indi-poster-bybharat">
              <img src={item.image1} alt={item.alt} />
            </div>
            <div className="indi-poster-bybharat">
              <img src={item.image2} alt={item.alt} />
            </div>
            <div className="indi-poster-bybharat">
              <img src={item.image3} alt={item.alt} />
            </div>
            <div className="indi-poster-bybharat">
              <img src={item.image4} alt={item.alt} />
            </div>
            <div className="indi-poster-bybharat">
              {item.image5}
            </div>
          </div>

          <div className="link-btn-btm">
            <Link to="/segments"><p className='p-by'>Back to Segments?</p></Link>
          </div>
          
        </div>
      ))}
    </>
  )
}

export default ByBharatDetail;