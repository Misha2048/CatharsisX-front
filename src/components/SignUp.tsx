import React,{useState} from "react";
import Input from './Input';
import Button from "./Button";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { secondaryBlackColor,blackGreyColor } from "./colors";

// In TypeScript it's best practice to create interfaces of objects or classes
// to ease the process of collaboration and code maintenance.
interface SignUpFormState {
    firstname:string;
    lastname:string;
    email:string;
    password:string;
  }

// STYLES
const container = css`
width:100%; 
height:100vh;
display:flex;
align-items:center;
justify-content:center;
background-color:${secondaryBlackColor}
`;
  
const box = css`
padding: 45px 96px 80px;
background-color:${blackGreyColor};
display:flex;
gap:20px;
`;

const Title = styled.h3`
color: #FFF;

font-family: Inter;
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: 19.6px; /* 98% */
text-decoration-line: underline;
text-align:center;
`;

const DisplayTitle = styled.h2`
color: #FFF;
max-width:270px;
font-family: Space Grotesk;
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: 40px;
`;

const Form = styled.form`
display:flex;
gap:14px;
flex-direction:column;
`
const SomeText = styled.span`
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 19.6px; /* 140% */

`
const Link = styled.a`
&:link{
  color:#3ec290;
  text-decoration:none;
}

`

  function SignUp(){
    //Referencing to SignUpFormState interface
    const [formDate,setFormDate] = useState<SignUpFormState>({
      firstname:'',
      lastname:'',
      email:'',
      password:''
    })
  //Getting key/value from input to update formDate
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      const {name,value} = e.target;
      setFormDate(previousData =>({...previousData,[name]:value}));
    }
  // Send formDate to server
    const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) =>{
      e.preventDefault();
      console.log(formDate);
      setFormDate({
        firstname:'',
        lastname:'',
        email:'',
        password:''
      })
    }
  


    return <div className={container}>
      <div className={box}>
        <div>
          <img src="../img/CatharsisX.png" alt="Logo" />
          <DisplayTitle>Join a community of like-minded people.</DisplayTitle>
          <SomeText>Don’t have an accout? <Link href="#">Sign up</Link></SomeText>
        </div>
        <div>
          <Title>Get Started</Title>
        <Form action="POST" onSubmit={handleSubmit}>
        <Input
        label="Firstname"
        name="firstname"
        type="text"
        value={formDate.firstname}
        onChange={handleChange}
        required />
        <Input
        label="Lastname"
        name="lastname"
        type="text"
        value={formDate.lastname}
        onChange={handleChange}
        required />
        <Input
        label="Email"
        name="email"
        type="email"
        value={formDate.email}
        onChange={handleChange}
        required />
        <Input
        label="Password"
        name="password"
        type="password"
        value={formDate.password}
        onChange={handleChange}
        minLength={8}
        required />
        <Button>Button</Button>
      </Form>
        </div>
      
      </div>
    </div>
  }





  export default SignUp;