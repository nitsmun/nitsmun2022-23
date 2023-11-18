/** @format */

import React, { useEffect, useState } from "react";

import "./timer.css";

let timeTo = new Date(2023, 1, 17, 0, 0, 0, 0);
let timeLimit = Math.floor(timeTo / 1000);
const timeIntervals = [60, 60, 24, 100];
const timeIntervalName = ["Days", "Hrs", "Mins", "Secs"];

function countdown() {
    let timerDisplay = [0, 0, 0, 0];

    const timeNow = Math.floor(Date.now() / 1000);
    let timeDiff = timeLimit - timeNow;

    if (timeDiff < 0) {
        timerDisplay = ["Event Coming Soon!"];
    } else {
        timeIntervals.forEach((interval, index) => {
            timerDisplay[index] = `${timeDiff % interval}`.padStart(2, "0");
            timeDiff = Math.floor(timeDiff / interval);
        });
    }

    return timerDisplay;
}

const Timer = () => {
    let [display, setDisplay] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const timerInt = setInterval(() => {
            let displayList = countdown();

            setDisplay(displayList.reverse());

            if (displayList.length === 1) clearInterval(timerInt);
        }, 1000);

        return () => clearInterval(timerInt);
    }, []);

    return (
        <div>
            {display.length === 4 && (
                <div className="timer-limit">
                    NITSMUN{" "}
                    <span
                        style={{ color: "#eb55dc", fontFamily: "Nunito" }}
                        className="timer-top"
                    >
                        Annual Conference
                    </span>{" "}
                    2023 starts in{" "}
                </div>
            )}
            <div id="timer">
                {display.length === 4 &&
                    display.map((interval, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="timer-int">
                                    <div className="timer-int-value">
                                        <tt>{interval}</tt>
                                    </div>{" "}
                                    <div className="timer-int-label">
                                        {timeIntervalName[index]}
                                    </div>{" "}
                                </div>
                                {index < display.length - 1 &&
                                    ((window.innerWidth < 1000 &&
                                        index !== 1) ||
                                        window.innerWidth >= 1000) && (
                                        <div className="timer-int-colon">:</div>
                                    )}
                            </React.Fragment>
                        );
                    })}
            </div>
        </div>
    );
};

export default Timer;
