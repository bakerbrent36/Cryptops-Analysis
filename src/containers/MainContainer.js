import React from "react";
import { Link, Redirect, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Blog from "../pages/blog";
import PortfolioPage from "../pages/portfolio";
import BlogPage from "../pages/blog";
import Portfolio from "../pages/portfolio";
import Contact from "../pages/contact";
import SinglePortfolio from "../pages/single-portfolio";

const MainContainer = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/portfolio/:portfolioId" component={PortfolioPage} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/blog/:blogId" component={BlogPage} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Redirect to="/main" />
      </Switch>
    </React.Fragment>
  );
};

export default MainContainer;
