import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import styled from "@emotion/styled";
import Portfolio from "../../Portfolio.json";


const PortfolioHeader = styled.div`
  background-size:cover;
  background-position:center center;
  height: 90vh;
`;


const PortfolioPage = ({ match }) => {
  const {
    params: { portfolioId },
  } = match;

  const [isLoading, setIsLoading] = useState(true);

  const currentItem = Portfolio.Items[portfolioId];

  return (
    <>
        <>
          <PortfolioHeader style={{ backgroundImage: `url(${currentItem.HeaderImage})`}}></PortfolioHeader>
          <h1>Name: {currentItem.Name}</h1>
          <Link to="/">Back to homepage</Link>
        </>
    </>
  );
};

export default PortfolioPage;
