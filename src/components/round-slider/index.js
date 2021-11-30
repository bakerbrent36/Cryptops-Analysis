import { useState, useEffect, useRef } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { format, parseISO, sub } from "date-fns";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import * as _ from "lodash";

import { useAuth } from "../../context/AuthContext";
import RoundCard from "../../components/round-card";
import PlaceHolder from "../../assets/images/course-placeholder.jpg";
import EnterScore from "../../components/enter-score";
import courseInfo from "../../courseInfo.json";
import Arrow from "../../assets/icons/WHT-arrow.svg";


import React, { Suspense } from 'react';



const RoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F3E9D5;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  padding-top:5rem;

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
  h5{
    font-family: BebasNeue;
    font-size: 36px;
    font-weight: 400;
}

  .tee-btns button:hover{
    transiton:0.2s ease-in-out;
    opacity:0.8;
    cursor:pointer;
  }
  .checkDate {
    display:flex;
    flex-wrap:wrap;
  }
  .checkDate span{
    font-size:18px;
    opacity:1;
    width:100%;
  }
  }
`;

const Divider = styled.hr`
  width: 100%;
  color: #f3e9d5;
  margin: 40px 0px;
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
  overflow: auto;
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
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 24px;
  padding: 5px;

  @media only screen and (max-width: 1100px) {
    font-size: 16px;
  }
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
    color: #F3E9D5;
  }

  td {
    border: 1px solid black;
    font-family: BebasNeue;
    font-size: 22px;
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
  const [loading, setLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState(true);
  const [openScore, setOpenScore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [teeSheets, setTeeSheets] = useState([]);
  const formRef = useRef(null);

  useEffect(() => {
    localStorage.clear();
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
    document.addEventListener("mousedown", handleClickOutside) ;
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        round: currentRound[0]?.round?.name,
      }),
    }).then((res) => {
      setShowModal(false);
    });
  };

  const courseId = (roundId) =>
    Object.entries(courseInfo).filter(([key, value]) => {
      return value.round_id.includes(roundId.toString());
    });

  const Slider = styled(Carousel)`
  width: 100%;

  @media(max-width:892px){
  }

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
    max-height: 625px;
  }
`;

  return (
      <SliderWrap>
        {!openScore && (
            <>
            <Slider 
                showStatus={false}
                showIndicators={false}
                dynamicHeight={true}
                showThumbs={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                    type="button"
                    aria-label="previous slide / item"
                    class="control-arrow control-prev"
                    onClick={onClickHandler}
                    title={label}
                    >
                    <img
                        style={{
                        width: "30px",
                        height: "30px",
                        transform: "rotate(180deg)",
                        opacity: "0.8",
                        }}
                        class="slider-img"
                        src={Arrow}
                    />
                    </button>
                )
                }
                renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                    type="button"
                    aria-label="next slide / item"
                    class="control-arrow control-next"
                    onClick={onClickHandler}
                    title={label}
                    >
                    <img
                        style={{
                        width: "30px",
                        height: "30px",
                        opacity: "0.8",
                        }}
                        src={Arrow}
                    />
                    </button>
                )
                }
            >
                <>
                <div class="container-img">
                <img src={courseInfo[currentCourse[0]?.id]?.main_image} onLoad={() => setLoading(true) & setLoadingMsg(false)}/>
                </div>
                <RoundImage
                    style={{
                    backgroundImage: `linear-gradient(to top, rgba(22, 46, 61, 1), transparent)`,
                    }}
                />
                </>
                {courseInfo[currentCourse[0]?.id]?.images.map((img) => (
                <>
                    <img src={img}/>
                    <RoundImage
                    style={{
                        backgroundImage: `linear-gradient(to top, rgba(22, 46, 61, 1), transparent)`,
                    }}
                    />
                </>
                ))}
            </Slider>
            
            </>
        )}
    </SliderWrap>

    );
};

export default RoundSlider;
