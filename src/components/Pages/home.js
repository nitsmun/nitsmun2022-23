import React, { useState, useEffect } from "react";
import "./home.css";
import Director from "../Director";
import { TabTitle } from "../Utils/Genfn";
import Secretary from "../Secretary";
import Hometop from "../Hometop";
import ArticleHome2 from "../ArticleHome2";
import Loading from "../Loading";
import ImageSliderComponent from "../ImageSliderComponent";
import Underline from "../Underline";

const Home = () => {
  TabTitle("NITS MUN");
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsFetching(false);       //setting up "fetching data loader"
    }, 150);
  }, []);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Hometop />
      </div>
      <Director />
      <Secretary />
      <Underline />
      <div className="photo-title">
        <h1>Photo Gallery</h1>
      </div>
      <ImageSliderComponent />
      <ArticleHome2 />
      <br />
    </>
  );
};
export default Home;
