import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

import { useWidth } from "../../context/ScreenWidthContext";
import { useAuth } from "../../context/AuthContext";

import BeerIcon from "../../assets/icons/WHT_icon_Beer.svg";
import GolferIcon from "../../assets/icons/WHT_icon_Golfer.svg";
import ShirtIcon from "../../assets/icons/WHT_icon_Shirt.svg";
import TrophyIcon from "../../assets/icons/WHT_icon_Trophy.svg";
import CalIcon from "../../assets/icons/WHT_icon_Cal.svg";
import DriverIcon from "../../assets/icons/WHT_club_new.png";
import TrophyBlue from "../../assets/icons/WHT_icon_Trophy-blue.svg";
import CalBlue from "../../assets/icons/WHT_icon_Cal-blue.svg";
import GolferBlue from "../../assets/icons/WHT_icon_Golfer-blue.svg";

const FooterContainer = styled.div`
  height: 150px;
  background-color: #be1e2d;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    height: 80px;
  }
`;

const FooterIcon = styled.img`
  position: relative;
  top: -50px;

  @media only screen and (max-width: 1100px) {
    top: -15px;
  }
`;

const NavContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -35px;

  a {
    height: 75px;
    width: 175px;
    display: flex;
    color: #f3e9d5;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;

    @media only screen and (max-width: 1100px) {
      left: 0px;
      width: 150px;
      height: 100px;
    }

    img {
      height: 50px;
      width: 50px;
    }
  }

  @media only screen and (max-width: 1100px) {
    top: 0px;
  }
`;

const MenuIcon = styled(Link)`
  height: 75px;
  width: 175px;
  display: flex;
  color: #f3e9d5;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;

  @media only screen and (max-width: 1100px) {
    left: 0px;
    width: 150px;
    height: 100px;
  }

  img {
    height: 50px;
    width: 50px;
  }
`;

const Footer = () => {
  const location = useLocation();
  const width = useWidth();
  const user = useAuth();

  const isDesktop = width > 1100;

  return (
    <FooterContainer>
      {isDesktop && <FooterIcon src={DriverIcon} />}
      {location.pathname !== "/welcome" &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/learn-more" &&
      user ? (
        <NavContainer>
          <MenuIcon
            style={{
              color: location.pathname == "/results" ? "#162E3D" : "#f3e9d5",
            }}
            to="/results"
          >
            {isDesktop ? (
              "Leaderboards"
            ) : (
              <img
                src={location.pathname == "/results" ? TrophyBlue : TrophyIcon}
              />
            )}
          </MenuIcon>
          <MenuIcon
            style={{
              color: location.pathname == "/schedule" ? "#162E3D" : "#f3e9d5",
            }}
            to="/schedule"
          >
            {isDesktop ? (
              "Schedule of Events"
            ) : (
              <img src={location.pathname == "/schedule" ? CalBlue : CalIcon} />
            )}
          </MenuIcon>
          <MenuIcon
            style={{
              color: location.pathname == "/roster" ? "#162E3D" : "#f3e9d5",
            }}
            to="/roster"
          >
            {isDesktop ? (
              "Player Roster"
            ) : (
              <img
                src={location.pathname == "/roster" ? GolferBlue : GolferIcon}
              />
            )}
          </MenuIcon>
          <MenuIcon>
            {isDesktop ? "Tour Merch" : <img src={ShirtIcon} />}
          </MenuIcon>
          <a
            href="https://shop.workhorsebrewing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isDesktop ? "Workhorse" : <img src={BeerIcon} />}
          </a>
        </NavContainer>
      ) : (
        <NavContainer style={{ maxWidth: "500px" }}>
          <MenuIcon
            style={{
              color: location.pathname == "/login" ? "#162E3D" : "#f3e9d5",
            }}
            to="/login"
          >
            Login
          </MenuIcon>
          <MenuIcon
            style={{
              color: location.pathname == "/register" ? "#162E3D" : "#f3e9d5",
            }}
            to="/register"
          >
            Sign Up
          </MenuIcon>
          <MenuIcon
            style={{
              color: location.pathname == "/learn-more" ? "#162E3D" : "#f3e9d5",
            }}
            to="/learn-more"
          >
            Learn More
          </MenuIcon>
        </NavContainer>
      )}
    </FooterContainer>
  );
};

export default Footer;
