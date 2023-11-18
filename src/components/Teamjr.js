/** @format */

import React, { useState, useEffect } from "react";
import "./Teamjr.css";
import { Secretariatjr } from "./Dataset";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import Underline2 from "./Underline2";
const Teamjr = () => {
    const config = {
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.2,
    };
    const [loaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let observer = new window.IntersectionObserver(function (
            entries,
            self,
        ) {
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
            <div className="team-stats-card1">
                {Secretariatjr.map((item) => {
                    return (
                        <div key={item.id} className="team-stats1">
                            <div>
                                <center>
                                    <img
                                        className={`${
                                            loaded ? "loaded" : "loading"
                                        } team-img1`}
                                        onLoad={() => setIsLoaded(true)}
                                        src={""}
                                        data-src={item.imgsrc}
                                        alt=""
                                    />
                                </center>
                            </div>

                            <div className="social-media">
                                <a href={item.mail}>
                                    <button className="btn-icon1">
                                        <HiOutlineMail
                                            className="icon-color"
                                            size={30}
                                        />
                                    </button>
                                </a>

                                <a
                                    href={item.linkedin}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <button className="btn-icon2">
                                        <FaLinkedinIn
                                            className="icon-color1"
                                            size={25}
                                        />
                                    </button>
                                </a>

                                <a
                                    href={item.fb}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    {item.icon0}
                                </a>
                            </div>

                            <h1>{item.name}</h1>
                            <Underline2 />
                            <h2 className="team-posting-sec">{item.post}</h2>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Teamjr;
