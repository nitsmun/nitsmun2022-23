/** @format */

import React from "react";
import { useParams } from "react-router-dom";

import { Articledata } from "../Dataset";

import "./Articledata.css";

const ArticleDetail = () => {
    const { id } = useParams();

    return (
        <>
            {Articledata.filter((item) => item.id === id).map((item) => (
                <>
                    <Helmet>
                        <title>{item.Title}</title>
                    </Helmet>
                    <h1 className="article-detail-title">{item.Title}</h1>
                    <div className="content-details" key={item.id}>
                        <div className="hold-2">
                            <img src={item.Artimg2} alt={item.Alt} />
                        </div>
                        <h5 className="title-art-details">{item.date0}</h5>

                        {item.Content}
                    </div>
                    <br />
                    <Link to="/segments">
                        <button className="read-more-btn">Go Back</button>
                    </Link>
                    <br />
                    <br />
                    <br />
                    <br />
                </>
            ))}
        </>
    );
};

export default ArticleDetail;
