import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";

const ProcessContainer = styled.div`


`;

// const show = this.style.opacity = "1";

const Process = () => {
  const [currentCategory, setCurrentCategory] = useState("App Development");
  const [isShown, ContentShown] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  return(
    <PortfolioContainer>

  {/* {Portfolio.ParentCategories.map((cat, index) => (
                <h5 key={index}>
                <Link to={`/portfolio/${index + 1}`}>{cat.Category}'s Page</Link>
                </h5>
            ))} */}

            <div class="top">
              <h1>Portfolio</h1>
            </div>

            <CategoryFilter>
                {
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
                } 
            </CategoryFilter>

            <Feed>
                {Portfolio.Items.filter(Cat => 
                  Cat.Category === currentCategory).map((filteredItem, id) => (
                    <PortfolioItem 
                      onMouseEnter={() => ContentShown(true)}
                      onMouseLeave={() => ContentShown(false)}
                      style={{ backgroundImage: `url(${filteredItem.FeaturedImage})`}}
                      link={`/portfolio/${filteredItem.Name}`}
                      // onMouseOver={changeBackground}
                    >
                      <Link to={`/person/${filteredItem.Id}`}>
                      <div class="item-content" id={`${id}`}>
                        <div><h4>{filteredItem.Name}</h4></div>

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
                    </PortfolioItem>
                ))}
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
    </PortfolioContainer>
  );

};
  
export default Process;
