import React, { useState, useEffect } from 'react'

import { day3photos } from '../../Dataset'

const Day3 = () => {
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
            <div className="day1strts">
                <div className="day1txt">
                    <h2>Presenting you glimpses of NITSMUN Annual Conference 10.0 Day 3: On the third day, the delegates engaged in the documentation of the drafts, which was followed by a feast at NITS Cafe. After lunch, the IPC conducted the press conference, and the session was moved towards the closing ceremony. The delegate of France and Sirius Black emerged as the best delegates in NATO and the ICW, respectively, while Bhaswar Agnivesh and Kurumoju Deepak emerged as the best reporter and photojournalist, respectively. All the winners were awarded trophies and certificates by Dr. Wasim Arif, associate professor and faculty advisor of NITSMUN. Moreover, the delegates who bagged High Commendation, Special Mention, and Verbal Mention were presented with mementos and certificates. After the prize-distribution ceremony, the three-day conference was concluded by Ms. Shreyashi Roy Medhi, the Secretary-General of NITSMUN, and Mr. Maruf Padaya was declared the succeeding Secretary-General of NITSMUN. </h2>
                </div>
                <div className="datepubphotos">
                    <h3>Friday 10 Mar 2023 13.00 IST</h3>
                </div>
                <div className="day1potosstrts">
                    {day3photos.map((item) => {
                        return (
                            <div className="indidayphotos" key={item.id}>
                                <div className="imgindiphotodayhlder">
                                    <img src={""} data-src={item.img} alt=""
                                        className={loaded ? "loaded" : "loading"}
                                        onLoad={() => setIsLoaded(true)}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Day3