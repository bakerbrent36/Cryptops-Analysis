import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import BlogFeed from "../../components/blog";

// const show = this.style.opacity = "1";

const Blog = () => {

  return(
    <BlogFeed></BlogFeed>
  );

};
  
export default Blog;
