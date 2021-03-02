import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import WhiteCal from "../../assets/icons/WHT_icon_Cal-white.svg";

const Button = styled(Link)`
  width: 250px;
  height: 50px;
  background-color: #be1e2d;
  border: none;
  margin: 5px;
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
`;

const WelcomeBody = styled.div`
  text-align: center;
  max-width: 1090px;
  font-size: 18px;
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

const Welcome = () => {
  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

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

      <Button to="/register">Sign Up</Button>

      <NextTourBar>
        <NextTour>
          <NextTourIcon>
            <img src={WhiteCal} />
          </NextTourIcon>
          <NextTourText>Next Tournament</NextTourText>
          <NextTourListing></NextTourListing>
        </NextTour>
      </NextTourBar>

      <Button to="/login">Login</Button>
      <Button to="/register">Sign Up</Button>
      <Button
        to="/learn-more"
        style={{ backgroundColor: "#b4b4b4", color: "black" }}
      >
        Learn More
      </Button>
    </WelcomeContainer>
  );
};

export default Welcome;
