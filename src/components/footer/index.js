import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useWidth } from "../../context/ScreenWidthContext";
import BeerIcon from "../../assets/icons/WHT_icon_Beer.svg";
import GolferIcon from "../../assets/icons/WHT_icon_Golfer.svg";
import ShirtIcon from "../../assets/icons/WHT_icon_Shirt.svg";
import TrophyIcon from "../../assets/icons/WHT_icon_Trophy.svg";
import CalIcon from "../../assets/icons/WHT_icon_Cal.svg";
import DriverIcon from "../../assets/icons/WHT_wood_blue_bg.png";

const FooterContainer = styled.div`
  height: 75px;
  background-color: #be1e2d;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FooterIcon = styled.img`
  position: relative;
  top: -15px;
`;

const NavContainer = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -35px;
`;

const MenuIcon = styled(Link)`
  height: 75px;
  width: 175px;
  color: #f3e9d5;
  display: flex;
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
  const width = useWidth();

  return (
    <FooterContainer>
      {width > 1100 && <FooterIcon src={DriverIcon} />}
      <NavContainer>
        <MenuIcon to="/results">
          {width > 1100 ? "Leaderboards" : <img src={TrophyIcon} />}
        </MenuIcon>
        <MenuIcon to="/schedule">
          {width > 1100 ? "Schedule of Events" : <img src={CalIcon} />}
        </MenuIcon>
        <MenuIcon to="/roster">
          {width > 1100 ? "Player Roster" : <img src={GolferIcon} />}
        </MenuIcon>
        <MenuIcon>
          {width > 1100 ? "Tour Merch" : <img src={ShirtIcon} />}
        </MenuIcon>
        <MenuIcon>
          {width > 1100 ? "Workhorse" : <img src={BeerIcon} />}
        </MenuIcon>
      </NavContainer>
    </FooterContainer>
  );
};

export default Footer;
