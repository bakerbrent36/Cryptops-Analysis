import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import styled from "@emotion/styled";

import TourResults from "../../components/tour-results";

const LowerContainer = styled.div`
  background-color: #162e3d;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const Results = () => {
  return (
    <div>
      <LowerContainer>
        <TourResults />
      </LowerContainer>
    </div>
  );
};

export default Results;
