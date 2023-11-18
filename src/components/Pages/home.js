/** @format */

import React from "react";

import { TabTitle } from "../Utils/Genfn";
import Underline from "../Underline";

import "./home.css";

const Home = () => {
    TabTitle("NITS MUN");

    return (
        <>
            <div>
                <Hometop />
            </div>
            {/* <Timer/> */}
            <Stats />
            <Director />
            <Secretary />
            <Underline />
            <div className="photo-title">
                <h1>Photo Gallery</h1>
            </div>
            <CubeCaro />
            <Reviews />
            <ArticleHome2 />
            <Homesponsor />
            <br />
        </>
    );
};

export default Home;
