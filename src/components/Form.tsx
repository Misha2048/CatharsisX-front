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
`
export default Form;