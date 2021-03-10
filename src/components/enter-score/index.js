import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

const ScoreContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

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
  width: 98px;
  font-family: BebasNeue;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #162e3d;
`;

const EnterScore = ({ roundId }) => {
  const [total, setTotal] = useState();

  const { isLoading, error, data } = useQuery("roundFoursome", () =>
    fetch(`/get-foursomes/${roundId}`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json())
  );

  console.log(data);

  const holeLabels =
    (data && data[0]?.foursome?.tee?.hole_labels?.map((label) => label)) || [];

  const parData =
    (data && data[0]?.foursome?.tee?.par?.map((par) => par)) || [];

  const holeData = holeLabels.map((hole, i) => ({
    holeLabel: hole,
    par: parData[i],
  }));

  const submitScore = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const scoreLine = [];

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]);
      scoreLine.push(pair[1]);
    }

    const scoreCSV = scoreLine.join(",");
    console.log(scoreCSV);

    fetch(`/submit-score`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        player_id: data[0].foursome.players[0].id,
        score: scoreCSV,
      }),
    });
  };

  const handleChange = (e) => {};

  console.log(holeLabels);
  console.log(parData);
  console.log(holeData);
  return (
    <ScoreContainer>
      {holeData && (
        <form onChange={handleChange} onSubmit={submitScore}>
          <ScoreCardContainer>
            <ScoreCardRow>
              <ScoreCardItem>
                <ScoreCardHeader>hole</ScoreCardHeader>
                <ScoreCardCenter>score</ScoreCardCenter>
                <ScoreCardFooter>par</ScoreCardFooter>
              </ScoreCardItem>
              {holeData.slice(0, 9).map((hole) => (
                <ScoreCardItem>
                  <ScoreCardHeader>{hole.holeLabel}</ScoreCardHeader>
                  <ScoreCardCenter>
                    <input
                      name={`hole-${hole.holeLabel}`}
                      style={{ color: "#BE1E2D" }}
                      type="text"
                      required
                    ></input>
                  </ScoreCardCenter>
                  <ScoreCardFooter style={{ color: "#162E3D" }}>
                    {hole.par}
                  </ScoreCardFooter>
                </ScoreCardItem>
              ))}
              <ScoreCardItem>
                <ScoreCardHeader style={{ backgroundColor: "#F3E9D5" }} />
                <ScoreCardCenter style={{ backgroundColor: "#F3E9D5" }} />
                <ScoreCardFooter style={{ backgroundColor: "#F3E9D5" }} />
              </ScoreCardItem>
            </ScoreCardRow>
            <ScoreCardRow>
              <ScoreCardItem>
                <ScoreCardHeader>hole</ScoreCardHeader>
                <ScoreCardCenter>score</ScoreCardCenter>
                <ScoreCardFooter>par</ScoreCardFooter>
              </ScoreCardItem>
              {holeData.slice(9, 18).map((hole) => (
                <ScoreCardItem>
                  <ScoreCardHeader>{hole.holeLabel}</ScoreCardHeader>
                  <ScoreCardCenter>
                    <input
                      name={`hole-${hole.holeLabel}`}
                      style={{ color: "#BE1E2D" }}
                      type="text"
                      required
                    ></input>
                  </ScoreCardCenter>
                  <ScoreCardFooter style={{ color: "#162E3D" }}>
                    {hole.par}
                  </ScoreCardFooter>
                </ScoreCardItem>
              ))}
              <ScoreCardItem>
                <ScoreCardHeader>Total</ScoreCardHeader>
                <ScoreCardCenter>numbers</ScoreCardCenter>
                <ScoreCardFooter></ScoreCardFooter>
              </ScoreCardItem>
            </ScoreCardRow>
          </ScoreCardContainer>
          <button type="submit">submit</button>
        </form>
      )}
    </ScoreContainer>
  );
};

export default EnterScore;
