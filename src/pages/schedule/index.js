import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { format, parseISO, sub } from "date-fns";
import { useWidth } from "../../context/ScreenWidthContext";
import PlaceHolder from "../../assets/images/course-placeholder.jpg";
import RoundCard from "../../components/round-card";
import ScrewHead from "../../assets/images/WHT-screw.png";
import courseData from "../../courseInfo.json";



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

  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const MonthTab = styled.div`
  color: #f3e9d5;
  text-transform: uppercase;
  padding: 5px;
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10px;
    height: 10px;
  }
`;

const LowerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #162e3d;
`;

const CardWrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin-bottom: 25px;
`;

const Schedule = () => {
  const [currentMonth, setCurrentMonth] = useState();
  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

  const eventMonthArray =
    (data &&
      data.map(({ round }) =>
        format(parseISO(round.date), "MMM").toLocaleLowerCase()
      )) ||
    [];

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

  const courseInfo = Object.entries(courseData);

  const courseId = (roundId) =>
    Object.entries(courseData).filter(([key, value]) => {
      return value.round_id.includes(roundId.toString());
    });

  const roundInfo =
    (data &&
      data.map(({ round }, i) => ({
        ...round,
        course_info:
          courseData[courseId(round.id)[0] && courseId(round.id)[0][0]],
      }))) ||
    [];

  const currentRound = roundInfo.filter((round) =>
    currentMonth
      ? format(parseISO(round.date), "MMM").toLocaleLowerCase() ==
        currentMonth
      : round
  )

  const test = currentRound.map((round) => (
    round.id
  ));


  const currentDate = new Date();
  const month = currentDate.toLocaleString('default', { month: 'short' }).toLocaleLowerCase()


  return (

    <ScheduleContainer>
      <LowerContainer>
      <div class="monthpicker" style={{ width: "100%", maxWidth: "1090px", overflowX: "auto" , margin: "5% 0 2rem 0"}}>
        <MonthPicker>
          {monthArr.map((mon) => (
            <MonthTab
              style={{
                backgroundColor: currentMonth == mon && "#162E3D",
              }}
              onLoad={() => setCurrentMonth(month)}
              onClick={() => setCurrentMonth(mon)}
            >
              {console.log(currentMonth)}
              {eventMonthArray.includes(mon) && (
                <img
                  style={{ marginRight: "5px", paddingBottom: "2px" }}
                  src={ScrewHead}
                />
              )}
              {mon}
            </MonthTab>
          ))}
        </MonthPicker>
      </div>
        <CardWrapper>
          {roundInfo &&
            roundInfo
              .filter((round) =>
                currentMonth
                  ? format(parseISO(round.date), "MMM").toLocaleLowerCase() ==
                    currentMonth
                  : round
              )
              .map((round) => {
                // const localPath = require('../../assets/images/rounds/' + round.id + round?.course_info?.main_image);
                // console.log("localPath", localPath.default);
                return (
                  <RoundCard
                    backgroundImage={round?.course_info?.main_image || PlaceHolder}
                    date={round?.date}
                    name={round?.name}
                    link={`/round/${round?.id}`}
                  />
                );
              })}
        </CardWrapper>
      </LowerContainer>
    </ScheduleContainer>
  );
};

export default Schedule;
