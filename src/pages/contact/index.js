import React, { Component } from 'react';
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";

// Components
import ContactForm from "../../components/contact-form";

// Images
import ContactBg from "../../assets/images/bgs/dark-cabin-contact-bg.jpg";
import Dust4 from "../../assets/images/bgs/screen-dust-4.png";
import Grid from "../../assets/images/bgs/grid.png";

const ContactPage = styled.div`
  width:100%;
  margin: 2rem auto;
  padding: 10rem 0;
  background-size:100%;
  background-position:bottom center;
  @media(max-width:892px){
    padding: 1rem 0;
    background-size: cover;
    p{
      margin-left:0;
    }
    form.ui-form{
      padding:1rem !important;
    }
    .ui-form{
      flex-direction:column;
      padding:1rem 0.5rem;
    }
    .required.field {
      width: 100%;
      margin:0.5rem 0;
  }
}
`;

// const show = this.style.opacity = "1";

const Contact = () => {
  const [currentCategory, setCurrentCategory] = useState("App Development");
  const [isShown, ContentShown] = useState(false);

  return(
    <ContactPage style={{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 53%, rgba(16,15,15,1) 100%), linear-gradient(0deg, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 53%, rgba(16,15,15,1) 100%), url(${ContactBg}), url(${Dust4}), url(${Grid}), radial-gradient(circle, rgba(255, 255, 255, 0.35) 8%, rgba(214, 214, 214, 0) 100%)`}}>
      <ContactForm></ContactForm>
    </ContactPage>
  );

};
  
export default Contact;
