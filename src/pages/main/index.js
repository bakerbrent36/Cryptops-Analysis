import styled from "@emotion/styled";
import { useQuery } from "react-query";

import TourResults from "../../components/tour-results";
import NextTour from "../../components/next-tour";
import WhiteCal from "../../assets/icons/WHT_icon_Cal-white.svg";

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

const CalIconBox = styled.div`
  background-color: #162e3d;
  height: 68px;
  width: 73px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 30px;
    width: 30px;
  }
`;

const YourTournamentsContainer = styled.div`
  display: flex;
  justify-content: center;

  table {
    width: 100%;
    max-width: 1100px;
  }
`;

const Main = () => {
  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

  const completedRounds =
    data && data.filter(({ round }) => round.status === "completed");

  console.log(completedRounds);

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
      <YourTournamentsContainer>
        <table>
          <tr>
            <td>
              <CalIconBox>
                <img src={WhiteCal} />
              </CalIconBox>
            </td>
            <td>your tournaments</td>
            <td>score</td>
            <td>place</td>
          </tr>
          <tr>
            <td>date</td>
            <td>name</td>
            <td>score</td>
            <td>2nd</td>
          </tr>
        </table>
      </YourTournamentsContainer>
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
