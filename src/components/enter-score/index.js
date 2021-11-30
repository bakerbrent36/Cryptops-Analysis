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
  color: #F3E9D5;
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
  border-left: 1px solid #F3E9D5;
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

const EnterScore = ({ roundId }) => {
  const [total, setTotal] = useState();
  const [loader, setLoader] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  return (
    <ScoreContainer style={{ display: opened ? "flex" : "none" }}>

    </ScoreContainer>
  );
};

export default EnterScore;
