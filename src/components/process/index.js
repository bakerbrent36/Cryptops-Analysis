import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";

//Assets
import MagGlass from "../../assets/process/mag-glass.png";
import WhiteGlow from "../../assets/process/white-glow.png";

const ProcessContainer = styled.div`
  margin:6rem 0;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 3px solid #8bef4a;
    h1{
      z-index: 22222;
      position: relative;
      z-index: 22222;
      position: relative;
      text-shadow: 0 0 10px #87c76326, 0 0 25px #87c76326, 0 0 35px #87c76326, 0 0 45px #87c76326, 0 0 55px #87c76326, 0 0 65px #87c76326, 0 0 75px #87c76326;
    }
`;

const StepBox = styled.div`
    padding:2rem 0;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .col{ 
      width:57%;
      border-top:2px solid #86bf55;
      background-color:#3c512eb0;
      padding:1.2rem 1rem;
      border-bottom: 2px solid #86bf55;
      min-height: 20rem;
      h4 {
        background: #8bef4a;
        padding: 1rem;
        color: #577f3b;
        font-famiy:"Classic Console";
        box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
     }
    }
    .img {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    img.white-glow {
        position: absolute;
        width: 60%;
        opacity: 22%;
    }
    img {
      width: 70%;
    }
`;

const Process = () => {

  return(

    <ProcessContainer>

    <div class="top">
      <h1>Process</h1>
    </div>

    <StepBox>
      <div class="col">
        <h4>Discovery</h4>
        <p>An experienced business web developer with a ferocious appetite for visual storytelling.</p>
        <p>As a creative, I focus on one common goal: creating personalized solutions for the partners and clients I work with. Offering a wide range of web and branding solutions, I have worked with small and large business owners of many genres. Whether it’s branding, building a web empire, or documenting and collaborating on an urban adventure. I love to inspire with creative and passionate people around the world.</p>
        <p>When I’m not at my desk there is a good chance you will find me outside exploring a dilapidated building or working on my car.</p>
      </div>
      <div class="img">
        <img src={MagGlass} class="mag-glass" alt="Magnifiying Glass Green"/>
        <img src={WhiteGlow} class="white-glow" alt="Transparent white glow gradient fade"/>
      </div>
    </StepBox>

    <StepBox>
      <div class="img">
        <img src={MagGlass} class="mag-glass" alt="Magnifiying Glass Green"/>
        <img src={WhiteGlow} class="white-glow" alt="Transparent white glow gradient fade"/>
      </div>
      <div class="col">
        <h4>Prototype & Plan</h4>
        <p>An experienced business web developer with a ferocious appetite for visual storytelling.</p>
        <p>As a creative, I focus on one common goal: creating personalized solutions for the partners and clients I work with. Offering a wide range of web and branding solutions, I have worked with small and large business owners of many genres. Whether it’s branding, building a web empire, or documenting and collaborating on an urban adventure. I love to inspire with creative and passionate people around the world.</p>
        <p>When I’m not at my desk there is a good chance you will find me outside exploring a dilapidated building or working on my car.</p>
      </div>
    </StepBox>

    </ProcessContainer>

  );

};
  
export default Process;
