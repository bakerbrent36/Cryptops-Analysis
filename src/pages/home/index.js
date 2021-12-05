import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import useLocalStorage from 'use-local-storage';

import { useWidth } from "../../context/ScreenWidthContext";

// Components
import ContactForm from "../../components/contact-form";
import PortfolioFeed from "../../components/portfolio";
// import BlogFeed from "../../components/blog";
import Testimonials from "../../components/testimonials";
// import Skills from "../../components/skills";
// import Globe from "../../components/globe";


// Backgrounds
// import RadialFade from "../../assets/images/bgs/radial-fade.png";
import TimelineBG from "../../assets/images/bgs/timeline-bg.jpg";
// import ContactBg from "../../assets/images/bgs/dark-cabin-contact-bg.jpg";
import Dust4 from "../../assets/images/bgs/screen-dust-4.png";
import Grid from "../../assets/images/bgs/grid.png";

//Profile Image
import ProfileImage from "../../assets/images/new/bb-profile.jpg";


// (function () {
//   // listen for events
//   window.addEventListener("load", callbackFunc);
//   window.addEventListener("resize", callbackFunc);
//   window.addEventListener("scroll", callbackFunc);
// })();

const ThemeMode = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 1rem;
  top:1rem;
  right:1rem;
  left:1rem;
  bottom:0;
  align-self:flex-end;
  .dots {
      z-index: 2222;
      display:flex;
      flex-direction:column;
  }
  span.dot {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      display: inline-block;
      margin:0.1rem 0.2rem;
  }
  span.dot:first-child{
    background: #f6f6f6;
  }
  span.dot:nth-child(2){
    background: #8ac652;
  }
  span.dot:nth-child(3){
    background: #88d0c6;
  }
  span.dot:nth-child(4){
    background: #fcb017;
  }
  span.dot:hover{
    cursor:pointer;
    opacity:0.7;
    transition:0.2s ease-in-out;
  }
  @media(max-width:892px){
    left:0.1rem;
  }
`;

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

const Brent = styled.div `
  h1{
    font-size: clamp(2.333rem, 5vw, 5.888rem);
    text-shadow: 0 0 10px var(--accent), 0 0 25px var(--accent), 0 0 35px var(--accent), 0 0 45px var(--accent), 0 0 55px var(--accent), 0 0 65px var(--accent), 0 0 75px var(--accent);
  }
  .social {
    display: flex;
    margin-bottom:1rem;
  }
  .social div {
    margin-right: 0.9rem;
  }
  .social div i {
      width: 2.4rem;
  }
`;


const About = styled.div `
width: 89%;
margin: 0 auto;
min-height:100vh;
  .contain{
    margin-top:2rem;
    display:flex;
    justify-content:space-between;
    .col{
      width:48%;
      h4 {
        background: #8bef4a;
        padding: 1rem;
        color: #577f3b;
        font-famiy:"Classic Console";
        box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
     }
    }
    .col:first-child{
      border-top:2px solid #86bf55;
      background-color:#3c512eb0;
      border-bottom: 2px solid #86bf55;
      min-height: 38rem;
      .col-style{
        padding:0rem 1rem;
      }
      .top-edge {
        border-left: 2px solid #86bf55;
        border-right: 2px solid #86bf55;
        height:0.6rem;
      }
      .bottom-edge {
        border-left: 2px solid #86bf55;
        border-right: 2px solid #86bf55;
        height:0.6rem;
      }
      .buttons{
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 32%;
          margin-bottom: 1rem;
          position: relative;
          z-index: 22222;
      }
      p{
        width: 95%;
        margin: 1rem auto;
      }
      @media(max-width:892px){
        .buttons{
          width: 90%;
          margin: 0 auto;
        }
        .buttons .button{
          width:100%;
          margin:0.5rem 0;
      }
      }
    }
    .col:last-child{
      background-size: cover;
      background-position: center center;
      .overlay{
        width:100%;
        height:100%;
        opacity:0.22;
      }
    }
    .col:last-child:after{
    }
  }
  h1{
    margin: 0;
    line-height: 0.9;
    z-index: 22222;
    position: relative;
    text-shadow: 0 0 10px var(--accent), 0 0 25px var(--accent), 0 0 35px var(--accent), 0 0 45px var(--accent), 0 0 55px var(--accent), 0 0 65px var(--accent), 0 0 75px var(--accent);
  }
  @media(max-width:892px){
    width: 93%;
    .contain{
      flex-direction: column-reverse;
    }
    .col:first-child{
      width:100%;
      padding:0 !important;
      margin-top: 2rem;
    }
    .col:last-child{
      width:100%;
      height: 20rem;
    }
    .buttons {
      margin-top: 10%;
      flex-direction: column;
    }  
  }
`;

const Experience = styled.div `
margin-top: 11rem;
padding-top: 3rem;
padding-bottom: 7rem;
background-size:cover;
  h1{
    margin: 0 auto;
    width:89%;
    line-height: 0.9;
    z-index: 22222;
    position: relative;
    text-shadow: 0 0 10px var(--accent), 0 0 25px var(--accent), 0 0 35px var(--accent), 0 0 45px var(--accent), 0 0 55px var(--accent), 0 0 65px var(--accent), 0 0 75px var(--accent);
  }
  @media(max-width:892px){
    margin-top:2rem;
    padding-bottom:2rem;
  }
`;

const Timeline = styled.div `
  display: flex;
  justify-content: center;
  margin:2rem auto;
  width:89%;
  p, span{
    padding:0 0.3rem;
  }
  h4{
    background: #8bef4a;
    padding: 1rem;
    color: #577f3b;
    margin: 1rem 0;
    font-famiy: "Classic Console";
    box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
  }
  .time-mid {
    border:1px solid #8bef4a;
    width:0px;
    margin:2rem auto;
  }
  .time-left{
    width:46%;
    .one, .three, .five{
      border-top: 2px solid #86bf55;
      background-color: #3c512eb0;
      border-bottom: 2px solid #86bf55;
      .square{
        width: 0.8rem;
        background: #98ea57;
        height: 0.8rem;
        z-index: 222;
        position: absolute;
        left: 49.6%;
        box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
      }
    }
    .three {
      margin-top: 85%;
    }
    .five {
      margin-top: 85%;
  }
  }
  .time-right{
    width:46%;
    .square{
      width: 0.8rem;
      background: #98ea57;
      height: 0.8rem;
      z-index: 222;
      position: absolute;
      right: 49.6%;
      box-shadow: 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
    }
    .two, .four{
      border-top: 2px solid #86bf55;
      background-color: #3c512eb0;
      border-bottom: 2px solid #86bf55;
      margin-top: 85%;
    }
    .two{
      margin-top: 85%;
    }
    .four {
      margin-top: 85%;
  }
  }
  @media(max-width:892px){
    flex-direction:column;
    .square{
      display:none;
    }
    .time-left{
      width: 100%;
      .three {
        margin-top: 10%;
      }
      .five {
        margin-top: 10%;
      }
    }
    .time-mid {
      display: none;
    }
    .time-right{
      width:100%;
      .two{
        margin-top:10%;
      }
      .four{
        margin-top:10%;
      }
    }
  }
  .wrap{
    padding:0rem 1rem;
  }
  .top-edge {
    border-left: 2px solid #86bf55;
    border-right: 2px solid #86bf55;
    height:0.6rem;
  }
  .bottom-edge {
    border-left: 2px solid #86bf55;
    border-right: 2px solid #86bf55;
    height:0.6rem;
  }
`;

const Portfolio = styled.div`
  width:89%;
  margin:3rem auto;
`;

const Contact = styled.div`
  width:89%;
  margin:3rem auto;
`;

const Home = () => {

    const width = useWidth();
    const location = useLocation();

    const defaultDark = window.matchMedia('(prefers-color-scheme: green)').matches;
        const [theme, setTheme] = useLocalStorage('theme', defaultDark);

        const light = () => {
          const theme = 'light';
          setTheme(theme);
        }

        const green = () => {
          const theme = 'green';
          setTheme(theme);
        }

        const blue = () => {
          const theme = 'blue';
          setTheme(theme);
        }

        const orange = () => {
          const theme = 'orange';
          setTheme(theme);
        }

    return ( 
  <>

  {/* <ThemeMode style={{ position: `sticky`}}>
    <div class="dots">
        <span class="dot" onClick={light}></span>
        <span class="dot" onClick={green}>{theme === 'green'}</span>
        <span class="dot" onClick={blue}></span>
        <span class="dot" onClick={orange}></span>
      </div>
  </ThemeMode> */}

    <HomeContainer data-theme={theme}>

              <Intro>

              <h1><span>&lt;</span> Hello World <span>/&gt;</span></h1>

              </Intro>

              <About>
                
                <Brent>

                <div class="social">
                  <div><a href="https://www.linkedin.com/in/bbweb/" target="_blank"><i class="ico linkedin-ico"></i></a></div>
                  <div><a href="https://github.com/bakerbrent36" target="_blank"><i class="ico github-ico"></i></a></div>
                  <div><a href="https://www.instagram.com/standardstealth/" target="_blank"><i class="ico ig-ico"></i></a></div>
                  <div><a href="https://www.facebook.com/bakerbrenton/" target="_blank"><i class="ico fb-ico"></i></a></div>
                </div>

                <h1>Brent Baker</h1>
                <h1>Full-Stack Developer</h1>

                <div class="contain">
                  <div class="col">
                  <div class="top-edge"></div>
                    <div class="col-style">
                      <h4>About</h4>
                      <p>An experienced web developer with a ferocious appetite for visual storytelling in all aspects.</p>
                      <p>As a problem solver, I focus on one common goal: creating personalized solutions for the partners and clients I work with. Offering a wide range of web and branding solutions, I have worked with small and large business owners of many genres. Whether it’s building a web empire, full blown software development or branding. I love to inspire with creative and passionate people around the world.</p>
                      <p>When I’m not at my desk there is a good chance you will find me outside exploring a dilapidated building or working on my car.</p>
                      <div class="buttons">
                        <a href="https://s3.us-east-2.amazonaws.com/bakerbrent.com/assets/brent-baker-dev-design.pdf" rel="noopener" target="_blank" class="button">
                        <div class="sq"></div>View Resume
                        </a>
                        <a href="/contact" rel="noopener" class="button">
                        <div class="sq"></div>Hire Me
                        </a>
                      </div>
                    </div>
                  <div class="bottom-edge"></div>
                  </div>
                  
                  <div class="col" style={{ backgroundImage: `url(${ProfileImage})`}}>

                      <div class="overlay"  style={{ backgroundColor: '#87c763'}}>

                      </div>
                    
                  </div>

                </div>

                </Brent>

                </About>

                <Experience style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 89%, rgba(16,15,15,1) 98%), url(${TimelineBG}), url(${Dust4}), url(${Grid}), radial-gradient(circle, rgb(255 255 255 / 35%) 8%, rgba(214, 214, 214, 0) 100%)`}}> 

                <h1>Experience</h1>

                <Timeline>
                  <div class="time-left">
                      <div class="one">
                      <div class="top-edge"></div>
                      <div class="wrap">
                          <div class="square"></div>
                          <h4>BigWheel | Mar 2019 - Present</h4>
                          <span>Full-Stack Developer | <a href="https://www.gobigwheel.com" target="_blank">www.gobigwheel.com</a></span>
                          <p>My duties at BigWheel involved everything from WooCommerce custom theme development to a variety of dev ops which includes regenerating keys for an EC2 instance and developing custom apps in React Js such as <a href="/work/3">Powerslide</a> and the <a href="/work/0">Disney Quiz Engine</a> app. A high standard and collaborative work environment that requires a keen eye for detail. This position consisted of everything under the sun in web devevelopment. Utilizing languages such as Javascript, PHP, Ruby and an estentive knowledge in CSS, HTML.</p>
                          <p>Some additional aspects involved working in Sketch, Illustrator and Photoshop improvising design and optimizing assets with proven results in user experience. Throughout this process I would maintain close communication with our team while providing training, wireframes, user flows, site maps and documentation for the clients. This position has been a huge asset honing in on my entire web development process.</p>
                          </div>
                        <div class="bottom-edge"></div>
                      </div>
                      <div class="three">
                      <div class="top-edge"></div>
                      <div class="wrap">
                          <div class="square"></div>
                          <h4>D+H | Mar 2016 - Jan 2017</h4>
                          <span>Web Developer | <a href="https://www.dh.com">www.dh.com</a></span>
                          <p>This position consisted of developing apps for presenting information on our products such as PhoenixEFE, UltraData and Touche. Designing logos, email banners, plus creating countless web animations for our partners and helping the team keep their presentation on brand. A great deal was put into retaining knowledge of the products, competitors and partners by collaborating with our entire sales and creative team.</p>
                          </div>
                        <div class="bottom-edge"></div>
                      </div>
                      <div class="five">
                      <div class="top-edge"></div>
                      <div class="wrap">
                          <div class="square"></div>
                          <h4>Mojo Brands Media | Sep 2014 - Feb 2015</h4>
                          <span>Web Developer</span>
                          <p>This position was landed 4 months prior to graduating at Full Sail University which involved a variety of web development, design and photography. I worked closely with the marketing team and one on one with the senior developer helping produce the websites for Buzzworthy Media and The Casket Experience.</p>
                      </div>
                      <div class="bottom-edge"></div>
                      </div>
                  </div>

                  <div class="time-mid">

                  </div>

                  <div class="time-right">
                    <div class="two">
                    <div class="top-edge"></div>
                      <div class="wrap">
                        <div class="square"></div>
                        <h4>TSM Studio | Feb 2017 - Jan 2019</h4>
                        <span>Web Developer | <a href="https://www.tsmstudio.com" target="_blank">www.tsmstudio.com</a></span>
                        <p>Working with clients such as Keith David, Central Florida Behavioral Health Network, Seminole County Tax Collector and Integrative Physical Medicine. My job was to manage and consult with clients for developing custom web solutions unique to each. These solutions included geo-locators, automating/integrating social feeds, and optimizing web assets. I have had the opportuni- ties for developing and designing a variety of websites using mainly Wordpress and Expression Engine. This also involved a focus on logo design, UI design and UX.</p>
                      </div>
                    <div class="bottom-edge"></div>
                    </div>
                    <div class="four">
                    <div class="top-edge"></div>
                      <div class="wrap">
                        <div class="square"></div>
                        <h4>Alabama Pain Physicians | Mar 2015 - Feb 2016</h4>
                        <span>Web Developer | <a href="https://www.bamapain.com" target="_blank">www.bamapain.com</a></span>
                        <p>Producing everything under the sun when it comes to branding and Wordpress development. Providing print ready files like posters, flyers and brochures for general hospital signage and to educate patients on opiate dangers. Having worked closley with the senior designer we also developed and designed the Wordpress website <a href="https://bamapain.com" target="_blank">bamapain.com</a>.</p>
                      </div>
                    <div class="bottom-edge"></div>
                    </div>
                  </div>
                </Timeline>

                </Experience>

                <PortfolioFeed></PortfolioFeed>

                <ContactForm>
                  <div class="anchor" id="contact"></div>
                </ContactForm>

                {/* <BlogFeed></BlogFeed> */}

                <Testimonials></Testimonials>

             </HomeContainer>
      </>
    );
};

export default Home;