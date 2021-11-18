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
import TrophyBlue from "../../assets/icons/WHT_icon_Trophy-blue.svg";
import CalBlue from "../../assets/icons/WHT_icon_Cal-blue.svg";
import GolferBlue from "../../assets/icons/WHT_icon_Golfer-blue.svg";
import QuestionIcon from "../../assets/icons/WHT-icon-Question.svg";
import OneDayIcon from "../../assets/icons/WHT_Icon_OneDay.svg";
import OneDayIconBlue from "../../assets/icons/WHT_Icon_OneDayBlue.svg";

import FAQ from "../../assets/pdfs/WHT-FAQs-NEW.pdf";

const FooterContainer = styled.div`
  height: auto;
  background-color: transparent;
  position: initial;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 1100px) {
    position: fixed;
  }
`;

const SubFooter = styled.div`
  width: 100%;
  text-align: center;
  margin: 0.5rem 0;
  font-size: 0.7rem;
`;

const NavContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;

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
      {location.pathname !== "/welcome" &&
      location.pathname !== "/client-portal" &&
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
              "Event Schedule"
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
          <MenuIcon
            style={{
              color: location.pathname == "/one-day" ? "#162E3D" : "#f3e9d5",
            }}
            to="/one-day"
          >
            {isDesktop ? (
              "One Day"
            ) : (
              <img
                src={location.pathname == "/one-day" ? OneDayIconBlue : OneDayIcon}
              />
            )}
          </MenuIcon>
          <a
            href="https://shop.workhorsebrewing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {isDesktop ? "Order Beer" : <img src={BeerIcon} />}
          </a>
        </NavContainer>
      ) : (
        <NavContainer style={{ maxWidth: "500px" }}>
          <MenuIcon
            style={{
              color: location.pathname == "/client-portal" ? "#162E3D" : "#f3e9d5",
            }}
            to="/client-portal"
          >
            Client Portal
          </MenuIcon>
          <MenuIcon
            style={{
              color: location.pathname == "/contact" ? "#162E3D" : "#f3e9d5",
            }}
            to="/register"
          >
            Contact Me
          </MenuIcon>
          <MenuIcon
            style={{
              color: location.pathname == "/resources" ? "#162E3D" : "#f3e9d5",
            }}
            to="/resources"
          >
            Resources
          </MenuIcon>
        </NavContainer>
        
      )}

      <SubFooter>
        <div><span>Copyright Brent Baker All Rights Reserved © 2021 & Beyond | Built With <a href="https://reactjs.org/" target="_blank">React</a></span></div>
      </SubFooter>

    </FooterContainer>
  );
};

export default Footer;
