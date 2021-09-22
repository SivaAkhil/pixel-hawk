import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//header
import Header from "./components/header";

//pages
import HomePage from "./pages/HomePage";
import CompressImage from "./pages/CompressImage";
import ImageColorPalette from "./pages/ImageColorPalette";
import Siteinfo from "./pages/Siteinfo";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/compressimage" exact component={CompressImage} />
          {/* <Route path="/compressimage" exact component={CompressImage} /> */}
          <Route
            path="/imagecolorpalette"
            exact
            component={ImageColorPalette}
          />
          <Route path="/siteinfo" exact component={Siteinfo} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
