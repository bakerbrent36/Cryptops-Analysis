import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import { useAuth } from "../context/AuthContext";
import Home from "../pages/home";
import LearnMore from "../pages/learn-more";
import Portfolio from "../pages/portfolio";
import SinglePortfolio from "../pages/single-portfolio";
import MainContainer from "../containers/MainContainer";
import Header from "../components/header";
import Footer from "../components/footer";
import PortfolioPage from "../pages/single-portfolio";
import Contact from "../pages/contact";
import FourOhFour from "../pages/404";

const PageContainer = styled.div`
  margin-bottom: 0px;

  @media only screen and (max-width: 1100px) {
    margin-bottom: 80px;
  }
`;

const WelcomeContainer = ({ screenWidth }) => {
  const user = useAuth();

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) => {
          //TODO: IF USER EXPIRES OR SOMETHING, MAKE THIS FALSE
          if (true) {
            return <Component {...props} />;
          }
          return <Home{...props} />;
        }}
      />
    );
  };

  return (
    <React.Fragment>
      <Header screenWidth={screenWidth} />
      <PageContainer>
        <Switch>
          <Route path="/learn-more" component={LearnMore} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/work/:portfolioId" component={PortfolioPage} />
          <Route path="/contact" component={Contact} />
          <Route component={Home} />
        </Switch>
      </PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default WelcomeContainer;
