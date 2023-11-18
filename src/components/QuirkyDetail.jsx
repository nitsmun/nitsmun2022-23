import React, { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import Helmet from "react-helmet";

import { Quirky } from './Dataset';

const QuirkyDetail = () => {
    const { id } = useParams();
    const config = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.2,
    };
    const [loaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let observer = new window.IntersectionObserver(function (entries, self) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    loadImages(entry.target);
                    self.unobserve(entry.target);
                }
            });
        }, config);
        const imgs = document.querySelectorAll("[data-src]");
        imgs.forEach((img) => {
            observer.observe(img);
        });
        return () => {
            imgs.forEach((img) => {
                observer.unobserve(img);
            });
        };
    }, []);

    const loadImages = (image) => {
        image.src = image.dataset.src;
    };
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
                            <img src={""} data-src={item.image} className={loaded ? "loaded" : "loading"}
                                onLoad={() => setIsLoaded(true)} alt={item.alt} />

                        </div>
                        <div className="indi-poster-bybharat">
                            <img src={""} data-src={item.image1} className={loaded ? "loaded" : "loading"}
                                onLoad={() => setIsLoaded(true)} alt={item.alt} />
                        </div>
                        <div className="indi-poster-bybharat">
                            <img src={""} data-src={item.image2} className={loaded ? "loaded" : "loading"}
                                onLoad={() => setIsLoaded(true)} alt={item.alt} />
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