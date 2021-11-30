import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { format, parseISO, sub } from "date-fns";

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #F3E9D5;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  text-decoration: none;
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
  font-size: 35px;
`;

const RoundPlayLink = styled.div`
  padding: 15px 25px;
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
  padding: 15px;
  position: relative;
  top: 10px;
  right: 15px;
  width: 100px;
  display: flex;
  justify-content: center;
`;

const RoundCard = ({ backgroundImage, date, name, link }) => {
  const endDate = parseISO(date);
  const startDate = sub(parseISO(date), { days: 6 });
  const currentDate = new Date();
  const fakeDate = new Date();
  currentDate.setHours(0,0,0,0);
  // fakeDate.setDate(fakeDate.getDate()-10);

  function checkDate() {
    if( startDate < currentDate && endDate > currentDate){
      return (<RoundPlayLink>Play</RoundPlayLink>)
    } else if (startDate > currentDate && endDate > currentDate || currentDate == endDate) {
      return(<RoundPlayLink>Play</RoundPlayLink>)
    } else if (startDate < currentDate & endDate < currentDate ) {
      return(<RoundPlayLink>Complete</RoundPlayLink>)
    } else {
      return (<RoundPlayLink>Play</RoundPlayLink>)
    }
  }

  return (
    <Card
      style={{
        backgroundImage: `linear-gradient(to top, rgba(22, 46, 61, 1), transparent), url(${backgroundImage})`,
      }}
      to={link}
    >
      <Ribbon>
        {format(startDate, "MMM")} {format(startDate, "d")} -{" "}
        {format(startDate, "MMM") !== format(endDate, "MMM") &&
          format(endDate, "MMM")}
        {format(startDate, "MMM") !== format(endDate, "MMM") && " "}
        {format(parseISO(date), "d")}
      </Ribbon>
      <CardBottomContainer>
        {name}
        {checkDate()}
      </CardBottomContainer>
    </Card>
  );
};

export default RoundCard;
