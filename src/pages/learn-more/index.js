import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useWidth } from "../../context/ScreenWidthContext";

import FAQ from "../../assets/pdfs/WHT-FAQs.pdf";

import DesktopImg from "../../assets/images/learn-more-desk.png";
import MobileImg from "../../assets/images/learn-more-mobile.png";

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

const FAQLink = styled.a`
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

const HeaderText = styled.div`
  font-family: BebasNeue;
  color: #f3e9d5;
  font-size: 36px;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1100px;
`;

const LearnMore = () => {
  const width = useWidth();
  return (
    <LearnMoreContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "15px 0px",
        }}
      >
        <HeaderText>Make your round count</HeaderText>
      </div>
      <Content>
        <img src={width > 600 ? DesktopImg : MobileImg} />
      </Content>
      <FAQLink rel="noopener noreferrer" href={FAQ} target="_blank">
        FAQ
      </FAQLink>
      <Button to="/register">Sign Up</Button>
    </LearnMoreContainer>
  );
};

export default LearnMore;
