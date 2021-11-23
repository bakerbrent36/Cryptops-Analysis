import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import BlogFeed from "../../components/blog";

// Images
import BlogBg from "../../assets/blog/no-loss-silo-airplane.jpg";
import Dust4 from "../../assets/images/bgs/screen-dust-4.png";
import Grid from "../../assets/images/bgs/grid.png";

const BlogContainer = styled.div`
  width:100%;
  background-size:100%;
  background-position:top center;  
`;

const Blog = () => {

  return(
    <BlogContainer style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 53%, rgba(16,15,15,1) 100%), linear-gradient(0deg, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 53%, rgba(16,15,15,1) 100%), url(${BlogBg}), url(${Dust4}), url(${Grid}), radial-gradient(circle, rgba(255, 255, 255, 0.35) 8%, rgba(214, 214, 214, 0) 100%)`}}>
      <BlogFeed></BlogFeed>
    </BlogContainer>
  );

};
  
export default Blog;
