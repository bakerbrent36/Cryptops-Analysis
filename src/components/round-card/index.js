import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { format, parseISO, sub } from "date-fns";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: green;
  background-size: cover;
  margin: 15px;
  margin-bottom: 25px;
  height: 525px;

  @media only screen and (max-width: 1200px) {
    height: 325px;
  }

  @media only screen and (max-width: 768px) {
    height: 268px;
  }
`;

const CardBottomContainer = styled.div`
  color: #f3e9d5;
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: BebasNeue;
  font-size: 50px;
`;

const RoundPlayLink = styled(Link)`
  width: 100px;
  height: 68px;
  background-color: #be1e2d;
  text-transform: uppercase;
  color: #f3e9d5;
  font-size: 20px;
  font-family: Raleway;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -15px;
`;

const Ribbon = styled.div`
  background-color: #f3e9d5;
  color: #be1e2d;
  text-transform: uppercase;
  padding: 5px;
  position: relative;
  top: 10px;
  right: 15px;
  width: 150px;
`;

const RoundCard = ({ backgroundImage, date, name, link }) => {
  return (
    <Card
      style={{
        backgroundImage: `linear-gradient(to top, rgba(22, 46, 61, 1), transparent), url(${backgroundImage})`,
      }}
    >
      <Ribbon>
        {format(parseISO(date), "MMM")}{" "}
        {format(sub(parseISO(date), { days: 6 }), "d")} -{" "}
        {format(parseISO(date), "d")}
      </Ribbon>
      <CardBottomContainer>
        {name}
        <RoundPlayLink to={link}>Play</RoundPlayLink>
      </CardBottomContainer>
    </Card>
  );
};

export default RoundCard;
