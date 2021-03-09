import styled from "@emotion/styled";

import TourResults from "../../components/tour-results";
import NextTour from "../../components/next-tour";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const YourResults = styled.div`
  background-color: #162e3d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  padding: 15px;
  text-align: center;
`;

const ScoreContainer = styled.div`
  display: flex;
`;

const PointsContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: uppercase;
`;

const Points = styled.div`
  padding: 15px;
  border: 3px #162e3d solid;
  color: #be1e2d;
  font-size: 32px;
  width: 75px;
  text-align: center;
`;

const LowerContainer = styled.div`
  background-color: #162e3d;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  background-color: #ffffff;
  width: 300px;
  height: 500px;
  margin: 15px;
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

const Main = () => {
  return (
    <MainContainer>
      <YourResults>Your Results</YourResults>
      <ScoreContainer>
        <PointsContainer>
          recent round
          <Points>72</Points>
        </PointsContainer>
        <PointsContainer>
          overall points
          <Points>187</Points>
        </PointsContainer>
      </ScoreContainer>
      <NextTour />
      <LowerContainer>
        <TourResults />
        <Card>
          <Ribbon>tour standings</Ribbon>
        </Card>
        <Card>
          <Ribbon>previous events</Ribbon>
        </Card>
      </LowerContainer>
    </MainContainer>
  );
};

export default Main;
