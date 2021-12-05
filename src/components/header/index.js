import { useState } from "react";
import styled from "@emotion/styled";
import { useWidth } from "../../context/ScreenWidthContext";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

import useLocalStorage from 'use-local-storage';

// Backgrounds
import RadialFade from "../../assets/images/bgs/radial-fade.png";

import "./hamburger.css";

const HeaderContainer = styled.div`
  height: auto;
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-size: cover;
  position: absolute; 
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
    height: 111px;
  }
`;

const NavBar = styled.div`
  width: 97%;
  margin-top: 0.8rem;
  padding: 0 0.1rem;
  color: #bf1e2e;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  top: 0;
  a{
    text-shadow: 0 0 10px #87c76361;
  }
  @media only screen and (max-width: 1100px) {
    height: 98px;
  }
`;

const SecondaryNavBar = styled.div`
  background-color: #be1e2d;
  height: 75px;
  width: 100%;
  top: 5rem;
  color: #f3e9d5;
  display: flex;
  justify-content: center;
`;

const SecondaryNav = styled.div`
  display: flex;
  position: relative;


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
  padding: 0.3rem 1.5rem;
  margin: 0 0.6rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #79c13f;
  font-family:'Monofonto';
  border: 3px solid transparent;
  box-shadow: 0 0 10px transparent;
  :hover{
    border: 2px solid #86bf55;
    cursor: pointer;
    -webkit-box-shadow: 10px 10px 15px #86bf5540;
    -moz-box-shadow: 10px 5px 15px #86bf5540;
    box-shadow: 0px 0px 15px #86bf5540;
    opacity: 1;
  }
  :active{
    border: 3px solid #87c763;
    border-radius: 3px;
    box-shadow: 0 0 10px #87c763;
  }
`;

const Sq = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  margin-right: 0.4rem;
  background: #8bef4a;
  -webkit-box-shadow: 0px -4px 3px #86bf5540;
  -moz-box-shadow: 0px -4px 3px #86bf5540;
  box-shadow: 0px -4px 3px #86bf5540;
  display:none;
  :hover{
    display:initial;
    transition:0.3s ease-in-out;
  }
`;

const HeaderButtonsContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 22222;
`;

const Menu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 500;
  width: 100%;
  height: ${({ show }) => (show ? "100vh" : "0")};
  background-color: #F3E9D5;
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

const ColorCircles = styled.div `
  width:100%;
  display:flex;
  align-items:center;
  justify-content:flex-end;
  border-top: 3px solid #8bef4a;
  border-left: 1px solid #8bef4a;
  border-right: 1px solid #8bef4a;
  padding: 0 0.4rem;
  -webkit-box-shadow: 0px -4px 3px #86bf5540;
  -moz-box-shadow: 0px -4px 3px #86bf5540;
  box-shadow: 0px -4px 3px #86bf5540;
  }
  .dots {
    z-index: 2222;
    position: absolute;
    top: 1rem;
}
  span.dot {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      display: inline-block;
      margin:0 0.2rem;
  }
  span.dot:first-child{
    background: #f6f6f6;
  }
  span.dot:nth-child(2){
    background: #8ac652;
  }
  span.dot:nth-child(3){
    background: #88d0c6;
  }
  span.dot:nth-child(4){
    background: #fcb017;
  }
  span.dot:hover{
    cursor:pointer;
    opacity:0.7;
    transition:0.2s ease-in-out;
  }
`;

const Header = () => {
  const width = useWidth();
  const location = useLocation();
  const user = useAuth();

  const [openMenu, setOpenMenu] = useState(false);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }


  return (
    <HeaderContainer>

      {/* <HeaderLink to="/" className="logo">
        <Logo src={WHTLogo} />
      </HeaderLink> */}

      {location.pathname !== "/welcome" &&
      location.pathname !== "/login" &&
      location.pathname !== "/register" &&
      location.pathname !== "/learn-more" &&
      location.pathname !== "/work" &&
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
          {/* <ColorCircles>
            <div class="dots">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>

          </ColorCircles> */}
          {width > 1100 && (
            <HeaderButtonsContainer>
              <Button exact={true} activeClassName='is-active' to="/"><div class="sq"></div>Home</Button>
              <Button to="/learn-more"><div class="sq"></div>Skills</Button>
              <Button to="/portfolio"><div class="sq"></div>Portfolio</Button>
              {/* <Button to="/blog"><div class="sq"></div>Blog</Button> */}
              <Button to="/contact"><div class="sq"></div>Contact</Button>
            </HeaderButtonsContainer>
          )}
        </NavBar>
      )}

      {width > 1100 &&
        location.pathname !== "/welcome" &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" &&
        location.pathname !== "/learn-more" &&
        location.pathname !== "/work" &&
        user && (
          <SecondaryNavBar>
            <SecondaryNav>
  
            </SecondaryNav>
          </SecondaryNavBar>
        )}
      {/* <div
       class="header-img"
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
        location.pathname == "/work" ||
        location.pathname == "/learn-more"
          ? LoginHeader
          : location.pathname == "/main"
          ? MainHeader
          : location.pathname == "/results"
          ? LeaderHeader
          : location.pathname == "/roster"
          ? RosterHeader
          : BallHeader
      }
      )`,
        }}
      ></div> */}
      <Menu show={openMenu}>
        <div
          style={{
            marginLeft: "50px",
            marginTop: "50px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <MenuLink onClick={() => setOpenMenu(false)} to="/one-day/talamore">
            Talamore Member Outing
          </MenuLink> */}
          {/* <MenuLink onClick={() => setOpenMenu(false)} to="/one-day/radnor-valley">
            Radnor Valley Member Outing
          </MenuLink>
          <MenuLink onClick={() => setOpenMenu(false)} to="/one-day/club">
            1912 Club Member Outing
          </MenuLink> */}
          <MenuLink onClick={() => setOpenMenu(false)} to="/sponsors">
            Sponsors
          </MenuLink>
          <a
            onClick={() => setOpenMenu(false)}
            rel="noopener noreferrer"
            href="https://www.golfgenius.com/register?league_id=7319785228384384201"
            target="_blank"
          >
            Edit Registration
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
