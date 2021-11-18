import styled from "@emotion/styled";
import { useEffect, useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

// Objects
import Testimonials from "../../Testimonials.json";

const TestimonialsContainer = styled.div`
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
    .carousel-root{
      width:100%;
    }
    .carousel .control-dots {
        bottom: 0;
    }
    .carousel .carousel-status {
      color: #8def4b;
      margin-right: 1rem;
    }
    .carousel.carousel-slider .control-arrow {
      padding: 0 1rem;
      margin: 0;
    }
    .carousel.carousel-slider .control-arrow:hover {
      background: rgb(140 239 77 / 12%);
    }
    .carousel .control-dots .dot {
      background: #8bed4d;
      border-radius: 0;
      box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
    }
    .carousel .control-prev.control-arrow:before {
      border-right: 8px solid #73c63e;
    }
    .carousel .control-next.control-arrow:before {
      border-left: 8px solid #8eee54;
    }
    h4{
      background: #8bef4a;
      padding: 1rem;
      color: #577f3b;
      margin:0 0 1rem 0;
      font-famiy: "Classic Console";
      box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
    }
    .item{
      display:flex;
      flex-direction:column;
      justfiy-content:space-between !important;
      background-color: #3c512e94;
      -webkit-box-shadow: 0px -4px 3px #86bf5540;
      -moz-box-shadow: 0px -4px 3px #86bf5540;
      box-shadow: 0px -4px 3px #86bf5540;
      min-height: 17rem;
      .top-edge {
        height: 1rem;
        border-top: 1px solid #8bef4a;
        border-left: 1px solid #8bef4a;
        border-right: 1px solid #8bef4a;
      }
      .bottom-edge {
        height: 1rem;
        border-bottom: 1px solid #8bef4a;
        border-left: 1px solid #8bef4a;
        border-right: 1px solid #8bef4a;
      }
      .item-wrap{
        padding:2rem 5rem;
        min-height: 15rem;
      }
      .top {
        display: flex;
      }
      .quote {
        text-align: left;
      }
    }
`;


const TestimonialsSlider = () => {
  const ref = useRef(null);
  
  return (

    <TestimonialsContainer>

    <div class="top">
      <h1>Testimonials</h1>
    </div>
    
    <Carousel interval="7500" autoPlay="true" infiniteLoop="true">
        {Testimonials.Testimonials.map((c) => {
          return <div class="item">
                   <div class="top-edge"></div>
                    <div class="item-wrap">
                      <div class="top">
                        <div class="name"><h4>{c.Name} | {c.Title}</h4></div>
                        <div class="title"><span>{c.Date}</span></div>
                      </div>
                      <div class="quote">
                        <p>{c.Quote}</p>
                      </div>
                    </div>
                    <div class="bottom-edge"></div>
                  </div>
                  ;
      })}
    </Carousel>

    </TestimonialsContainer>

  );
};

export default TestimonialsSlider;