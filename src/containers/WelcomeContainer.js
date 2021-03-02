import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import styled from "@emotion/styled";

import { AuthProvider, useAuth, useAuthUpdate } from "../context/AuthContext";
import Welcome from "../pages/welcome";
import LearnMore from "../pages/learn-more";
import MainContainer from "../containers/MainContainer";
import Login from "../pages/login";
import Register from "../pages/register";
import Header from "../components/header";
import Footer from "../components/footer";

const PageContainer = styled.div`
  margin-bottom: 75px;
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
          return <Welcome {...props} />;
        }}
      />
    );
  };

  console.log(user);

  return (
    <React.Fragment>
      <Header screenWidth={screenWidth} />
      <PageContainer>
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/learn-more" component={LearnMore} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          {user && (
            <ProtectedRoute
              path="/"
              name="Main"
              user={user}
              component={MainContainer}
              screenWidth={screenWidth}
            />
          )}
          <Route component={Welcome} />
        </Switch>
      </PageContainer>
      <Footer />
    </React.Fragment>
  );
};

export default WelcomeContainer;
