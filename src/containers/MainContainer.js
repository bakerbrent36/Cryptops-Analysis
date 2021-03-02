import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

import Main from "../pages/main";
import Roster from "../pages/roster";
import Schedule from "../pages/schedule";
import Results from "../pages/results";
import EnterScore from "../pages/enter-score";
import Round from "../pages/round";

const MainContainer = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/roster" component={Roster} />
        <Route eaxct path="/schedule" component={Schedule} />
        <Route path="/round/:roundId" component={Round} />
        <Route path="/results" component={Results} />
        <Route path="/enter-score" component={EnterScore} />
        <Redirect to="/main" />
      </Switch>
    </React.Fragment>
  );
};

export default MainContainer;
