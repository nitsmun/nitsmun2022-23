import React from "react";
import { Link } from "react-router-dom";
import './Notfound.css';
export default function(){
    return(
        <>
        <div className="not-found">
            <h2>Sorry</h2>
            <p className="no-exist">Sorry – we haven’t been able to serve the page you asked for.</p>
            <p>You may have followed an outdated link, or have mistyped a URL.</p>
            <Link to="/">Back to the Homepage...</Link>
        </div>
        </>
    )
}