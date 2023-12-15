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
import { useLocation } from "react-router-dom";


const ResetPasswordFormStyle = css `
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:40px
    max-width:300px;
    `;


const ResetPasswordForm: React.FC = () =>{
    const {pathname} = useLocation();
    const id = pathname.substring('/password-reset/'.length);


    const [formDate,setFormDate] = useState<{newPassword:string, confimedPassword:string}>({
      newPassword:'',
      confimedPassword:'',
    })

    //Getting key/value from input to update formDate
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const {name,value} = e.target;
      setFormDate(previousData =>({...previousData,[name]:value}));
    }
  
  // Send formDate to server
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{  
        e.preventDefault(); 

        if(arePasswordsMatching(formDate.newPassword,formDate.confimedPassword)){
            api.auth.newPassword({
                id:id,
                password:formDate.newPassword
            })
            setFormDate({
              newPassword:"",
              confimedPassword:""
            });
        }
    } 
    return <CenteredContainer>
      <GreyContainerBox>
    
    <div className={ResetPasswordFormStyle}>
      <Title>Set new password</Title>
        <Form action="POST" gap={17} onSubmit={handleSubmit}>
        <SecondaryText opacity={0.5}>Must be at least 8 characters.</SecondaryText>
        <Input
        label="Password"
        name="newPassword"
        type="password"
        value={formDate.newPassword}
        onChange={handleChange}
        required />
            <Input
        label="Confirmed password"
        name="confimedPassword"
        type="password"
        value={formDate.confimedPassword}
        onChange={handleChange}
        required />
        <Button>Reset password</Button>
      </Form>
    </div>  
      </GreyContainerBox>
      
    </CenteredContainer>
  }
  
function arePasswordsMatching(newPassword: string, confirmPassword: string): boolean {
    const trimmedNewPassword = newPassword.trim();
    const trimmedConfirmPassword = confirmPassword.trim();
  
    return trimmedNewPassword === trimmedConfirmPassword;
} 

export default ResetPasswordForm;