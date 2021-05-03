import { useEffect, useState, useRef } from "react";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding-top: 35px;

  form {
    width: 100%;
  }
`;

const ScoreCardContainer = styled.div`
  width: 100%;
  max-width: 1090px;
`;

const ScoreCardRow = styled.div`
  display: flex;
`;

const ScoreCardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3e9d5;
  color: #162e3d;
  text-transform: uppercase;
  height: 50px;
  margin-top: 5px;
  font-family: BebasNeue;
`;

const ScoreCardFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3e9d5;
  color: #be1e2d;
  text-transform: uppercase;
  height: 36px;
  font-family: BebasNeue;
`;

const ScoreCardCenter = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  text-transform: uppercase;
  font-family: BebasNeue;

  input {
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 36px;
    font-family: BebasNeue;
    border: none;
  }
`;

const ScoreCardItem = styled.div`
  height: 146px;
  min-width: 96px;
  font-family: BebasNeue;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #162e3d;
`;

const HeaderText = styled.div`
  font-family: BebasNeue;
  color: #f3e9d5;
  font-size: 36px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 0px;
`;

const Divider = styled.hr`
  width: 100%;
  color: #f3e9d5;
  margin: 40px 0px;
`;

const EnterScore = ({ roundId, userFoursomeObj, opened }) => {
  const [total, setTotal] = useState();
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const formRef = useRef(null);

  const holeLabels =
    userFoursomeObj?.tee?.hole_labels?.map((label) => label) || [];

  const parData = userFoursomeObj?.tee?.hole_data?.par?.map((par) => par) || [];

  const holeData = holeLabels.map((hole, i) => ({
    holeLabel: hole,
    par: parData[i],
  }));

  const submitScore = (e) => {
    setLoader(true);
    e.preventDefault();

    const formData = new FormData(e.target);

    const scoreLine = [];

    for (let pair of formData.entries()) {
      if (pair[1] == "") {
        scoreLine.push("-1");
      } else {
        scoreLine.push(pair[1]);
      }
    }

    const scoreCSV = scoreLine.join(",");

    fetch(`/submit-score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        player_id: userFoursomeObj.player_round_id,
        score: scoreCSV,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoader(false);
        if (data === "OK") {
          setSuccess(true);
        } else {
          setError(true);
        }
      });
  };

  const handleChange = () => {
    const formData = new FormData(formRef.current);

    let totalNum = 0;

    for (let pair of formData.entries()) {
      console.log(pair);
      if (pair[1] !== "") {
        totalNum = totalNum + Number(pair[1]);
      }
    }

    setTotal(totalNum);
  };

  console.log(parData);
  console.log(holeData);
  console.log(userFoursomeObj);

  return (
    <ScoreContainer style={{ display: opened ? "flex" : "none" }}>
      <HeaderText>Enter Score</HeaderText>
      {holeData && (
        <form ref={formRef} onChange={handleChange} onSubmit={submitScore}>
          <ScoreCardContainer>
            <ScoreCardRow>
              <ScoreCardItem>
                <ScoreCardHeader>hole</ScoreCardHeader>
                <ScoreCardCenter>score</ScoreCardCenter>
                <ScoreCardFooter>par</ScoreCardFooter>
              </ScoreCardItem>
              <div
                style={{ overflowX: "auto", width: "100%", display: "flex" }}
              >
                {holeData.slice(0, 9).map((hole, i) => (
                  <ScoreCardItem>
                    <ScoreCardHeader>{hole.holeLabel}</ScoreCardHeader>
                    <ScoreCardCenter>
                      <input
                        name={`hole-${hole.holeLabel}`}
                        style={{ color: "#BE1E2D" }}
                        defaultValue={
                          userFoursomeObj.score_array.slice(0, 9)[i] || ""
                        }
                        type="number"
                      />
                    </ScoreCardCenter>
                    <ScoreCardFooter style={{ color: "#162E3D" }}>
                      {hole.par}
                    </ScoreCardFooter>
                  </ScoreCardItem>
                ))}
                <ScoreCardItem>
                  <ScoreCardHeader style={{ backgroundColor: "#F3E9D5" }} />
                  <ScoreCardCenter style={{ backgroundColor: "#F3E9D5" }} />
                  <ScoreCardFooter
                    style={{ backgroundColor: "#F3E9D5", color: "#162e3d" }}
                  >
                    {parData.length > 1 &&
                      parData.slice(0, 9).reduce((a, b) => a + b, 0)}
                  </ScoreCardFooter>
                </ScoreCardItem>
              </div>
            </ScoreCardRow>
            <ScoreCardRow>
              <ScoreCardItem>
                <ScoreCardHeader>hole</ScoreCardHeader>
                <ScoreCardCenter>score</ScoreCardCenter>
                <ScoreCardFooter>par</ScoreCardFooter>
              </ScoreCardItem>
              <div
                style={{ overflowX: "auto", width: "100%", display: "flex" }}
              >
                {holeData.slice(9, 18).map((hole, i) => (
                  <ScoreCardItem>
                    <ScoreCardHeader>{hole.holeLabel}</ScoreCardHeader>
                    <ScoreCardCenter>
                      <input
                        name={`hole-${hole.holeLabel}`}
                        style={{ color: "#BE1E2D" }}
                        type="number"
                        defaultValue={
                          userFoursomeObj?.score_array.slice(9, 18)[i] || ""
                        }
                      />
                    </ScoreCardCenter>
                    <ScoreCardFooter style={{ color: "#162E3D" }}>
                      {hole.par}
                    </ScoreCardFooter>
                  </ScoreCardItem>
                ))}
                <ScoreCardItem>
                  <ScoreCardHeader>Total</ScoreCardHeader>
                  <ScoreCardCenter
                    style={{ color: "#BE1E2D", fontSize: "36px" }}
                  >
                    {total ||
                      (userFoursomeObj &&
                        userFoursomeObj?.score_array.reduce(
                          (a, b) => Number(a) + Number(b),
                          0
                        ))}
                  </ScoreCardCenter>
                  <ScoreCardFooter
                    style={{ backgroundColor: "#F3E9D5", color: "#162e3d" }}
                  >
                    {parData.length > 1 &&
                      parData.slice(9, 18).reduce((a, b) => a + b, 0)}
                  </ScoreCardFooter>
                </ScoreCardItem>
              </div>
            </ScoreCardRow>
          </ScoreCardContainer>
          <div
            style={{
              height: "40px",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {loader && (
              <span style={{ color: "#f3e9d5" }}>Submitting score...</span>
            )}
            {success && (
              <span style={{ color: "#f3e9d5" }}>
                Scores were submitted successfully!
              </span>
            )}
            {error && (
              <span style={{ color: "#f3e9d5" }}>
                Scores could not be submitted. Please try again
              </span>
            )}
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <button type="submit">submit</button>
          </div>
        </form>
      )}
      <Divider />
    </ScoreContainer>
  );
};

export default EnterScore;
