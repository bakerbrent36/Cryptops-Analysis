import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";

import useLocalStorage from 'use-local-storage';


const ThemeMode = (mode) => {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
    }

  return (
    <div>

      <span class="dot" onClick={switchTheme}>
          {console.log(theme)}
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
      </span>

    </div>

);
};

export default ThemeMode;

