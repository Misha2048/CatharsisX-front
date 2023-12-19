import { styled } from "@linaria/react"

interface FormProps {
    gap?:number;
}

const Form = styled.form<FormProps>`
display:flex;
gap:14px;
flex-direction:column;
justify-content:space-around;
gap:${props=>props.gap || 20 }px;

@media only screen and (max-height: 450px) and (orientation:landscape){    
    gap 10px;
   }

`
export default Form;