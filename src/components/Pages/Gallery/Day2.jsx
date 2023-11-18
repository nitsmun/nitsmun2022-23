import React, { useState, useEffect } from 'react'

import { day2photos } from '../../Dataset'

const Day2 = () => {
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
                    <h2>Presenting you glimpses of NITSMUN Annual Conference 10.0 Day 2: After the rhetoric of Day 1, the first half of the second day witnessed a series of arguments and counter-arguments from the delegates of both ICW and NATO. The second half of the day went on the lighter side with delegates participating in the NITSMUN Socials 2023. The Socials, an event intended to get delegates acquainted with one another, witnessed considerable participation from both delegates and the members of the secretariat. Delegates were seen singing, dancing, playing games, clicking pictures and having fun after successfully participating in three sessions of the conference. The Socials witnessed all the friction that developed between the delegates wear off. </h2>
                </div>
                <div className="datepubphotos">
                <h3>Friday 10 Mar 2023 13.00 IST</h3>
            </div>
                <div className="day1potosstrts">
                    {day2photos.map((item) => {
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

export default Day2