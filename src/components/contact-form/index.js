import React, { useState } from "react";
import styled from "@emotion/styled";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

// Images
import ContactBg from "../../assets/images/bgs/dark-cabin-contact-bg.jpg";

const ContactContainer = styled.div`
    width: 89%;
    margin: 4rem auto;
    display: flex;
    flex-wrap:wrap;
    p {
      margin: 0;
      margin-left: 0.8rem;
  }
    h1{
      margin:1rem 0;
      z-index: 2222;
      position: relative;
      text-shadow: 0 0 10px #87c76326, 0 0 25px #87c76326, 0 0 35px #87c76326, 0 0 45px #87c76326, 0 0 55px #87c76326, 0 0 65px #87c76326, 0 0 75px #87c76326;
    }
    .top{
      width:100%;
      margin-bottom:3rem;
    }
    form.ui.form {
      width: 100%;
      padding: 2rem;
      display: flex;
      flex-wrap: wrap;
      background-color:#3c512e94;
      -webkit-box-shadow: 0px -4px 3px #86bf5540;
      -moz-box-shadow: 0px -4px 3px #86bf5540;
      box-shadow: 0px -4px 3px #86bf5540;
      border-top:1px solid #92ec50;
      border-bottom:1px solid #92ec50;
      label{
        display:none;
      }
      input {
        height: 3rem;
        width: 90%;
        background: #2c3729;
        -moz-box-shadow: inset 0 0 10px #000000;
        -webkit-box-shadow: inset 0 0 10px #000000;
        box-shadow: inset 0 0 30px #8cd35f94;
        border: 2px solid #76c248;
        padding: 0.2rem 1rem;
        color: #8bef4a;
        background: transparent;
        font-size: 1rem;
      }
      input:focus{
        outline: 1px solid #8bef4a;
        -webkit-box-shadow: 0px -4px 10px #b6cba994;
        -moz-box-shadow: 0px -4px 10px #b6cba994;
        box-shadow: 0px -4px 10px #b6cba994;
      }
      textarea::placeholder, input::placeholder { 
        color: #8bef4a;
        opacity: 1; /* Firefox */
      }
      
      textarea:-ms-input-placeholder, input:-ms-input-placeholder {
        color: #8bef4a;
      }
      
      textarea::-ms-input-placeholder, input::-ms-input-placeholder {
        color: #8bef4a;
      }
    }
  .required.field {
    width: 50%;
    margin: 1rem 0;
  }
  .required.field:nth-child(5) {
    width: 100% !important;
  }
  textarea#form-textarea-control-opinion {
    width: 95%;
    height: 10rem;
    padding: 1rem;
    font-size:1rem;
    background:transparent;
    -moz-box-shadow: inset 0 0 10px #000000;
    -webkit-box-shadow: inset 0 0 10px #000000;
    box-shadow: inset 0 0 30px #8cd35f94;
    border: 2px solid #76c248;
  }
  button{
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
  }
  button:hover{
    cursor: pointer;
    -webkit-transition: 0.2s ease-in-out;
    transition: 0.2s ease-in-out;
    box-shadow: inset 0px 0px 20px #87c763a3, 0 0 10px #87c76361, 0 0 25px #87c7634d, 0 0 35px #87c7634d, 0 0 45px #87c76312, 0 0 55px #87c76312, 0 0 65px #87c76312, 0 0 75px #87c76312;
  }
  @media(max-width:892px){
    .button{
      width:100%;
    }
    .required.field {
      width: 100%;
    }
    .required.field:nth-child(5) {
      width: 100% !important;
    }
  }
`;

const ContactForm = () => {

  const SERVICE_ID = "portfolio";
  const TEMPLATE_ID = "template_xfj672k";
  const USER_ID = "user_soqHQKyS6UfBMEyCgYK8f";

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  
  return (

    <ContactContainer>

    <div class="top">
      <h1>Contact Me</h1>
      <p>Have an idea? a question? or even a concern? Message me below, and I will get back to you shortly.</p>
    </div>

    <div class="top-edge"></div>

      <Form onSubmit={handleOnSubmit}>
      <Form.Field
          id='form-input-control-first-name'
          control={Input}
          label='Name'
          name='first_name'
          placeholder='First Name'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Last  Name'
          name='last_name'
          placeholder='Last Name'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email Address'
          name='user_email'
          placeholder='Email Address'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-phone'
          control={Input}
          label='Phone Number'
          name='phone_number'
          placeholder='Phone Number'
          required
          icon='phone'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message'
          required
        />
        <Button type='submit' color='green' class="button">
          <div class="sq"></div>
          Submit
        </Button>
      </Form>

      <div class="bottom-edge"></div>

    </ContactContainer>

  );
};

export default ContactForm;