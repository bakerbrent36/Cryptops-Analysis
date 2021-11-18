import styled from "@emotion/styled";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

// Components
import Skills from "../../components/skills";

const AboutContainer = styled.div`
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

const LearnMore = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  // useEffect(() => {
  //   fetch("https://swapi.dev/api/people/", {})
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setData(response.results);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  return (
    <>
    <AboutContainer>
      <Skills></Skills>
    </AboutContainer>
      {/* {!isLoading &&
        data.map((person, index) => {
          return (
            <h5 key={index}>
              <Link to={`/person/${index + 1}`}>{person.name}'s Page</Link>
            </h5>
          );
        })} */}
    </>
  );
};

export default LearnMore;
