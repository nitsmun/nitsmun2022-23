/** @format */

import React from "react";

import { mockData } from "../Dataset";

import "./mockmun.css";

const MockMun = () => {
    return (
        <>
            <div className="mock-heading">
                <strong>
                    <h1>Mock MUN</h1>
                </strong>
            </div>

            <div className="mock-content">
                <p>
                    To get familarised with the rules and proceedings of a MUN
                    conference, just like each year before the main conference,
                    this year too on 9th and 10th of July, NITSMUN presents a
                    workshop and a mock MUN which are absolutely free.
                </p>{" "}
                <br />
                <p>
                    These conferences are chaired by the senior most members of
                    the team and include a complete go through lesson of the
                    rules and proceedings of a MUN conference. These mock
                    sessions prepare the freshmen students for the annual
                    conference.
                </p>
                <br />
            </div>
            <br />

            <div className="slider">
                <div className="slide-track">
                    {mockData.map((item) => {
                        return (
                            <div className="slide2" key={item.id}>
                                <img src={item.mockimage} alt={item.mockalt} />
                            </div>
                        );
                    })}

                    {mockData.map((item) => {
                        return (
                            <div className="slide2" key={item.id}>
                                <img src={item.mockimage} alt={item.mockalt} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default MockMun;
