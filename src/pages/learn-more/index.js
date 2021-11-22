import styled from "@emotion/styled";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useLocalStorage from 'use-local-storage';

// Components
import Skills from "../../components/skills";
import Process from "../../components/process";

const ThemeMode = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 1rem;
  top:1rem;
  right:1rem;
  left:1rem;
  bottom:0;
  align-self:flex-end;
  .dots {
      z-index: 2222;
      display:flex;
      flex-direction:column;
  }
  span.dot {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      display: inline-block;
      margin:0.1rem 0.2rem;
  }
  span.dot:first-child{
    background: #f6f6f6;
  }
  span.dot:nth-child(2){
    background: #8ac652;
  }
  span.dot:nth-child(3){
    background: #88d0c6;
  }
  span.dot:nth-child(4){
    background: #fcb017;
  }
  span.dot:hover{
    cursor:pointer;
    opacity:0.7;
    transition:0.2s ease-in-out;
  }
`;

const AboutContainer = styled.div`
    width: 89%;
    margin: 6rem auto;
    display: flex;
    flex-wrap:wrap;
    h1{
      margin:1rem 0;
      z-index: 2222;
      position: relative;
      text-shadow: 0 0 10px #87c76326, 0 0 25px #87c76326, 0 0 35px #87c76326, 0 0 45px #87c76326, 0 0 55px #87c76326, 0 0 65px #87c76326, 0 0 75px #87c76326;
    }
    .top{
      width:100%;
      margin-bottom:1rem;
    }
    h4{
      background: #8bef4a;
      padding: 1rem;
      color: #577f3b;
      margin:0 0 1rem 0;
      font-famiy: "Classic Console";
      box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
    }
`;

const LearnMore = () => {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

        const switchTheme = () => {
          const newTheme = theme === 'light' ? 'dark' : 'light';
          setTheme(newTheme);
        }

  return (
    <>
    
      <ThemeMode style={{ position: `sticky`}}>
        <div class="dots">
            <span class="dot" onClick={switchTheme}>{theme === 'light'}</span>
            <span class="dot" onClick={switchTheme}>{theme === 'dark'}</span>
            <span class="dot"></span>
            <span class="dot"></span>
          </div>
      </ThemeMode>

      <AboutContainer data-theme={theme}>
        <Process></Process>
        <Skills></Skills>
      </AboutContainer>

    </>
  );
};

export default LearnMore;
