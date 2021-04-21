import { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { format, parseISO, sub } from "date-fns";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as _ from "lodash";

import { useAuth } from "../../context/AuthContext";
import CalIcon from "../../assets/icons/WHT_icon_Cal.svg";
import RoundCard from "../../components/round-card";
import PlaceHolder from "../../assets/images/course-placeholder.jpg";
import EnterScore from "../../components/enter-score";
import courseInfo from "../../courseInfo.json";

import TestImage from "../../assets/images/test.png";

const RoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #162e3d;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;

  .tee-time,
  button {
    padding: 15px 25px;
    background-color: #be1e2d;
    border: none;
    margin: 5px;
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

const RoundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0px;
`;

const RoundDate = styled.div`
  text-transform: uppercase;
  font-family: BebasNeue;
  color: #f3e9d5;
  display: flex;
  align-items: center;
  font-size: 28px;
  padding-left: 15px;

  img {
    height: 30px;
    width: 30px;
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
`;

const Divider = styled.hr`
  width: 100%;
  color: #f3e9d5;
`;

const Slider = styled(Carousel)`
  width: 100%;

  .slide {
    background: #ffffff !important;
  }

  .carousel .control-arrow,
  .carousel.carousel-slider .control-arrow {
    opacity: 1;
  }

  .carousel .control-next.control-arrow::before {
    border-left: none !important;
  }

  .carousel-slider .control-prev.control-arrow::before {
    border-right: none !important;
  }

  .thumb img {
    height: 50px;
  }

  .thumbs-wrapper .control-prev::before {
    border: solid black;
    border-right: 3px solid black !important;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
  }

  .thumbs-wrapper .control-next::before {
    border: solid black;
    border-left: none !important;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  .carousel img {
    pointer-events: auto;
  }
`;

const FormModal = styled.div`
  position: fixed;
  background-color: rgba(22, 46, 61, 0.9);
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GHINForm = styled.form`
  display: flex;
  flex-direction: column;

  span {
    font-size: 36px;
    font-family: BebasNeue;
    text-transform: uppercase;
    color: #f3e9d5;
    margin-left: 5px;
  }
`;

const Input = styled.input`
  height: 50px;
  width: 250px;
  margin: 5px;
  padding: 5px;
  padding-left: 15px;
  font-size: 18px;
  flex: 1;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 700px;
`;

const InputRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  label {
    color: #ffffff;
    margin-right: 5px;
    padding-left: 5px;
    font-size: 18px;
  }

  select {
    margin-right: 5px;
    font-size: 18px;
  }
`;

const SubmitButton = styled.input`
  width: 134px;
  height: 54px;
  background-color: #be1e2d;
  border: none;
  margin: 5px;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const ModalText = styled.div`
  color: #ffffff;
  text-transform: uppercase;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 28px;
`;

const ShortDivider = styled.hr`
  width: 100%;
  max-width: 689px;
  background-color: #be1e2d;
  color: #be1e2d;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 5px;
  margin-right: 5px;
`;

const CourseInfoContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;

  .table-label {
    color: #f3e9d5;
    margin-bottom: 10px;
    margin-top: 15px;
  }

  table {
    background-color: #ffffff;
    border-collapse: collapse;
    width: 100%;
    text-align: center;
    color: #162e3d;
  }

  td {
    border: 1px solid black;
    font-family: BebasNeue;
    font-size: 22px;
    padding: 5px;
  }

  th {
    border: 1px solid black;
    font-family: BebasNeue;
  }
`;

const TableContainer = styled.div`
  display: flex;

  td {
    white-space: nowrap;
  }

  /* table {
    margin-left: 8em;
  }

  td:first-child {
    position: absolute;
    width: 8em;
    margin-left: -8em;
    background: #ccc;
  }

  td {
    white-space: nowrap;
  } */
`;

const Round = () => {
  const [openScore, setOpenScore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [teeSheets, setTeeSheets] = useState([]);

  const formRef = useRef(null);
  const { user } = useAuth();

  let { roundId } = useParams();

  const { isLoading, error, data } = useQuery("eventData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds`
    ).then((res) => res.json())
  );

  const courseData = useQuery("courseData", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/courses`
    ).then((res) => res.json())
  );

  const eventRoster = useQuery("eventRoster", () =>
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/roster`
    ).then((res) => res.json())
  );

  const currentRound =
    (data && data.filter(({ round }) => round.id === roundId)) || [];

  const currentIndex =
    (data && data.findIndex(({ round }) => round.id === roundId)) || 0;

  // const currentCourse =
  //   (courseInfo[currentIndex]?.gg_course_id &&
  //     courseData.data?.courses?.filter(
  //       (course) => course.id === courseInfo[currentIndex].gg_course_id
  //     )) ||
  //   [];

  const userRosterObj =
    eventRoster &&
    eventRoster.data?.find(({ member }) => {
      if (member.email == user.email) {
        return member.id;
      }
    });

  const userFoursomeObj =
    teeSheets &&
    teeSheets
      ?.flatMap((o) => o.pairing_group)
      .flatMap((p) => p.players)
      .find(
        (player) =>
          player.player_roster_id ===
          (userRosterObj && userRosterObj?.member?.id)
      );

  const currentCourse =
    (userFoursomeObj &&
      courseData.data?.courses?.filter(
        (course) => course.id === userFoursomeObj.tee.course_id
      )) ||
    [];

  const submitTeeTime = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch(`/update-sheet`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        tee_time: formData.get("tee_time"),
        golfers: formData.get("golfers"),
      }),
    }).then((res) => {
      setShowModal(false);
    });
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showModal &&
        formRef.current &&
        !formRef.current.contains(event.target)
      ) {
        setShowModal(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_KEY}/events/${process.env.REACT_APP_EVENT_ID}/rounds/${roundId}/tee_sheet`
    )
      .then((res) => res.json())
      .then((data) => setTeeSheets(data));
  }, [roundId]);

  const courseId = (roundId) =>
    Object.entries(courseInfo).filter(([key, value]) => {
      return value.round_id.includes(roundId.toString());
    });

  const roundInfo =
    (data &&
      data.map(({ round }, i) => ({
        ...round,
        course_info:
          courseInfo[courseId(round.id)[0] && courseId(round.id)[0][0]],
      }))) ||
    [];

  console.log("ROUND INFO", roundInfo);

  return (
    <RoundContainer>
      {!openScore && (
        <>
          <Slider
            showStatus={false}
            showIndicators={false}
            dynamicHeight={true}
            showThumbs={false}
          >
            <>
              <img src={courseInfo[currentCourse[0]?.id]?.main_image} />
              <RoundImage
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(22, 46, 61, 1), transparent)`,
                }}
              />
            </>
            {courseInfo[currentCourse[0]?.id]?.images.map((img) => (
              <>
                <img src={img} />
                <RoundImage
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(22, 46, 61, 1), transparent)`,
                  }}
                />
              </>
            ))}
          </Slider>
          <div style={{ color: "#F3E9D5" }}>
            Photos courtesy of the Bausch Collection at MyPhillyGolf.com
          </div>
        </>
      )}

      {currentRound.length > 0 && (
        <InnerContainer>
          <EnterScore
            opened={openScore}
            roundId={roundId}
            userFoursomeObj={userFoursomeObj}
          />

          <HeaderText>
            {currentRound[0].round.name}{" "}
            <div style={{ display: "flex" }}>
              <button onClick={() => setShowModal(true)}>PLAY</button>
              <button onClick={() => setOpenScore((oldState) => !oldState)}>
                ENTER SCORE
              </button>
            </div>
          </HeaderText>

          <RoundDate>
            <img src={CalIcon} />
            {format(parseISO(currentRound[0].round.date), "MMM")}{" "}
            {format(
              sub(parseISO(currentRound[0].round.date), { days: 6 }),
              "d"
            )}{" "}
            - {format(parseISO(currentRound[0].round.date), "d")}
          </RoundDate>
          <CourseInfoContainer>
            <HeaderText style={{ paddingLeft: "0px" }}>Course Info</HeaderText>
            <Divider />
            <div style={{ color: "#f3e9d5" }}>
              {courseInfo[currentCourse[0]?.id]?.description}
            </div>

            <Divider />

            <div className="table-label">FRONT 9</div>
            <TableContainer>
              <table style={{ width: "auto" }}>
                <tr
                  style={{
                    backgroundColor: "#f3e9d5",
                    height: "38px",
                    color: "#162E3D",
                  }}
                >
                  <td>HOLE</td>
                </tr>
                {currentCourse &&
                  currentCourse[0]?.tees.map((tee, i) => (
                    <tr
                      style={{
                        height: "50px",
                        background: `linear-gradient(to right, ${
                          tee.color
                        } 10%, ${i % 2 ? "#D6D6D6" : "#fff"} 10%)`,
                      }}
                    >
                      <td style={{ color: "#162E3D", padding: "0px 15px" }}>
                        {tee.name}
                      </td>
                    </tr>
                  ))}
                <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                  <td style={{ color: "#BE1E2D" }}>PAR</td>
                </tr>
                <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                  <td style={{ color: "#BE1E2D" }}>HANDICAP</td>
                </tr>
              </table>
              <div style={{ overflowX: "auto", width: "100%" }}>
                <table style={{ minWidth: "800px" }}>
                  <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                  </tr>
                  {currentCourse &&
                    currentCourse[0]?.tees.map((tee, i) => (
                      <tr
                        style={{
                          backgroundColor: i % 2 ? "#D6D6D6" : "#fff",
                          height: "50px",
                        }}
                      >
                        {tee.hole_data.yardage.slice(0, 9).map((hole) => (
                          <td style={{ color: "#BE1E2D", fontSize: "32px" }}>
                            {hole}
                          </td>
                        ))}
                      </tr>
                    ))}
                  <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                    {currentCourse[0]?.tees[0].hole_data.par
                      .slice(0, 9)
                      .map((hole) => (
                        <td>{hole}</td>
                      ))}
                  </tr>
                  <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                    {currentCourse[0]?.tees[0].hole_data.handicap
                      .slice(0, 9)
                      .map((hole) => (
                        <td>{hole}</td>
                      ))}
                  </tr>
                </table>
              </div>
            </TableContainer>
            <div className="table-label">BACK 9</div>
            <TableContainer>
              <table style={{ width: "auto" }}>
                <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                  <td>HOLE</td>
                </tr>
                {currentCourse &&
                  currentCourse[0]?.tees.map((tee, i) => (
                    <tr
                      style={{
                        height: "50px",
                        background: `linear-gradient(to right, ${
                          tee.color
                        } 10%, ${i % 2 ? "#D6D6D6" : "#fff"} 10%)`,
                      }}
                    >
                      <td style={{ color: "#162E3D", padding: "0px 15px" }}>
                        {tee.name}
                      </td>
                    </tr>
                  ))}
                <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                  <td style={{ color: "#BE1E2D" }}>PAR</td>
                </tr>
                <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                  <td style={{ color: "#BE1E2D" }}>HANDICAP</td>
                </tr>
              </table>
              <div style={{ overflowX: "auto", width: "100%" }}>
                <table style={{ minWidth: "800px" }}>
                  <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                    <td>18</td>
                  </tr>
                  {currentCourse &&
                    currentCourse[0]?.tees.map((tee, i) => (
                      <tr
                        style={{
                          backgroundColor: i % 2 ? "#D6D6D6" : "#fff",
                          height: "50px",
                        }}
                      >
                        {tee.hole_data.yardage.slice(9, 18).map((hole) => (
                          <td
                            style={{
                              color: "#BE1E2D",
                              fontSize: "32px",
                            }}
                          >
                            {hole}
                          </td>
                        ))}
                      </tr>
                    ))}
                  <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                    {currentCourse[0]?.tees[0].hole_data.par
                      .slice(9, 18)
                      .map((hole) => (
                        <td>{hole}</td>
                      ))}
                  </tr>
                  <tr style={{ backgroundColor: "#f3e9d5", height: "38px" }}>
                    {currentCourse[0]?.tees[0].hole_data.handicap
                      .slice(9, 18)
                      .map((hole) => (
                        <td>{hole}</td>
                      ))}
                  </tr>
                </table>
              </div>
            </TableContainer>
            <div className="table-label">RATING & SLOPE</div>
            <TableContainer>
              <table style={{ width: "auto" }}>
                <tr style={{ backgroundColor: "#f3e9d5" }}>
                  <td></td>
                  <td style={{ padding: "5px 15px" }}>RATING</td>
                  <td style={{ padding: "5px 15px" }}>SLOPE</td>
                </tr>
                {currentCourse &&
                  currentCourse[0]?.tees.map((tee, i) => (
                    <tr>
                      <td
                        style={{
                          padding: "5px 15px",
                          background: `linear-gradient(to right, ${
                            tee.color
                          } 10%, ${i % 2 ? "#D6D6D6" : "#fff"} 10%)`,
                        }}
                      >
                        {tee.name}
                      </td>
                      <td
                        style={{
                          color: "#BE1E2D",
                          fontSize: "32px",
                          backgroundColor: i % 2 ? "#D6D6D6" : "#fff",
                        }}
                      >
                        {tee.slope_and_rating.all18.rating}
                      </td>
                      <td
                        style={{
                          color: "#BE1E2D",
                          fontSize: "32px",
                          backgroundColor: i % 2 ? "#D6D6D6" : "#fff",
                        }}
                      >
                        {tee.slope_and_rating.all18.slope}
                      </td>
                    </tr>
                  ))}
              </table>
            </TableContainer>
            <Divider style={{ marginBottom: "30px", marginTop: "40px" }} />
          </CourseInfoContainer>
          {data && data[currentIndex + 1] && (
            <>
              <HeaderText style={{ marginBottom: "25px" }}>
                Next Tournament
              </HeaderText>
              <RoundCard
                backgroundImage={
                  (roundInfo &&
                    roundInfo[currentIndex + 1]?.course_info?.main_image) ||
                  PlaceHolder
                }
                date={data && data[currentIndex + 1]?.round?.date}
                name={data && data[currentIndex + 1]?.round?.name}
                link={data && `${data[currentIndex + 1].round?.id}`}
                style={{ marginBottom: "50px" }}
              />
            </>
          )}
          {data && data[currentIndex - 1] && (
            <>
              <HeaderText style={{ marginBottom: "25px" }}>
                Previous Tournament
              </HeaderText>
              <RoundCard
                backgroundImage={
                  (roundInfo &&
                    roundInfo[currentIndex - 1]?.course_info?.main_image) ||
                  PlaceHolder
                }
                date={data && data[currentIndex - 1]?.round?.date}
                name={data && data[currentIndex - 1]?.round?.name}
                link={data && `${data[currentIndex - 1]?.round?.id}`}
              />
            </>
          )}
          {showModal && (
            <FormModal>
              <FormContainer ref={formRef}>
                <GHINForm onSubmit={submitTeeTime}>
                  <span> {currentRound[0]?.round?.name}</span>
                  <RoundDate>
                    <img src={CalIcon} />
                    {format(parseISO(currentRound[0].round.date), "MMM")}{" "}
                    {format(
                      sub(parseISO(currentRound[0].round.date), { days: 6 }),
                      "d"
                    )}{" "}
                    - {format(parseISO(currentRound[0].round.date), "d")}
                  </RoundDate>
                  <ModalText>
                    Instructions on registering. schedule tee time, return here
                    and enter your info.
                  </ModalText>
                  <a
                    class="tee-time"
                    target="_blank"
                    href={courseInfo[currentCourse[0]?.id]?.tee_time_link}
                  >
                    set tee time
                  </a>
                  <ShortDivider />
                  <InputRow>
                    <Input required name="name" placeholder="Name" />
                  </InputRow>
                  <InputRow>
                    <Input required name="email" placeholder="Email" />
                  </InputRow>
                  <InputRow>
                    <Input required name="tee_time" placeholder="Tee Time" />
                  </InputRow>
                  <InputRow>
                    <label>Number of Tour Golfers</label>
                    <select name="golfers">
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                    </select>
                  </InputRow>
                  <InputRow
                    style={{ justifyContent: "flex-end", paddingTop: "15px" }}
                  >
                    <button onClick={() => setShowModal(false)}>CANCEL</button>

                    <SubmitButton type="submit" value="FINISHED" />
                  </InputRow>
                </GHINForm>
              </FormContainer>
            </FormModal>
          )}
        </InnerContainer>
      )}
    </RoundContainer>
  );
};

export default Round;
