import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Main from "../pages/main";
import Roster from "../pages/roster";
import Schedule from "../pages/schedule";
import Results from "../pages/results";
import Round from "../pages/round";
import Logout from "../pages/logout";
import Sponsors from "../pages/sponsors";

const MainContainer = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/roster" component={Roster} />
        <Route path="/schedule" component={Schedule} />
        <Route path="/round/:roundId" component={Round} />
        <Route path="/results" component={Results} />
        <Route path="/logout" component={Logout} />
        <Route path="/sponsors" component={Sponsors} />
        <Redirect to="/main" />
      </Switch>
    </React.Fragment>
  );
};

export default MainContainer;
