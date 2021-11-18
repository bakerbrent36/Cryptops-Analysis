import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Blogs from "../../Blog.json";

// Images
import ScreenFade from "../../assets/images/bgs/screen-fade.png";

const BlogContainer = styled.div`
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
      border-bottom: 3px solid #8bef4a;
      margin-bottom:3rem;
    }
`;

const CategoryFilter = styled.div`
    width:25%;
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

const PortfolioItem = styled.div`
  width:46%;
  position:relative;
  padding: 1rem;
  background-size: cover;
  margin:0.5rem 0;
  .item-content{
    opacity:0;
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
  :hover:after{
    content: "";
    transition:0.2s ease-in-out;
    cusor:pointer;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color:#3c512e94;
    -webkit-box-shadow: 0px -4px 3px #86bf5540;
    -moz-box-shadow: 0px -4px 3px #86bf5540;
    box-shadow: 0px -4px 3px #86bf5540;
    border-top:1px solid #92ec50;
    border-bottom:1px solid #92ec50;
  }
  :hover .item-content{
    opacity:1;
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
  const [currentCategory, setCurrentCategory] = useState("App Development");
  const [isShown, ContentShown] = useState(false);

  return(
    <BlogContainer>

            <div class="top">
              <h1>Blog</h1>
            </div>

            <CategoryFilter>
                {/* {
                  Portfolio.ParentCategories.map((item) => {
                    return (
                      <div>
                        <button onClick={() => setCurrentCategory(item.Category)}>
                          <div class="sq"></div>
                          {item.Category}
                        </button>
                      </div>
                    );
                  })
                }  */}
            </CategoryFilter>

            <Feed>
                {/* {Portfolio.Items.filter(Cat => 
                  Cat.Category === currentCategory).map(filteredItem => (
                    <PortfolioItem 
                      onMouseEnter={() => ContentShown(true)}
                      onMouseLeave={() => ContentShown(false)}
                      style={{ backgroundImage: `url(${filteredItem.FeaturedImage})`}}
                      link={`/portfolio/${filteredItem.Name}`}
                      // onMouseOver={changeBackground}
                    >
                      <div class="item-content">
                        <h4>{filteredItem.Name}</h4>

                        <p>{filteredItem.Description}</p>

                        <div class="tags">
                          {filteredItem.Tags.map((tag) => (
                            <>
                              <span>{tag.toString()}</span>
                            </>
                            ))}
                        </div>
                      </div>
                        

                    </PortfolioItem>
                ))} */}
                {/* {
                  Object.keys(templates).map(template_name => {
                    return (
                      <div>
                        <div>{template_name}</div>
                        {
                          templates[template_name].items.map(item => {
                            return(<div>{item}</div>)
                          })
                        }
                      </div>
                    )
                  })
                } */}
            </Feed>
    </BlogContainer>
  );

};
  
export default BlogFeed;
