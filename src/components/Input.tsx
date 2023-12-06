import React from "react";
import {whiteColor,blackColor} from './colors'
import { styled } from "@linaria/react";
//////////////////////
// INPUT FIELD
//////////////////////

// Interface to create functional component for input field
interface InputProps{
    onChange:(e: React.ChangeEvent<HTMLInputElement>)=>void;
    label:string;
    value: string;
    name: string;
    type:string;
    required?: boolean;
    maxLength?: number;
    minLength?: number;
  }



const StyledInputField = styled.input`
  position:relative;
  display:block;
  width:calc(100%-10px);
  border: 1px solid ${whiteColor};
  padding:5px 0;
  padding-left:10px;
  border-radius: 5px;
  transition: border-color 0.3s ease-out;   
  `;


const Input:React.FC<InputProps> = (
    {
      label,
      name,
      type,
      value,
      onChange,
      required=false,
      maxLength=30,
      minLength=0
    }
    )=>{
return <StyledInputField
      type={type}
      name={name}
      id={name}
      onChange={onChange}
      value={value}
      required={required}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={label}
    />
};
export default Input;