import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useWidth } from "../../context/ScreenWidthContext";

import DesktopImg from "../../assets/images/info_desktop.png";
import MobileImg from "../../assets/images/info_mobile.png";

const LearnMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #172e3e;
  padding-bottom: 50px;
`;

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

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  text-align: center;
  img {
    width: 100%;
  }
`;

const LearnMore = () => {
  const width = useWidth();
  return (
    <LearnMoreContainer>
      <Content>
        <img src={width > 600 ? DesktopImg : MobileImg} />
      </Content>
      <Button>FAQS</Button>
      <Button to="/register">Sign Up</Button>
    </LearnMoreContainer>
  );
};

export default LearnMore;
