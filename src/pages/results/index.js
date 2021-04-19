import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

import TourResults from "../../components/tour-results";

const LowerContainer = styled.div`
  background-color: #162e3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Card = styled.div`
  background-color: #ffffff;
  margin: 15px;
  width: 100%;
  max-width: 1070px;
`;

const Ribbon = styled.div`
  background-color: #f3e9d5;
  color: #be1e2d;
  text-transform: uppercase;
  padding: 5px;
  position: relative;
  top: 10px;
  right: 15px;
  width: 150px;
`;

const Results = () => {
  return (
    <div>
      <LowerContainer>
        <TourResults />
        <Card>
          <Ribbon>tour standings</Ribbon>
          <div id="scroller" style={{ overflow: "auto" }}>
            <iframe
              class=""
              frameBorder="0"
              height="580"
              mozallowfullscreen
              name="page_iframe"
              scrolling="auto"
              src={process.env.REACT_APP_STANDINGS_URL}
              webkitallowfullscreen="true"
              width="100%"
            />
          </div>
        </Card>
      </LowerContainer>
    </div>
  );
};

export default Results;
