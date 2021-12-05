import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";

import { useWidth } from "../../context/ScreenWidthContext";
import { useAuth } from "../../context/AuthContext";

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
        <NavContainer style={{ maxWidth: "500px" }}>
          {/* <MenuIcon
            style={{
              color: location.pathname == "/client-portal" ? "#F3E9D5" : "#f3e9d5",
            }}
            to="/client-portal"
          >
            Client Portal
          </MenuIcon>
          <MenuIcon
            style={{
              color: location.pathname == "/contact" ? "#F3E9D5" : "#f3e9d5",
            }}
            to="/contact"
          >
            Contact Me
          </MenuIcon>
          <MenuIcon
            style={{
              color: location.pathname == "/resources" ? "#F3E9D5" : "#f3e9d5",
            }}
            to="/resources"
          >
            Resources
          </MenuIcon> */}
        </NavContainer>
      <SubFooter>
        <div><span>Copyright Brent Baker All Rights Reserved © 2021 & Beyond | Built With <a href="https://reactjs.org/" target="_blank">React</a></span></div>
      </SubFooter>

    </FooterContainer>
  );
};

export default Footer;
