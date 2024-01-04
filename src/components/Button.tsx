import React from "react";
import {greyColor,primaryColor,whiteColor} from './colors'
import { styled } from "@linaria/react";

//////////////////////
// BUTTON 
//////////////////////
interface ButtonProps{
    children:React.ReactNode;
    onClick?:(event:React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button`
background-color: ${primaryColor};
color: ${whiteColor};
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: 140%;
width:100%;
padding:11px 0;
border: none;
border-radius: 8px;
cursor: pointer;
transition: all 0.2s ease-in-out;
&.disabled{
  background-color:${greyColor};
}
:hover {
  opacity:0.9;
}
// @media only screen and (max-height: 450px) and (orientation:landscape){    
//   font-size:14px;
//   line-height:1;
// }
`;

const Button: React.FC<ButtonProps> = ({children,onClick}) => {
  return(
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
  ) 
    
};

export default Button;