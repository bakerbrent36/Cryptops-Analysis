import React from "react";
import styled from "@emotion/styled";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Backgrounds
import RadialFade from "./assets/images/bgs/radial-fade.png";
import Dust from "./assets/images/bgs/screen-dust.png";
import Dust2 from "./assets/images/bgs/screen-dust-2.png";
import Dust4 from "./assets/images/bgs/screen-dust-4.png";
import Grid from "./assets/images/bgs/grid.png";

const Root = styled.div`
  position: absolute;
  background-position:top center, top center;
  background-size: 100%, 80%;
  background-repeat: repeat, repeat, no-repeat;
  width: 100%;
  height: 100%;
  pointer-events: none;
  opacity: 0.2;
  }
`;

ReactDOM.render(
  <React.StrictMode>
      <Router>
        <App />
          <Root style={{ backgroundImage: ` url(${Dust4}), url(${Grid}), radial-gradient(circle, rgb(255 255 255 / 35%) 8%, rgba(214, 214, 214, 0) 100%)`}}>
          </Root>
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
