import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const LearnMoreContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #c3c3c3;
`;

const Button = styled(Link)`
  width: 250px;
  height: 50px;
  background-color: #939393;
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
`;

const LearnMore = () => {
  return (
    <LearnMoreContainer>
      <Content>INFOGRAPHIC OR SHORT VISUAL AIDE EXPLAINING THE TOUR</Content>
      <Button to="/register">Sign Up</Button>
    </LearnMoreContainer>
  );
};

export default LearnMore;
