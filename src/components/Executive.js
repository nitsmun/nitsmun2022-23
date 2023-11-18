/** @format */

import React from "react";

import { allexecutive } from "./Dataset";
import Underline2 from "./Underline";

const Executive = () => {
    return (
        <>
            <div className="commitees-heading">
                <h1>Executive Board</h1>
            </div>
            <Underline2 />
            <div className="exe-cont">
                <div className="exe-all">
                    {allexecutive.map((item) => {
                        return (
                            <div key={item.id} className="image-all">
                                <img src={item.img} alt={item.alt} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Executive;
