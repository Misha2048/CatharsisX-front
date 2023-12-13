import React,{useState} from "react";
import Form from "./Form";
import Input from './Input';
import Button from "./Button";
import GreyContainerBox from "./GreyContainerBox";
import CenteredContainer from "./CenteredContainer";
import SecondaryText from "./SecondaryText";
import {Title} from "./Titles";
import { css } from "@linaria/core";
import { api } from "../api";
import { IForgotPasswordRequest } from "../api/intefaces";

const ForgotPasswordFormStyle = css `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:40px
    max-width:300px;
    `;

    const ForgotPasswordMessage = css `  
    display: block;
    margin:auto;
    `;


const ForgotPasswordForm: React.FC = () =>{
    
    const [isEmailSend,setIsEmailSend] = useState(false);

    const [formDate,setFormDate] = useState<IForgotPasswordRequest>({
      email:'',
    })
  
    //Getting key/value from input to update formDate
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const {name,value} = e.target;
      setFormDate(previousData =>({...previousData,[name]:value}));
    }
  
  // Send formDate to server
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{  
    e.preventDefault(); 
      
      api.auth.forgotPassword(formDate).then(
        data=>{
        console.log(data);
        setIsEmailSend(true);
        setFormDate({
          email:'',
        });
      });
        
      
    }
  
  
    return <CenteredContainer>
      <GreyContainerBox>
    {!isEmailSend?(
    <div className={ForgotPasswordFormStyle}>
      <Title>Forgot your Password?</Title>
        <Form action="POST" gap={17} onSubmit={handleSubmit}>
        <SecondaryText opacity={0.5}>Enter your email address and we’ll send you a link to reset your password</SecondaryText>
        <Input
        label="Email"
        name="email"
        type="email"
        value={formDate.email}
        onChange={handleChange}
        required />
        <Button>Send email</Button>
      </Form>
    </div>):
    (<Title className={ForgotPasswordMessage}>Email was send to you. Please check your email box</Title>)}    
      </GreyContainerBox>
    </CenteredContainer>
  }
  
  
export default ForgotPasswordForm;