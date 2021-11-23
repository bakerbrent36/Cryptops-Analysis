import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Blog from "../../Blog.json";

// Images
import ScreenFade from "../../assets/images/bgs/screen-fade.png";

const BlogContainer = styled.div`
    width: 89%;
    margin: 10rem auto;
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
      border-bottom: 3px solid #8bef4a;
      margin-bottom:3rem;
    }
`;

const CategoryFilter = styled.div`
    width:25%;
    @media(max-width:892px){
      width: 100%;
    }
    .filter{
      margin:0.4rem 0;
      width: 85%;
    }
    .filter.active{
      border: 2px solid #86bf55;
      cursor:pointer;
      -webkit-box-shadow: 10px 10px 15px #86bf5540;
      -moz-box-shadow: 10px 5px 15px #86bf5540;
      box-shadow: 0px 0px 15px #86bf5540;
    }
    .filter:hover{
      border: 2px solid #86bf55;
      cursor:pointer;
      -webkit-box-shadow: 10px 10px 15px #86bf5540;
      -moz-box-shadow: 10px 5px 15px #86bf5540;
      box-shadow: 0px 0px 15px #86bf5540;
    }
    .filter.active .sq{
      transition:0.2s ease-in-out;
      width: 0.5rem;
      height:0.5rem;
      opacity:1;
      margin-right: 0.4rem;
    }
    button{
      font-weight: 700;
      color: #8bef4a;
      background:transparent;
      border: 0;
      font-size: 1rem;
      display: flex;
      align-items: center;
      padding: 0.5rem 0.9rem;
    }
    button:hover{
      border: 2px solid #86bf55;
      cursor:pointer;
      -webkit-box-shadow: 10px 10px 15px #86bf5540;
      -moz-box-shadow: 10px 5px 15px #86bf5540;
      box-shadow: 0px 0px 15px #86bf5540;
    }
`;

const Feed = styled.div`
    width:75%;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
`;

const FilterItem = styled(Link) `
  font-weight: 700;
  color: #8bef4a;
  background:transparent;
  border: 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.9rem;
  width: 100%;
  text-decoration:none;
`;

const BlogItem = styled.div`
  width:100%;
  position:relative;
  padding: 1rem;
  background-size: cover;
  margin:0.5rem 0;
  background-color:#3c512e94;
  -webkit-box-shadow: 0px -4px 3px #86bf5540;
  -moz-box-shadow: 0px -4px 3px #86bf5540;
  box-shadow: 0px -4px 3px #86bf5540;
  border-top:1px solid #92ec50;
  border-bottom:1px solid #92ec50;
  .item-content{
    position:relative;
    z-index: 22222;
    .tags span {
      margin-right: 1rem;
    }
  }
  :hover{
    cursor:pointer;
    transition:0.2s ease-in-out;
  }
`;

const ItemContent = `
  width:100%;
`;

const Tag = styled.div`

`;

function activeFilter() {
  
}

// const show = this.style.opacity = "1";

const BlogFeed = () => {
  const [currentCategory, setCurrentCategory] = useState("Tips & Tricks");
  const [isShown, ContentShown] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  let filterSidebar = Array.from(document.querySelectorAll('.filter'));

  const defaultFilter = () => {
    let defaultFilter = document.getElementById(currentCategory);
    defaultFilter.parentElement.classList.add('active');
  }

  useEffect(() => {
    defaultFilter();
  },[]);

  const activeFilter = (e) => {
    let item = e.target.parentElement;

    filterSidebar.forEach(node => {
      node.classList.remove('active');
    });

    item.classList.add('active');
  }

  return(
    <BlogContainer>

            <div class="top">
              <h1>Blog</h1>
            </div>

            <CategoryFilter className="filter-sidebar">
                {
                  Blog.ParentCategories.map((item) => {
                    return (
                      <div class="filter" onClick={(e)=>activeFilter(e)}>
                        <FilterItem onClick={() => setCurrentCategory(item)} id={item}>
                          <div class="sq"></div>
                          {item}
                        </FilterItem>
                      </div>
                    );
                  })
                } 
            </CategoryFilter>

            <Feed>

                {Blog.Blogs.filter(Cat => 
                  Cat.Category.includes(currentCategory)).map((filteredItem, id) => (
                    <BlogItem 
                      onMouseEnter={() => ContentShown(true)}
                      onMouseLeave={() => ContentShown(false)}
                      style={{ backgroundImage: `url(${filteredItem.FeaturedImage})`}}
                      link={`/blog/${filteredItem.Name}`}
                    >
                      <Link to={`/blog/${filteredItem.Id}`}>
                      <div class="item-content" id={`${id}`}>
                        <div><h4>{filteredItem.Title}</h4></div>

                        <div><p>{filteredItem.Excerpt}</p></div>

                        <div class="tags">
                          {filteredItem.Tags.map((tag) => (
                            <>
                              <span>{tag.toString()}</span>
                            </>
                            ))}
                        </div>
                      </div>
                      </Link>

                    </BlogItem>
                ))}

            </Feed>
    </BlogContainer>
  );

};
  
export default BlogFeed;
