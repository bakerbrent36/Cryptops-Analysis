import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";

import GlobeScript from '../globe';

const GlobeContainer = styled.div`

  svg {
    max-width: 100%;
    width: 140px;
  }

`;

const Globe = () => {

  return(
    <GlobeContainer>

  
    </GlobeContainer>
  );

};
  
export default Globe;
