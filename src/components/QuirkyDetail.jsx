import React from 'react';
import { useParams, Link } from "react-router-dom";
import Helmet from "react-helmet";
import { Quirky } from './Dataset';


const QuirkyDetail = () => {
    const { id } = useParams();
    return (
        <>
            {Quirky.filter((item) => item.id === id).map((item) => (

                <div className='quirkytdetail-top' key={item.id}>
                    <Helmet>
                        <title>{item.title0}</title>
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
                       
                    </div>

                    <div className="link-btn-btm">
                        <Link to="/segments"><p className='p-by'>Back to Segments?</p></Link>
                    </div>
                </div>
            ))}
        </>
    )
}

export default QuirkyDetail;