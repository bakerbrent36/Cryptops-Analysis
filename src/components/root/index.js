import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";

import useLocalStorage from 'use-local-storage';

const RootStyles = styled.div`
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

const AppRoot = () => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    }

  return (
    <RootStyles data-theme={theme}>

      <span class="dot" onClick={switchTheme}>
          {console.log(theme)}
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </span>

      <h1>test</h1>

    </RootStyles>

);
};

export default AppRoot;

