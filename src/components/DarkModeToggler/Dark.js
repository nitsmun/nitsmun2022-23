/** @format */

import React, { useState } from "react";

import "./Dark.css";

const Dark = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <div className="container">
                    <span style={{ color: darkMode ? "grey" : "yellow" }}>
                        <BsSunFill />
                    </span>
                    <div className="switch-checkbox">
                        <input
                            type="checkbox"
                            onChange={() => setDarkMode(!darkMode)}
                        />
                    </div>

                    <span style={{ color: "grey" }}>
                        <BsFillMoonFill />
                    </span>
                </div>
            </div>
        </>
    );
};

export default Dark;
