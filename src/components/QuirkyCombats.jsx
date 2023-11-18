import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import { Quirky } from './Dataset';

import './Quirky.css';

const QuirkyCombats = () => {
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
            <div className='bybharat-top'>
                <h1>Quirky Combats</h1>
                <div className="main-bybharat">
                    {Quirky.map((item) => {
                        return (
                            <>
                                <div key={item.id} className="main-indi">
                                    <img src={""} data-src={item.img} alt="" 
                                     className={loaded ? "loaded" : "loading"}
                                     onLoad={() => setIsLoaded(true)}
                                    />
                                    <div className="link-btn-btm">
                                        <Link to={`/combat/${item.id}`}><p className='p-by'>Read more</p></Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
                <p className='p-more'>Stay tuned for more episodes!</p>
            </div>
        </>
    )
}

export default QuirkyCombats;