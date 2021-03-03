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
`;

const RoundTitle = styled.div`
  text-transform: uppercase;
`;

const RoundDate = styled.div`
  text-transform: uppercase;

  img {
    height: 25px;
    width: 25px;
  }
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

  const enterScore = () => {
    alert("enter score");
  };

  return (
    <div>
      {currentRound.length > 0 && (
        <RoundContainer>
          <button onClick={() => setOpenScore(true)}>ENTER SCORE</button>
          {openScore && <EnterScore />}
          <RoundTitle>{currentRound[0].round.name}</RoundTitle>
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
              Next Tournament
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
              Previous Tournament
              <RoundCard
                backgroundImage={PlaceHolder}
                date={data && data[currentIndex - 1].round.date}
                name={data && data[currentIndex - 1].round.name}
                link={data && `${data[currentIndex - 1].round.id}`}
              />
            </>
          )}
        </RoundContainer>
      )}
    </div>
  );
};

export default Round;
