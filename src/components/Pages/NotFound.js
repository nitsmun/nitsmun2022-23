/** @format */

import React from "react";

import { TabTitle } from "../Utils/Genfn";

import "./NotFound.css";

const NotFound = () => {
    TabTitle("404 Not Found");

    return (
        <>
            <div className="not-found">
                <div className="no-existence">
                    <img
                        src="https://www.linkpicture.com/q/something-lost-min.png"
                        alt=""
                    />
                </div>
                <div className="not-found-text">
                    <h1>Whoops, page not found!</h1>
                    <h2>
                        We can’t seem to find the page you’re looking for :(
                    </h2>
                </div>
                <Link className="tohome" to="/">
                    <button className="notfound-tohome">
                        <h1>Go to Homepage</h1>
                    </button>
                </Link>
            </div>
        </>
    );
};

export default NotFound;
