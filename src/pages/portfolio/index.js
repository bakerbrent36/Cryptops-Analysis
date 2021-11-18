import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import PortfolioFeed from "../../components/portfolio";
import Portfolio from "../../Portfolio.json";

const PortfolioPage = () => {

  return(
    
    <PortfolioFeed></PortfolioFeed>

  );

};
  
export default PortfolioPage;
