import { useState } from "react";
import styled from "@emotion/styled";
import WorkHorseLogo from "../../assets/images/WHlogo.png";
import BallHeader from "../../assets/images/ball-header.jpg";
import { useWidth } from "../../context/ScreenWidthContext";
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

const HeaderContainer = styled.div`
  height: 411px;
  background-color: #be1e2d;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover;

  @media only screen and (max-width: 1100px) {
    height: 250px;
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
    height: 100px;
  }
`;

const NavBar = styled.div`
  width: 100%;
  background-color: #172e3e;
  color: #bf1e2e;
  height: 149px;
  display: flex;
  justify-content: flex-end;
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
  left: 175px;
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

const MenuWrapper = styled.div`
  .active {
    animation: formFade 2s;
    z-index: 500;

    @keyframes formFade {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  .not-active {
    animation: formFade 2s;

    @keyframes formFade {
      from {
        opacity: 1;
        display: flex;
      }
      to {
        opacity: 0;
        display: none;
      }
    }
  }
`;

const Menu = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  z-index: -500;
  background-color: #162e3d;
  color: #f3e9d5;
`;

const Header = () => {
  const width = useWidth();
  const location = useLocation();

  const [openMenu, setOpenMenu] = useState(false);

  console.log(openMenu);

  return (
    <HeaderContainer style={{ backgroundImage: `url(${BallHeader})` }}>
      <Link to="/">
        <Logo src={WHTLogo} />
      </Link>

      {width > 1100 &&
      location.pathname !== "/welcome" &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/learn-more" ? (
        <NavBar>
          <div
            style={{ position: "absolute", zIndex: 501 }}
            onClick={() => setOpenMenu((oldState) => !oldState)}
          >
            hamburger menu
          </div>
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
        location.pathname !== "/learn-more" && (
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
                Schedule of Events
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
              <MenuIcon>
                <img src={ShirtIcon} />
                Tour Merch
              </MenuIcon>
              <MenuIcon>
                <img src={BeerIcon} />
                Workhorse
              </MenuIcon>
            </SecondaryNav>
          </SecondaryNavBar>
        )}
      {/* <MenuWrapper>
        <Menu className={openMenu ? "active" : "not-active"}>RESULTS</Menu>
      </MenuWrapper> */}
    </HeaderContainer>
  );
};

export default Header;
