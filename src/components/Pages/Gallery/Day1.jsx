import React, { useState, useEffect } from 'react'

import { day1photos } from '../../Dataset'

const Day1 = () => {
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
                    <h2>Presenting you glimpses of NITSMUN Annual Conference 10.0 DAY 1: With delegates participating from different curriculums and universities, the three-day conference of NITSMUN was kickstarted with the opening ceremony by Ms. Shreyashi Roymedhi, the Secretary-General of NITSMUN. Mrs. Archana Mishra, founder of Parikalpana NGO and wife of Mr. Anand Mishra, IPS, honored the opening ceremony of the 10th Annual Conference of NITSMUN with her esteemed presence. The delegates were briefed by the esteemed guests and chairpersons for the committees, namely, the International Confederation of Wizards, the North Atlantic Treaty Organization, and the International Press Corps. Dr. Wasim Arif, associate professor and faculty advisor of NITSMUN, then gaveled the conference to order, followed by a day full of debates and discussions. </h2>
                </div>

            <div className="datepubphotos">
                <h3>Friday 10 Mar 2023 13.00 IST</h3>
            </div>
                <div className="day1potosstrts">
                    {day1photos.map((item) => {
                        return (
                            <div className="indidayphotos" key={item.id}>
                                <div className="imgindiphotodayhlder">
                                    <img src={""} data-src={item.img}
                                        className={loaded ? "loaded" : "loading"}
                                        onLoad={() => setIsLoaded(true)}
                                        alt="" />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Day1