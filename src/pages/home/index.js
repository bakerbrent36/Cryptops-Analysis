import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import useLocalStorage from 'use-local-storage';
import axios from "axios";
import Coin from '../../components/Coin';

import { useWidth } from "../../context/ScreenWidthContext";

const HomeContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
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
    box-shadow: inset 0px 0px 20px #87c763a3, 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
  }
  :active{
    color: rgb(139 239 74);
  }
  :focus{
    color: rgb(139 239 74);
  }
  :visited{
    color: rgb(139 239 74);
  }
  :target{
    color: rgb(139 239 74);
  }
  :focus-visible{
    color: rgb(139 239 74);
  }
  @media(max-width:892px){
    width:65%;
  }
`;

// Sections

const Intro = styled.div `
    height:calc(20rem + 25 * ((100vw - 20rem) / 60));
    display:flex;
    align-items:center;
    justify-content:center;
    h1{
      width: 100%;
      text-align: center;
      animation: typing 2s steps(22), blink .5s step-end infinite alternate;
      white-space: nowrap;
      line-height:2;
      overflow: hidden;
      border-right: 3px solid;
      color: var(--text-primary);
      z-index: 22222;
      position: relative;
      text-shadow: 0 0 10px var(--accent), 0 0 25px var(--accent), 0 0 35px var(--accent), 0 0 45px var(--accent), 0 0 55px var(--accent), 0 0 65px var(--accent), 0 0 75px var(--accent);
    }
    span {
      font-family: 'Monofoto';
      font-weight: bold;
      font-size: clamp(1.722rem, 6vw, 7rem);
      z-index: 22222;
      position: relative;
      text-shadow: 0 0 10px #87c76361, 0 0 35px #87c7634d, 0 0 55px #87c76312, 0 0 75px #87c76312;
    }
    @media(max-width:892px){
      h1{
        line-height: 4;
      }
    }
`;

const api = "https://onw7s0vkl3.execute-api.us-east-1.amazonaws.com/clayton-fob-api-prod";

const Home = (match) => {

  const width = useWidth();
  const location = useLocation();

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const [selectedImage, setSelectedImage] = useState();

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const api = 'https://api.coingecko.com/api/v3/coins/ethereum';

  useEffect(() => {
    fetch(api, {
      method: 'GET',
      headers: {
        'Content-Type':'application/json'
      },
    }
    )
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
        console.log("response", response);
      })
      .catch((error) => console.log("error",error));
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return ( 

  <>

    <HomeContainer>

              <Intro>

              <div>

              <div className="coin-app">
                <div className="coin-search">
                  <h1 className="coin-text">Search for a coin</h1>
                  <form>
                    <input
                      type="text"
                      placeholder="Search for a cryptocurrency"
                      className="coin-input"
                      onChange={handleChange}
                    />
                  </form>
                </div>
                <p className="credits">
                  A simple desktop cryptocurrency tracker. Made with CoinGeckos free API
                  with a rate limit of 10-50 calls per minute.
                </p>
                <div className="heading-container">
                  <div className="heading-row">
                    <div className="c-data">
                      <p className="c-name">Top 50 listed cryptocurrencies</p>
                      <p className="c-price">Price</p>
                      <p className="c-volume">24h Volume</p>
                      <p className="c-change">24h</p>
                      <p className="c-marketcap">Market cap</p>
                    </div>
                  </div>
                </div>
                {filteredCoins.map(coin => {
                  return (
                    <Coin
                      key={coin.id}
                      name={coin.name}
                      image={coin.image}
                      symbol={coin.symbol}
                      volume={coin.total_volume}
                      price={coin.current_price}
                      priceChange={coin.price_change_percentage_24h}
                      marketcap={coin.market_cap}
                    />
                  );
                })}
              </div>

              </div>

              </Intro>

    </HomeContainer>

  </>

    );
};

export default Home;