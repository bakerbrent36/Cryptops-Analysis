import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

import TourResults from "../../components/tour-results";
import PointsImage from "../../assets/images/WHT-points.png";

const LowerContainer = styled.div`
  background-color: #F3E9D5;
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
  padding: 15px;
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
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
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "746px",
            padding: "15px",
            boxSizing: "border-box",
          }}
        >
          <img style={{ width: "100%", height: "auto" }} src={PointsImage} />
        </div>
      </LowerContainer>
    </div>
  );
};

export default Results;
