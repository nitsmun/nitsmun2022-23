import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import home from "./components/Pages/home";
import about from "./components/Pages/about";
import junior_mun from "./components/Pages/junior_mun";
// import mock_mun from "./components/Pages/mock_mun";
import nitsmun2022 from "./components/Pages/nitsmun2022";
import team from "./components/team";
import segments from "./components/Pages/segments";
import NotFound from "./components/Pages/NotFound";
import Navbarmenu from "./components/Menu/Navbarmenu";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import Scrolling from "./components/Scrolling";
import apply from "./components/Pages/apply";
import ArticleDetail from "./components/Pages/ArticleDetail";
import ApplyDetail from "./components/Pages/ApplyDetail";
import ByBharatDetail from "./components/ByBharatDetail";
import QuirkyDetail from "./components/QuirkyDetail";

function App() {
  return (
    <div>
      <Router basename="/">
        <Navbarmenu />
        <Scrolling>
          <Switch>
            <Route exact path="/" component={home} />
            <Route path="/about" component={about} />
            <Route path="/junior_mun" component={junior_mun} />
            {/* <Route path="/mock_mun" component={mock_mun} /> */}
            <Route path="/nitsmun2022" component={nitsmun2022} />
            <Route path="/team" component={team} />
            <Route path="/segments" component={segments} />
            <Route path="/article/:id"> <ArticleDetail/> </Route>
            <Route path="/bybharat/:id"> <ByBharatDetail/> </Route>
            <Route path="/combat/:id"> <QuirkyDetail/> </Route>
            <Route path="/application/:id"> <ApplyDetail/> </Route>
            <Route path="/apply" component={apply} />
            <Route path="*">
              {" "}
              <NotFound />
            </Route>
          </Switch>
        </Scrolling>
        <ScrollToTop />
      </Router>
      <Footer />
    </div>
  );
}
export default App;
