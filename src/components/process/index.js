import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";

const ProcessContainer = styled.div`
  margin:6rem 0;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      z-index: 22222;
      position: relative;
      z-index: 22222;
      position: relative;
      text-shadow: 0 0 10px #87c76326, 0 0 25px #87c76326, 0 0 35px #87c76326, 0 0 45px #87c76326, 0 0 55px #87c76326, 0 0 65px #87c76326, 0 0 75px #87c76326;
    }
`;

const Process = () => {

  return(

    <div class="top">
      <h1>Process</h1>
    </div>

  );

};
  
export default Process;
