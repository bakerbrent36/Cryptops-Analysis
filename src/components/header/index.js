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
  height: 250px;
  background-color: #be1e2d;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
`;

const Logo = styled.img`
  height: 150px;
  width: 200px;
  position: relative;
  top: 20px;
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
  height: 75px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
`;

const SecondaryNavBar = styled.div`
  background-color: #be1e2d;
  height: 75px;
  width: 100%;
  position: absolute;
  top: 75px;
  color: #f3e9d5;
  display: flex;
  justify-content: center;
`;

const SecondaryNav = styled.div`
  display: flex;
  position: relative;
  left: 125px;
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

const Header = () => {
  const width = useWidth();
  const location = useLocation();

  return (
    <HeaderContainer style={{ backgroundImage: `url(${BallHeader})` }}>
      <Link to="/">
        <Logo src={WHTLogo} />
      </Link>
      <NavBar>
        <div>hamburger menu</div>
      </NavBar>
      {width > 1100 && (
        <SecondaryNavBar>
          <SecondaryNav>
            <MenuIcon
              style={{
                color: location.pathname == "/results" ? "#162E3D" : "#f3e9d5",
              }}
              to="/results"
            >
              <img
                src={location.pathname == "/results" ? TrophyBlue : TrophyIcon}
              />
              Leaderboards
            </MenuIcon>
            <MenuIcon
              style={{
                color: location.pathname == "/schedule" ? "#162E3D" : "#f3e9d5",
              }}
              to="/schedule"
            >
              <img src={location.pathname == "/schedule" ? CalBlue : CalIcon} />
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
    </HeaderContainer>
  );
};

export default Header;
