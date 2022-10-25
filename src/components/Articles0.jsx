import React from 'react'
import { Articledata } from './Dataset';
import Underline3 from './Underline/Underline3';
import { Link } from 'react-router-dom';
import './Pages/articles.css'
const Articles0 = () => {
  return (
    <>
    <div className="articles-heading-cont">
        <h1>Articles</h1>
      </div>
      <div className="article-main-content">
        <div className="last-up">
          <h5>
            Last Updated : 15<sup>th</sup> Sep, 2022
          </h5>
        </div>

        {Articledata.map((item) => {
          return (
            <div className="article-container" key={item.id}>
              <div className="article-content">
                <h1>{item.Title}</h1>
              </div>

              <div className="article-flexing">
                <div className="img-holder">
                  <img src={item.Artimg} alt={item.Alt} />
                </div>
                <div className="content-holder">
                  <div className="post-date">
                    <h3>{item.Date}</h3>
                  </div>

                  <div className="article-cont1">{item.cshort}</div>
                  <div className="btnreadmore">
                    <Link to={`/article/${item.id}`}>
                      <button className="read-more-btn">Read More</button>
                    </Link>
                  </div>
                </div>
              </div>
              <Underline3 />
            </div>
          );
        })}
      </div>
      <div className="art-art-title">
        <h1 className="apply-art-h1">
          Check Out{" "}
          <a
            href="https://instagram.com/nitsmun"
            rel="noreferrer"
            target="_blank"
          >
            @nitsmun
          </a>{" "}
          For All Our Articles!
        </h1>
      </div>
    </>
  )
}

export default Articles0