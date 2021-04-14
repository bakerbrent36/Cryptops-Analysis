import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

import { useWidth } from "../../context/ScreenWidthContext";
import WhiteCal from "../../assets/icons/WHT_icon_Cal-white.svg";

const NextTourBar = styled.div`
  width: 100%;
  background-color: #be1e2d;
  padding: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const NextTourInner = styled.div`
  max-width: 1090px;
  width: 100%;
  height: 68px;
  display: flex;
`;

const NextTourIcon = styled.div`
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

const NextTourText = styled.div`
  background-color: #f3e9d5;
  color: #be1e2d;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NextTourListing = styled.div`
  background-color: #ffffff;
  height: 68px;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

const PlayButton = styled(Link)`
  background-color: #162e3d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  text-transform: uppercase;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-decoration: none;
`;

const NextTour = () => {
  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

  const screenWidth = useWidth();

  const nextTour =
    (data && data.find(({ round }) => round.status === "not started")) || [];

  return (
    <NextTourBar>
      {screenWidth > 768 ? (
        <NextTourInner>
          <NextTourIcon>
            <img src={WhiteCal} />
          </NextTourIcon>
          <NextTourText>Next Tournament</NextTourText>
          {nextTour && nextTour.round && (
            <>
              <NextTourListing>{nextTour.round.name}</NextTourListing>
              <PlayButton to={`/round/${nextTour.round.id}`}>Play</PlayButton>
            </>
          )}
        </NextTourInner>
      ) : (
        <>
          <NextTourInner>
            <NextTourIcon>
              <img src={WhiteCal} />
            </NextTourIcon>
            <NextTourText>Next Tournament</NextTourText>
            <PlayButton
              to={nextTour && nextTour.round && `/round/${nextTour.round.id}`}
            >
              Play
            </PlayButton>
          </NextTourInner>
          <NextTourInner>
            {nextTour && nextTour.round && (
              <>
                <NextTourListing>{nextTour.round.name}</NextTourListing>
              </>
            )}
          </NextTourInner>
        </>
      )}
    </NextTourBar>
  );
};

export default NextTour;
