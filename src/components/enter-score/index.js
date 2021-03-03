import { useQuery } from "react-query";
import styled from "@emotion/styled";

const EnterScore = ({ roundId = 7195606752899937736 }) => {
  const { isLoading, error, data } = useQuery("roundFoursome", () =>
    fetch(`/get-foursomes`, {
      method: "GET",
      credentials: "include",
    }).then((res) => res.json())
  );

  console.log(data);
  return <div>enter score</div>;
};

export default EnterScore;
