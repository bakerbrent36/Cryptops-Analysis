import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { format, parseISO, sub } from "date-fns";

import { useWidth } from "../../context/ScreenWidthContext";
import WhiteCal from "../../assets/icons/WHT_icon_Cal-white.svg";
import RedCal from "../../assets/icons/WHT_icon_Cal-red.svg";
import RedGolfer from "../../assets/icons/WHT_icon_Golfer-red.svg";
import RedBeer from "../../assets/icons/WHT_icon_Beer-red.svg";
import RedTrophy from "../../assets/icons/WHT_icon_Trophy-red.svg";

const Button = styled(Link)`
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
`;

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
`;

const WelcomeHeader = styled.div`
  font-family: BebasNeue;
  font-size: 76px;
  color: #162e3d;
  text-align: center;
  padding: 15px;
`;

const WelcomeBody = styled.div`
  text-align: center;
  max-width: 1090px;
  font-size: 18px;
  padding: 15px;
  color: #777777;
`;

const NextTourBar = styled.div`
  width: 100%;
  background-color: #be1e2d;
  height: 118px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextTour = styled.div`
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
`;

const NextTourListing = styled.div`
  background-color: #ffffff;
  height: 68px;
  width: 100%;
`;

const InfoContainer = styled.div`
  background-color: #162e3d;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const InnerInfoContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
  max-width: 1090px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 320px;
  color: #f3e9d5;
  text-align: center;

  img {
    width: 60px;
    height: 60px;
  }
`;

const InfoCardText = styled.div`
  width: 200px;
  font-size: 17px;
`;

const ShortDivider = styled.hr`
  width: 71px;
  background-color: #be1e2d;
  color: #be1e2d;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Welcome = () => {
  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

  const width = useWidth();

  console.log(data);

  return (
    <WelcomeContainer>
      <WelcomeHeader>Welcome to the Workhorse Tour</WelcomeHeader>
      <WelcomeBody>
        The Workhorse Tour brings the competitive spirit and tournament format
        of professional golf to recreational players in Greater Philadelphia,
        with the bonus of flexible scheduling and real-time scoring powered by
        industry leader Golf Genius. Weeklong tournaments are hosted at
        different public courses from May through October, allowing golfers of
        all abilities to tee it up at their convenience, earning points to climb
        the season-long standings and earn a spot in the Tour Championship.
      </WelcomeBody>

      <Button style={{ marginBottom: "30px" }} to="/register">
        Sign Up
      </Button>

      <NextTourBar>
        <NextTour>
          <NextTourIcon>
            <img src={WhiteCal} />
          </NextTourIcon>
          <NextTourText>Next Tournament</NextTourText>
          <NextTourListing></NextTourListing>
        </NextTour>
      </NextTourBar>
      <InfoContainer>
        <InnerInfoContainer>
          <InfoCard>
            <img src={RedCal} />
            <span style={{ fontSize: "20px", marginTop: "10px" }}>
              PICK A DAY
            </span>
            <ShortDivider />
            <InfoCardText>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere.Sed aliquam, nisi quis porttitor congue, elit erat euismod
              orci, ac placerat dolor lectus quis orci.
            </InfoCardText>
          </InfoCard>
          <InfoCard>
            <img src={RedGolfer} />
            <span style={{ fontSize: "20px", marginTop: "10px" }}>
              PLAY YOUR ROUND
            </span>
            <ShortDivider />
            <InfoCardText>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere.Sed aliquam, nisi quis porttitor congue, elit erat euismod
              orci, ac placerat dolor lectus quis orci.
            </InfoCardText>
          </InfoCard>
          <InfoCard>
            <img src={RedBeer} />
            <span style={{ fontSize: "20px", marginTop: "10px" }}>
              HAVE A BEER
            </span>
            <ShortDivider />
            <InfoCardText>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere.Sed aliquam, nisi quis porttitor congue, elit erat euismod
              orci, ac placerat dolor lectus quis orci.
            </InfoCardText>
          </InfoCard>
          <InfoCard>
            <img src={RedTrophy} />
            <span style={{ fontSize: "20px", marginTop: "10px" }}>
              CLAIM YOUR TROPHY
            </span>
            <ShortDivider />
            <InfoCardText>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere.Sed aliquam, nisi quis porttitor congue, elit erat euismod
              orci, ac placerat dolor lectus quis orci.
            </InfoCardText>
          </InfoCard>
        </InnerInfoContainer>
      </InfoContainer>

      {width < 768 && (
        <>
          <Button to="/login">Login</Button>
          <Button to="/register">Sign Up</Button>
          <Button
            to="/learn-more"
            style={{ backgroundColor: "#b4b4b4", color: "black" }}
          >
            Learn More
          </Button>
        </>
      )}
    </WelcomeContainer>
  );
};

export default Welcome;
