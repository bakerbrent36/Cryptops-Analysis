import { useState } from "react";
import styled from "@emotion/styled";
import WorkHorseLogo from "../../assets/images/WHlogo.png";
import BallHeader from "../../assets/images/ball-header.jpg";
import { useWidth } from "../../context/ScreenWidthContext";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

import WHTLogo from "../../assets/images/WHT-logo.png";
import BeerIcon from "../../assets/icons/WHT_icon_Beer.svg";
import GolferIcon from "../../assets/icons/WHT_icon_Golfer.svg";
import ShirtIcon from "../../assets/icons/WHT_icon_Shirt.svg";
import TrophyIcon from "../../assets/icons/WHT_icon_Trophy.svg";
import CalIcon from "../../assets/icons/WHT_icon_Cal.svg";
import TrophyBlue from "../../assets/icons/WHT_icon_Trophy-blue.svg";
import CalBlue from "../../assets/icons/WHT_icon_Cal-blue.svg";
import GolferBlue from "../../assets/icons/WHT_icon_Golfer-blue.svg";
import QuestionIcon from "../../assets/icons/WHT-icon-Question.svg";

import LoginHeader from "../../assets/images/WHT-header-1-login.jpg";
import MainHeader from "../../assets/images/WHT-header-2-main.jpg";
import LeaderHeader from "../../assets/images/WHT-header-3-leaderboards.jpg";
import EventHeader from "../../assets/images/WHT-header-4-events.jpg";
import RosterHeader from "../../assets/images/WHT-header-5-roster.jpg";

import FAQ from "../../assets/pdfs/WH-FAQ.pdf";

import "./hamburger.css";

const HeaderContainer = styled.div`
  height: ${({ isRound }) => (isRound == "round" ? "224px" : "411px")};
  background-color: #be1e2d;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover;

  @media only screen and (max-width: 1100px) {
    height: ${({ isRound }) => (isRound == "round" ? "98px" : "250px")};
  }
`;

const Logo = styled.img`
  height: 202px;
  width: 275px;
  position: relative;
  top: 42px;
  left: -400px;
  z-index: 100;

  @media only screen and (max-width: 1100px) {
    left: 0px;
    width: 150px;
    height: 111px;
  }
`;

const NavBar = styled.div`
  width: 100%;
  background-color: #172e3e;
  color: #bf1e2e;
  height: 149px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;

  @media only screen and (max-width: 1100px) {
    height: 98px;
  }
`;

const SecondaryNavBar = styled.div`
  background-color: #be1e2d;
  height: 75px;
  width: 100%;
  position: absolute;
  top: 149px;
  color: #f3e9d5;
  display: flex;
  justify-content: center;
`;

const SecondaryNav = styled.div`
  display: flex;
  position: relative;
  left: 150px;

  a {
    height: 75px;
    width: 175px;
    display: flex;
    color: #f3e9d5;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-decoration: none;
    font-size: 14px;

    img {
      height: 25px;
      width: 25px;
    }
  }
`;

const MenuIcon = styled(Link)`
  height: 75px;
  width: 175px;
  display: flex;
  color: #f3e9d5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;

  img {
    height: 25px;
    width: 25px;
  }
`;

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

const HeaderButtonsContainer = styled.div`
  display: flex;
  position: relative;
  left: 150px;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: ${({ show }) => (show ? "100vh" : "0")};
  background-color: #162e3d;
  color: #f3e9d5;
  transition: visibility 0s, opacity 0.5s, height 0.5s;
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;

  a {
    color: #f3e9d5;
    text-transform: uppercase;
    text-decoration: none;
    margin-top: 5px;
  }
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #f3e9d5;
  text-transform: uppercase;
  margin-top: 5px;
`;

const HamburgerContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  @media only screen and (max-width: 1100px) {
    border-bottom: ${({ isRound }) =>
      isRound == "round" ? "15px solid #be1e2d" : "none"};
  }
`;

const HeaderLink = styled(Link)`
  height: 225px;

  @media only screen and (max-width: 1100px) {
    height: 95px;
  }
`;

const Header = () => {
  const width = useWidth();
  const location = useLocation();
  const user = useAuth();

  const [openMenu, setOpenMenu] = useState(false);

  console.log(location);

  console.log(location.pathname.split("/")[1]);

  return (
    <HeaderContainer isRound={location.pathname.split("/")[1]}>
      <HeaderLink to="/">
        <Logo src={WHTLogo} />
      </HeaderLink>

      {location.pathname !== "/welcome" &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/learn-more" &&
      user ? (
        <NavBar>
          <HamburgerContainer isRound={location.pathname.split("/")[1]}>
            <button
              style={{ position: openMenu ? "fixed" : "absolute", zIndex: 501 }}
              onClick={() => setOpenMenu((oldState) => !oldState)}
              className={
                openMenu
                  ? "is-active hamburger hamburger--collapse"
                  : "hamburger hamburger--collapse"
              }
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </HamburgerContainer>
        </NavBar>
      ) : (
        <NavBar style={{ justifyContent: "center" }}>
          {width > 1100 && (
            <HeaderButtonsContainer>
              <Button to="/login">Log In</Button>
              <Button to="/register">Sign Up</Button>
              <Button to="/learn-more">Learn More</Button>
            </HeaderButtonsContainer>
          )}
        </NavBar>
      )}

      {width > 1100 &&
        location.pathname !== "/welcome" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/learn-more" &&
        user && (
          <SecondaryNavBar>
            <SecondaryNav>
              <MenuIcon
                style={{
                  color:
                    location.pathname == "/results" ? "#162E3D" : "#f3e9d5",
                }}
                to="/results"
              >
                <img
                  src={
                    location.pathname == "/results" ? TrophyBlue : TrophyIcon
                  }
                />
                Leaderboards
              </MenuIcon>
              <MenuIcon
                style={{
                  color:
                    location.pathname == "/schedule" ? "#162E3D" : "#f3e9d5",
                }}
                to="/schedule"
              >
                <img
                  src={location.pathname == "/schedule" ? CalBlue : CalIcon}
                />
                Event Schedule
              </MenuIcon>
              <MenuIcon
                style={{
                  color: location.pathname == "/roster" ? "#162E3D" : "#f3e9d5",
                }}
                to="/roster"
              >
                <img
                  src={location.pathname == "/roster" ? GolferBlue : GolferIcon}
                />
                Player Roster
              </MenuIcon>

              <a
                style={{ width: "100px" }}
                rel="noopener noreferrer"
                href={FAQ}
                target="_blank"
              >
                <img src={QuestionIcon} />
                FAQ
              </a>
              <a
                rel="noopener noreferrer"
                href="https://shop.workhorsebrewing.com"
                target="_blank"
              >
                <img src={BeerIcon} />
                Order Beer
              </a>
            </SecondaryNav>
          </SecondaryNavBar>
        )}
      <div
        style={{
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          height: "100%",
          backgroundImage: `url(
      ${
        location.pathname == "/" ||
        location.pathname == "/login" ||
        location.pathname == "/register" ||
        location.pathname == "/learn-more"
          ? LoginHeader
          : location.pathname == "/main"
          ? MainHeader
          : location.pathname == "/results"
          ? LeaderHeader
          : location.pathname == "/schedule"
          ? BallHeader
          : location.pathname == "/roster"
          ? RosterHeader
          : BallHeader
      }
      )`,
        }}
      ></div>
      <Menu show={openMenu}>
        <div
          style={{
            marginLeft: "50px",
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <MenuLink onClick={() => setOpenMenu(false)} to="/results">
            Leaderboards
          </MenuLink>
          <MenuLink onClick={() => setOpenMenu(false)} to="/schedule">
            Event Schedule
          </MenuLink>
          <MenuLink onClick={() => setOpenMenu(false)} to="/roster">
            Player Roster
          </MenuLink>
          <a
            onClick={() => setOpenMenu(false)}
            rel="noopener noreferrer"
            href={FAQ}
            target="_blank"
          >
            FAQ
          </a>
          <MenuLink onClick={() => setOpenMenu(false)} to="/logout">
            Logout
          </MenuLink>
        </div>
      </Menu>
    </HeaderContainer>
  );
};

export default Header;
