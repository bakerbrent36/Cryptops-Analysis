import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { format, parseISO, sub } from "date-fns";
import { useWidth } from "../../context/ScreenWidthContext";
import PlaceHolder from "../../assets/images/course-placeholder.jpg";
import RoundCard from "../../components/round-card";

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: -25px;
`;

const MonthPicker = styled.div`
  display: flex;
  width: 100%;
  max-width: 1090px;
  justify-content: space-around;
`;

const MonthTab = styled.div`
  color: #f3e9d5;
  text-transform: uppercase;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  margin-bottom: -5px;
`;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: green;
  background-size: cover;
  width: 1090px;
  height: 525px;
  margin: 15px;

  @media only screen and (max-width: 1200px) {
    width: 768px;
    height: 325px;
  }

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 268px;
  }
`;

const CardBottomContainer = styled.div`
  color: #f3e9d5;
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-family: BebasNeue;
  padding: 15px;
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

const Schedule = () => {
  const [currentMonth, setCurrentMonth] = useState();
  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

  console.log(data);

  const screenWidth = useWidth();

  const monthArr = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const mobileMonthArr = ["mar", "apr", "may", "jun", "jul", "aug"];

  console.log(screenWidth);

  return (
    <ScheduleContainer>
      <MonthPicker>
        {screenWidth > 768
          ? monthArr.map((mon) => (
              <MonthTab
                style={{
                  backgroundColor: currentMonth == mon && "#162E3D",
                }}
                onClick={() => setCurrentMonth(mon)}
              >
                {mon}
              </MonthTab>
            ))
          : mobileMonthArr.map((mon) => (
              <MonthTab
                style={{
                  backgroundColor: currentMonth == mon && "#162E3D",
                }}
                onClick={() => setCurrentMonth(mon)}
              >
                {mon}
              </MonthTab>
            ))}
      </MonthPicker>
      <LowerContainer>
        {data &&
          data
            .filter(({ round }) =>
              currentMonth
                ? format(parseISO(round.date), "MMM").toLocaleLowerCase() ==
                  currentMonth
                : round
            )
            .map(({ round }) => {
              return (
                <RoundCard
                  backgroundImage={PlaceHolder}
                  date={round.date}
                  name={round.name}
                  link={`/round/${round.id}`}
                />
              );
            })}
      </LowerContainer>
    </ScheduleContainer>
  );
};

export default Schedule;
