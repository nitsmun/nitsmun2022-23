import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { Articledata } from './Dataset';
import Underline3 from './Underline/Underline3';

import './Pages/articles.css'

const Articles0 = () => {
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
            <div className="articles-heading-cont">
                <h1>Articles</h1>
            </div>
            <div className="article-main-content">
                <div className="last-up">
                    <h5>
                        Last Updated : 8<sup>th</sup> March, 2023
                    </h5>
                </div>

                {Articledata.map((item) => {
                    return (
                        <div className="article-container" key={item.id}>
                            <div className="article-content">
                                <h1>{item.Title}</h1>
                            </div>

                            <div className="article-flexing">
                                <div className="img-holder">
                                    <img src={""} data-src={item.Artimg} alt={item.Alt}
                                        className={loaded ? "loaded" : "loading"}
                                        onLoad={() => setIsLoaded(true)}
                                    />
                                </div>
                                <div className="content-holder">
                                    <div className="post-date">
                                        <h3>{item.Date}</h3>
                                    </div>

                                    <div className="article-cont1">{item.cshort}</div>
                                    <div className="btnreadmore">
                                        <Link to={`/article/${item.id}`}>
                                            <button className="read-more-btn">Read More</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <Underline3 />
                        </div>
                    );
                })}
            </div>
            <p className='p-more'>Stay tuned for more articles!</p>
        </>
    )
}

export default Articles0