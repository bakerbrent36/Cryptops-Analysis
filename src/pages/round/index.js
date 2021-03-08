import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { format, parseISO, sub } from "date-fns";

import CalIcon from "../../assets/icons/WHT_icon_Cal.svg";
import RoundCard from "../../components/round-card";
import PlaceHolder from "../../assets/images/course-placeholder.jpg";
import EnterScore from "../../components/enter-score";

const RoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #162e3d;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;

  button {
    width: 223px;
    height: 68px;
    background-color: #be1e2d;
    border: none;
    margin: 5px;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

const RoundImage = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
`;

const RoundDate = styled.div`
  text-transform: uppercase;
  font-family: BebasNeue;
  color: #f3e9d5;

  img {
    height: 25px;
    width: 25px;
  }
`;

const HeaderText = styled.div`
  font-family: BebasNeue;
  color: #f3e9d5;
  font-size: 36px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
`;

const Round = () => {
  const [openScore, setOpenScore] = useState(false);
  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

  let { roundId } = useParams();
  console.log(roundId);

  console.log(data);

  const currentRound =
    (data && data.filter(({ round }) => round.id === roundId)) || [];

  const currentIndex =
    (data && data.findIndex(({ round }) => round.id === roundId)) || 0;

  console.log(currentRound);
  console.log(currentIndex);

  return (
    <RoundContainer>
      {!openScore && (
        <RoundImage
          style={{
            backgroundImage: `linear-gradient(to top, rgba(22, 46, 61, 1), transparent), url(${PlaceHolder})`,
          }}
        />
      )}
      {currentRound.length > 0 && (
        <InnerContainer>
          {openScore && <EnterScore roundId={roundId} />}
          <HeaderText>{currentRound[0].round.name} </HeaderText>
          <button onClick={() => setOpenScore((oldState) => !oldState)}>
            ENTER SCORE
          </button>
          <RoundDate>
            <img src={CalIcon} />
            {format(parseISO(currentRound[0].round.date), "MMM")}{" "}
            {format(
              sub(parseISO(currentRound[0].round.date), { days: 6 }),
              "d"
            )}{" "}
            - {format(parseISO(currentRound[0].round.date), "d")}
          </RoundDate>
          {data && data[currentIndex + 1] && (
            <>
              <HeaderText>Next Tournament</HeaderText>
              <RoundCard
                backgroundImage={PlaceHolder}
                date={data && data[currentIndex + 1].round.date}
                name={data && data[currentIndex + 1].round.name}
                link={data && `${data[currentIndex + 1].round.id}`}
              />
            </>
          )}

          {data && data[currentIndex - 1] && (
            <>
              <HeaderText>Previous Tournament</HeaderText>
              <RoundCard
                backgroundImage={PlaceHolder}
                date={data && data[currentIndex - 1].round.date}
                name={data && data[currentIndex - 1].round.name}
                link={data && `${data[currentIndex - 1].round.id}`}
              />
            </>
          )}
        </InnerContainer>
      )}
    </RoundContainer>
  );
};

export default Round;
