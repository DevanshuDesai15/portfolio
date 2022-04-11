import React from 'react';
import styled from 'styled-components';

const ContactMain = styled.div`
  background-color: black;
  height: 130vh;
`;

const ContactHead = styled.div`
  padding-top: 40px;
`;

const ABOUT = styled.div`
  width: 250px;
  border: 5px solid transparent;
  border-image: linear-gradient(to right, #F1743E, #2E0899, #7336DF);
  border-image-slice: 1;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: 'Montserrat';
  letter-spacing: 10px;
  color: white;
  font-size: 25px;
  padding: 10px;
`;

const ContactPara = styled.p`
  color: white;
  text-align: center;
  font-family: OpenSans;
  margin-top: 40px;
`;
const CForm = styled.form`
  border-radius: 10px;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: 'Montserrat';
  margin-top: 1px;
  letter-spacing: 3px;
  display: block;
`;
const CFormControl = styled.div`
  display: block;
`;
const CInput = styled.input`
  outline: none;
  font-family: 'Montserrat';
  letter-spacing: 5px;
  border-left: 4px solid #fff;
  border-bottom: 4px solid #fff;
  border-top: none;
  border-right: none;
  margin-top: 50px;
  width: 30%;
  padding: 8px;
  background-color:rgba(0, 0, 0, 0);
  color: white;
`;
const CInputMess = styled.textarea`
  outline: none;
  height: 80px;
  font-family: 'Montserrat';
  letter-spacing: 5px;
  border-left: 4px solid #fff;
  border-bottom: 4px solid #fff;
  border-top: none;
  border-right: none;
  margin-top: 50px;
  width: 30%;
  background-color:rgba(0, 0, 0, 0);
  color: white;
`;
const CButton = styled.button`
  font-family: 'Montserrat';
  letter-spacing: 1px;
  width: 120px;
  height: 35px;
  color: white;
  margin-top: 30px;
  background-color:rgba(0, 0, 0, 0);
  border-right: 4px solid white;
  border-left: 4px solid white;
  border-top: none;
  border-bottom: none;
`;


const ContactMe = () => {
  return (
    <div id='contact'>
      <ContactMain>
        <ContactHead>
          <ABOUT>CONTACT</ABOUT>
        </ContactHead>
        <ContactPara>
          Let's connect to collaborate on projects and build some beautiful websites, mobile apps. 
          <br/>Happy to connect!!! See you soon...
        </ContactPara>
        <CForm>
          <CFormControl>
            <CInput type='text' placeholder='Enter your Name*'/><br/>
            <CInput type='email' placeholder='Enter your Email*'/><br/>
            <CInput type='number' placeholder='Enter your Phone Number*'/><br/>
            <CInputMess type='' placeholder='Your Message*'/>
          </CFormControl>
          <CButton>SUBMIT</CButton>
        </CForm>
      </ContactMain>
    </div>
  )
}

export default ContactMe