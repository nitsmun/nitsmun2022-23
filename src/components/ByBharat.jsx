import React from "react";
import { mainbybharat } from "./Dataset";
import './Bybharat.css';
import { Link } from "react-router-dom";
const ByBharat = () => {

    return (
        <div className='bybharat-top'>
            <h1>BY BHARAT</h1>
            <div className="main-bybharat">
                {mainbybharat.map((item) => {
                    return (
                        <>
                            <div key={item.id} className="main-indi">
                                <img src={item.img} alt="" />
                                <Link to={`/bybharat/${item.id}`}><p className="p-by">Read more</p></Link>
                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ByBharat