/** @format */

import React from "react";
import "./home.css";
// import Director from "../Director";
import { TabTitle } from "../Utils/Genfn";
// import Secretary from "../Secretary";
// import Hometop from "../Hometop";
// import ArticleHome2 from "../ArticleHome2";
// import Loading from "../Loading";
import Underline from "../Underline";
// import Timer from "../Timer/timer";
// import Stats from "./Nitsmun2023/Stats";
// import Homesponsor from "./Nitsmun2023/Homesponsor";
// import Reviews from "../Reviews/Reviews";
// import CubeCaro from "../ThumbnailCarousel/CubeCaro";
const Home = () => {
  TabTitle("NITS MUN");
  // const [isFetching, setIsFetching] = useState(true);

  // useEffect(() => {
  //   setTimeout(function () {
  //     setIsFetching(false);       //setting up "fetching data loader"
  //   }, 150);
  // }, []);

  // if (isFetching) {
  //   return <Loading />;
  // }

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
