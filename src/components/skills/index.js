import React, { useState } from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

// Objects
import ThemeOptions from "../../ThemeOptions.json";

const Skills = styled.div `
  margin:6rem auto;
  width:100%;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-wrap: wrap;
  .top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1{
      z-index: 22222;
      position: relative;
      z-index: 22222;
      position: relative;
      text-shadow: 0 0 10px #87c76326, 0 0 25px #87c76326, 0 0 35px #87c76326, 0 0 45px #87c76326, 0 0 55px #87c76326, 0 0 65px #87c76326, 0 0 75px #87c76326;
    }
    a{
      width:20%;
    }
  }
  .resume {
    display: flex;
    justify-content: space-between;
    width: 100%;
    .hob {
      display: flex !important;
      flex-direction: row !important;
      width: 48%;
      div:last-child {
        margin-left: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
      img {
        width: 15%; 
      }
  }
    .col {
      width: 49%;
      div{
        display: flex;
        flex-direction: column;
      }
      span {
        margin: 0.5rem 1rem;
      }
    .buttons {
      flex-direction: row !important;
      justify-content: space-between;
    }
    .sec span {
      margin: 0.2rem 1rem!important;
    }
    .camera-ico{
      width: 2.9rem;
    }
  }
    h3 {
      border-top: 2px solid #86bf55;
      background-color: #3c512eb0;
      padding: 1.2rem 1rem;
      border-bottom: 2px solid #86bf55;
  }
  #language, #experience {
    max-height: 18rem;
    height: 18rem;
  }
  #software, #awards {
    height: 26rem;
  }
  #framework{
  }
  #hobbies{
    .sec{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .buttons {
    display:flex;
    flex-wrap:wrap;
    margin-top: 33%;
    a{
      margin:1rem 0;
      width:42% !important;
     }
  }
}
`;

const Button = styled(Link) `
    display: flex;
    justify-content: center;
    width:20%;
    align-items: center;
    padding: 0.6rem 1.2rem;
    border: 2px solid #76c248;
    margin:0;
    -webkit-box-shadow: 0px -4px 3px #86bf5540;
    -moz-box-shadow: 0px -4px 3px #86bf5540;
    box-shadow: 0px -4px 3px #86bf5540;
    font-family: 'Classic Console';
    -webkit-text-decoration: none;
    text-decoration: none;
    text-transform: uppercase;
    font-size: clamp(1rem, 4vw, 1.2rem);
    padding: 1rem 1.2rem;
    border: 3px solid #92ec50;
    border-radius: 3px;
    color:rgb(243, 233, 213);
    margin-top:1rem;
  :hover{
    cursor: pointer;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
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
`;

const SkillsSection = () => {

const location = useLocation();
  
  return (

        <Skills>

        <div class="top">

        <h1>Skills</h1>
        <Button to="/portfolio"><div class="sq"></div>Download Resume</Button>
        
        </div>

        <div class="resume">

        <div class="col">
        <div id="language">
            <h3>Language Focus</h3>
            <span>Javascript</span>
            <span>HTML & CSS</span>
            <span>JSON</span>
            <span>PHP</span>
            <span>SQL</span>
        </div>
        <div id="software">
            <h3>Software - Tools</h3>
            <span>Amazong Web Services - EC2, Cloudfront, S3, Elastic Beanstalk, Route 53</span>
            <span>Postman</span>
            <span>Docker</span>
            <span>Visual Studio Code</span>
            <span>Github & Version Control</span>
            <span>Illustrator, Photoshop, InDesign, XD, Sketch</span>
            <span>Google Analytics, Console, Tag Manager</span>
            <span>Progressive Web Apps</span>

        </div>
        <div id="framework">
            <h3>Frameworks - Libraries - Environments</h3>
            <span>React</span>
            <span>Material UI</span>
            <span>Redux</span>
            <span>Node.js</span>
            <span>Wordpress</span>
        </div>
        <div id="additional">
            <h3>Additional Skills</h3>
            <span>Object Oreiented Programming</span>
            <span>API Integrations</span>
            <span>Documentation</span>
            <span>Technical Analysis</span>
            <span>Site Maps, Wiresframes, User Flows</span>
            <span>Web Accessibility (WCAG)</span>
            <span>Quality Assurance</span>
            <span>Fluid Type</span>
        </div>
        </div>

        <div class="col">
        <div id="experience">
            <h3>Academic Experience</h3>
            <div class="sec">
            <span>Full Sail University | 2013 - 2015</span>
            <span>Winter Park, FL | <a href="https://www.fullsail.edu" target="_blank">www.fullsail.edu</a></span>
            <span>Digital Arts & Design Bachelor of Science</span>
            </div>
            <br></br>
            <div class="sec">
            <span>Adobe | August 2013 - August 2014</span>
            <span>Student Representative | <a href="https://www.adobestudents.com" target="_blank">www.adobestudents.com</a></span>
            </div>
        </div>
        <div id="awards">
            <h3>Awards - Certificates</h3>
            <div class="sec">
            <span>Full Sail Extended Studies | November 7th 2014</span>
            <span>In the Media Arts at Mojo Brands Media</span>
            </div>
            <br></br>
            <div class="sec">
            <span>Javascript Algorithms and Data Structures Certification</span>
            <span>www.freecodecamp.com | 300 hours</span>
            </div>
            <br></br>
            <div class="sec">
            <span>Hubspot Inbound Marketing Certified | November 2018</span>
            <span>Hubspot’s free emailing marketing course.</span>
            </div>
        </div>
        <div id="hobbies">
            <h3>Hobbies</h3>
            <div class="sec">

            <div class="hob">
                <div><i class="ico skateboard-ico"></i></div>
                <div><p>Skateboarding</p></div>
            </div>

            <div class="hob">
                <div><i class="ico camera-ico"></i></div>
                <div><p>Photography / Film</p></div>
            </div>

            <div class="hob">
                <div><i class="ico house-ico"></i></div>
                <div><p>Exploring</p></div>
            </div>

            <div class="hob">
                <div><i class="ico typography-ico"></i></div>
                <div><p>Typography</p></div>
            </div>
            </div>
        </div>
        <div class="buttons">
            <Button style={{width:"47%"}} to={`//s3.us-east-2.amazonaws.com/bakerbrent.com/assets/brent-baker-dev-ui-ux-9-23-20.pdf`} target="_blank"><div class="sq"></div>Download Resume</Button>
            <Button style={{width:"47%"}} to="/portfolio"><div class="sq"></div>View Work</Button>
        </div>
        </div>

        </div>

    </Skills>

  );
};

export default SkillsSection;