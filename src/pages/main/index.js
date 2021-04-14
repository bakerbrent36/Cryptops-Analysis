import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { useAuth } from "../../context/AuthContext";
import get from "get-lookup";

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
  const [completedScores, setCompletedScores] = useState([]);
  const [recentScore, setRecentScore] = useState();

  const user = useAuth();

  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

  const eventRoster = useQuery("eventRoster", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/roster`
    ).then((res) => res.json())
  );

  const completedRounds =
    data && data.filter(({ round }) => round.status === "completed");

  const userRosterObj =
    eventRoster &&
    eventRoster.data?.find(({ member }) => {
      if (member.email == user.email) {
        return member.id;
      }
    });

  useEffect(async () => {
    if (completedRounds?.length > 0 && completedScores?.length == 0) {
      const promises =
        completedRounds &&
        completedRounds.map(({ round }) => {
          return fetch(
            `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds/${round.id}/tee_sheet`
          ).then((res) => res.json().then((data) => data));
        });

      const results = await Promise.all(promises);

      setCompletedScores(results);

      setRecentScore();
    }
  }, [completedScores, completedRounds]);

  console.log(
    completedScores.length > 0 &&
      completedScores[completedScores.length - 1]?.filter(({ pairing_group }) =>
        pairing_group.players.some(
          (player) => player.player_roster_id === "7227377308787586523"
        )
      )
  );

  return (
    <MainContainer>
      <YourResults>Your Results</YourResults>
      <ScoreContainer>
        <PointsContainer>
          recent round
          <Points>72</Points>
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
          <div id="scroller" style={{ overflow: "auto" }}>
            <iframe
              class=""
              frameBorder="0"
              height="580"
              mozallowfullscreen
              name="page_iframe"
              scrolling="auto"
              src="https://www.golfgenius.com/leagues/7195604310506386799/widgets/season_points_v2?page_id=7195661585237456273"
              webkitallowfullscreen="true"
              width="730"
            />
          </div>
        </Card>
      </LowerContainer>
    </MainContainer>
  );
};

export default Main;
