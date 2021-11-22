import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Portfolio from "../../Portfolio.json";

// Components
import ContactForm from "../../components/contact-form";

// Images
import ScreenFade from "../../assets/images/bgs/screen-fade.png";

const PortfolioContainer = styled.div`
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

const CategoryFilter = styled.div`
    width:25%;
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
    height: fit-content;
    .current{
      width:100%;
    }
`;

const Button = styled(Link) `
  padding:1rem 1.2rem;
  border:3px solid #92ec50;
  border-radius:3px;
  font-family:'Classic Console';
  text-decoration:none;
  text-transform:uppercase;
  font-size: clamp(1rem, 4vw, 1.2rem);
  width:42%;
  text-align:center;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover{
    cursor:pointer;
    transition:0.2s ease-in-out;
    // box-shadow: inset 0px 0px 20px #87c763a3, 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
  }
`;

const PortfolioItem = styled.div`
  width:46%;
  position:relative;
  padding: 1rem;
  background-size: cover;
  margin:0.5rem 0;
  background-position: center center;
  min-height:18rem;
  max-height:18rem;
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
    box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
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
    border:1px solid #92ec50;
  }
  :hover .item-content{
    opacity:1;
    transition:0.2s ease-in-out;
  }
`;

const ItemContent = `
  width:100%;
`;


const PortfolioFeed = () => {
  const [currentCategory, setCurrentCategory] = useState("App Development");
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
    <PortfolioContainer>

            <div class="top">
              <h1>Portfolio</h1>
            </div>

            <CategoryFilter className="filter-sidebar">
                {
                  Portfolio.ParentCategories.map((item) => {
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
                {/* <div class="current">
                  <h5>{currentCategory}</h5>
                </div> */}

                {Portfolio.Items.filter(Cat => 
                  Cat.Category.includes(currentCategory)).map((filteredItem, id) => (
                    <PortfolioItem 
                      onMouseEnter={() => ContentShown(true)}
                      onMouseLeave={() => ContentShown(false)}
                      style={{ backgroundImage: `url(${filteredItem.FeaturedImage})`}}
                      link={`/work/${filteredItem.Name}`}
                      // onMouseOver={changeBackground}
                    >
                      <Link to={`/work/${filteredItem.Id}`}>
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

            </Feed>
    </PortfolioContainer>
  );

};
  
export default PortfolioFeed;
