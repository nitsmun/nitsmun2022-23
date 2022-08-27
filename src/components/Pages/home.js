import React, { useState, useEffect } from "react";
import "./home.css";
import Director from "../Director";
import Slider from "../Slider/Slider";
import { TabTitle } from "../Utils/Genfn";
import Secretary from "../Secretary";
import Timer from "../Timer";
import Hometop from "../Hometop";
import ArticleHome2 from "../ArticleHome2";
import Loading from "../Loading";

const Home = () => {
  TabTitle("NITS MUN");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);
    }, 400);
  }, []);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Hometop />
        <Timer />
      </div>
      <br />
      <br />
      <Director />
      <Secretary />
      <div className="glimpses-section">
        <div className="glimpses">
          <h1>Glimpses From Past Conferences</h1>
        </div>
        <Slider />
      </div>
      <ArticleHome2 />
      <br />
    </>
  );
};
export default Home;
