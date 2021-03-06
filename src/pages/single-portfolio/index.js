import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link, BrowserRouter as Router, Route, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import Portfolio from "../../Portfolio.json";

// Components
import ContactForm from "../../components/contact-form";

const PortfolioHeader = styled.div`
  background-size:cover;
  background-position:center center;
  height: 80vh;
  position:relative;
  overflow:hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  img.logo {
    z-index: 22222;
    width: 20%;
    margin: 0 auto;
    position: relative;
  }
  :before{
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color:#87c763;
    opacity:0.4;
    overflow:hidden;
    mix-blend-mode: soft-light;
  }
  :after{
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: radial-gradient(circle, rgba(255,255,255,0.19511554621848737) 0%, rgba(255,255,255,0.12788865546218486) 49%, rgba(255,255,255,0) 100%),linear-gradient(0deg, rgba(28,29,36,1) 0%, rgba(28,29,36,0.5116421568627452) 66%, rgba(28,29,36,0) 100%);
  }
`;

const PortfolioContent = styled.div `
  width:88%;
  margin:4rem auto;
  h1{
    line-height: 1;
    color:#f6f6f6;
    font-size: clamp(1.722rem, 4vw, 4.2rem);
  }
  p{
    color:#f6f6f6;
  }
  a.button{
    padding:1rem 1.2rem;
    border:3px solid #f6f6f6;
    border-radius:3px;
    font-family:'Classic Console';
    text-decoration:none;
    text-transform:uppercase;
    font-size: clamp(1rem, 4vw, 1.2rem);
    width: 15%;
    margin:3rem 0;
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#f6f6f6;
    :hover{
      cursor:pointer;
      transition:0.2s ease-in-out;
      // box-shadow: inset 0px 0px 20px #87c763a3, 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
    }
    @media(max-width:892px){
      width:84%;
    }
  }
`;

const Tags = styled.div `
  display:flex;
  flex-wrap:wrap;
  justify-content: flex-start;
  align-items:center;
  margin:6rem 0;
  @media(max-width:892px){
    width:100%;
    margin:1rem 0;
    justify-content: center;
  }
`;

const Tag = styled(Link) `
  display: flex;
  flex-direction: column;
  width: fit-content;
  min-width:15rem;
  align-items: center;
  justify-content: center;
  margin:0.6rem 1rem 0.6rem 0;
  .top-edge{
    width: 100%;
    height: 0.5rem;
    border-top:1px solid #87c763;
    border-right:1px solid #87c763;
    border-left:1px solid #87c763;
    margin-bottom:0.7rem;
  }
  .bottom-edge{
    width: 100%;
    height: 0.5rem;
    border-bottom:1px solid #87c763;
    border-right:1px solid #87c763;
    border-left:1px solid #87c763;
    margin-top:0.7rem;
  }
  span{
    color:#87c763;
    position:absolute;
    text-shadow: 0 0 10px #87c76326, 0 0 25px #87c76326, 0 0 35px #87c76326, 0 0 45px #87c76326, 0 0 55px #87c76326, 0 0 65px #87c76326, 0 0 75px #87c76326;
  }
  @media(max-width:892px){
    width:25%;
    margin: 1rem 0;
  }
`;

// const Button = styled(Link) `
//   padding:1rem 1.2rem;
//   border:3px solid #f6f6f6;
//   border-radius:3px;
//   font-family:'Classic Console';
//   text-decoration:none;
//   text-transform:uppercase;
//   font-size: clamp(1rem, 4vw, 1.2rem);
//   width: 15%;
//   margin:3rem 0;
//   text-align:center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color:#f6f6f6;
//   :hover{
//     cursor:pointer;
//     transition:0.2s ease-in-out;
//     // box-shadow: inset 0px 0px 20px #87c763a3, 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
//   }
// `;

const PortfolioItem = styled.div`
  width:47%;
  position:relative;
  padding: 1rem;
  background-size: cover;
  margin:0.5rem 0;
  background-position: center center;
  min-height:18rem;
  max-height:18rem;
  .related-wrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
  }
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
  @media(max-width:892px){
    width:100%;
  }
`;

const RelatedProjects = styled.div`
  width:88%;
  margin:6rem auto;
  h2{
    font-size: clamp(1.322rem, 4vw, 3.2rem);
    color:#f6f6f6;
  }
  .related-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

`;

const Previews = styled.div`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:space-around;
  flex-direction:column;
  width:100%;
  img.log {
    width: 30%;
    margin: 5rem auto;
  }
  a {
    width: 60%;
    height:fit-content;
    z-index:222;
    position:relative;
  }
  img{
    width:100%;
    margin:1rem 0;
  }
  @media(max-width:892px){
    img.log {
      margin: 0 auto;
    }
    a {
      width: 100%;
    }
  }
`;

const SinglePortfolioPage = ({ match }) => {
  const location = useLocation();

  const {
    params: { portfolioId },
  } = match;

  const [isLoading, setIsLoading] = useState(true);

  const currentItem = Portfolio.Items[portfolioId];

  const [currentCategory, setCurrentCategory] = useState(currentItem.Category);
  const [isShown, ContentShown] = useState(false);

  function preview(){
    return(
      <iframe src={currentItem.Preview} title={currentItem.Name} class="iframe"></iframe>
    )    
  }

  function liveSite(){
    return(
      <a href={currentItem.LiveSite } rel="noopener" target="_blank" class="button">View Site</a>
    )    
  }

  return (
    <>
        <>
          <PortfolioHeader style={{ backgroundImage: `url(${currentItem.HeaderImage})`}}>
            <img src={currentItem.Logo} class="logo" alt=""/>
          </PortfolioHeader>

          <PortfolioContent>

            <h1>{currentItem.Name}</h1>
            <p>{currentItem.Description}</p>

            {currentItem.LiveSite && liveSite()}

            <Previews>

                <img src={currentItem.Logo} class="log" alt=""/>  
                
                {currentItem.Preview && preview()}

                {currentItem.Slides.map((slide) => {
                  return <a href={slide}>
                              <img src={slide} class="slide" alt=""/>
                          </a>
                        ;
                })}

            </Previews>

            <Tags>
              {currentItem.Tags.map((tag) => (
                <>
                  <Tag>
                    <div class="top-edge"></div>
                    <span>{tag.toString()}</span>
                    <div class="bottom-edge"></div>
                  </Tag>
                </>
                ))}
            </Tags>
          </PortfolioContent>

          <ContactForm></ContactForm>

          <RelatedProjects>
            <h2>Related Projects</h2>
            <div class="related-wrap">
            {Portfolio.Items.filter(Cat => 
              Cat.Category === currentCategory).slice(0, 2).map((filteredItem, id) => (
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
            </div>
          </RelatedProjects>
        </>
    </>
  );
};

export default SinglePortfolioPage;
