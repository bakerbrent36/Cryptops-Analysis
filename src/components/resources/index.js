import styled from "@emotion/styled";
import { useEffect, useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Objects
import ResourcesList from "../../Resources.json";

const ResourcesContainer = styled.div`
    width: 89%;
    margin: 6rem auto;
    display: flex;
    flex-wrap:wrap;
    h1{
      margin:1rem 0;
      z-index: 2222;
      position: relative;
      text-shadow: 0 0 10px #87c76326, 0 0 25px #87c76326, 0 0 35px #87c76326, 0 0 45px #87c76326, 0 0 55px #87c76326, 0 0 65px #87c76326, 0 0 75px #87c76326;
    }
    .top{
      width:100%;
      margin-bottom:1rem;
    }
    h4{
      background: #8bef4a;
      padding: 1rem;
      color: #577f3b;
      margin:0 0 1rem 0;
      font-famiy: "Classic Console";
      box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
    }
`;


const Resources = () => {
  
  return (

    <ResourcesContainer>

    <div class="top">
      <h1>Resources</h1>
    </div>
    
    {Resources.Resources.map((resource) => {
          return <div class="item">
                   <div class="top-edge"></div>
                    <div class="item-wrap">
                      <div class="top">
                        <div class="name"><h4>{resource.Title}</h4></div>
                      </div>
                    </div>
                    <div class="bottom-edge"></div>
                  </div>
                  ;
      })}

    </ResourcesContainer>

  );
};

export default Resources;