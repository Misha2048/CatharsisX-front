import React,{Dispatch, MouseEventHandler, SetStateAction, useState} from "react";
import Input from './Input';
import Button from "./Button";
import { styled } from "@linaria/react";
import { css } from "@linaria/core";
import { secondaryBlackColor,blackGreyColor } from "./colors";
import logo from "../img/CatharsisX.svg";
import {Title,DisplayTitle} from "./Titles";

// In TypeScript it's best practice to create interfaces of objects or classes
// to ease the process of collaboration and code maintenance.
interface SignUpFormState {
    firstname:string;
    lastname:string;
    email:string;
    password:string;
  }
interface LogInFormState {
    email:string;
    password:string;
  }
type ToggleProps = {
  handleToggle: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
///////////////
// STYLES
///////////////
const container = css`
width:100%; 
height:100vh;
display:flex;
align-items:center;
justify-content:center;
background-color:${secondaryBlackColor}
`;
  
const box = css`
position:relative;
padding: 45px 96px 80px;
background-color:${blackGreyColor};
display:flex;
gap:20px;

@media only screen and (max-width: 768px){
  background-color:${secondaryBlackColor};
  padding: 40px 48px 40px;
}
@media only screen and (max-width: 450px){
  flex-direction:column;
  padding-bottom: 70px;
}
`;

const Form = styled.form`
display:flex;
gap:14px;
flex-direction:column;
justify-content:space-around;
`
const SomeText = styled.span`
color: #FFF;
font-size: 14px;
font-style: normal;
font-weight: 300;
line-height: 19.6px; /* 140% */

`
const Link = styled.button`
font-size:12px;
&{
  background:none;
  border:none;
  color:#3ec290;
  cursor:pointer;
  text-decoration:none;
  transition:color .3s ease;
}
&:hover{
  filter: brightness(.9);
}

`
const Additional = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;

  @media only screen and (max-width: 768px){
    & > h1{
      font-size:34px
    }
    & > span{
      font-size:12px
    }
  }


  @media only screen and (max-width: 450px){
    
    & > h1{
      display: none;
    }
    & > img{
      align-self:center;
    }
    & > span{
      position:absolute;
      bottom:0px;
      align-self:center;
    }
  }

  
`
const Main = styled.div`
  display:flex;
  flex-direction:column;
  gap:20px;

`
const Logo = css`
max-width:120px;
`





///////////////
// Registration form
///////////////
const RegistrationForm: React.FC =()=>{
  const [isToggled,setIsToggled] = useState(false);

  const handleToggle = (event: React.MouseEvent<HTMLAnchorElement>) =>{
    event.preventDefault();
    setIsToggled(!isToggled);
  }

  return (
    <div>
    {isToggled ? (
      <SignUp handleToggle={handleToggle} />
    ) : (
      <LogIn handleToggle={handleToggle} />
    )}
  </div>
  );

}

///////////////
// Sign up
///////////////
  function SignUp({handleToggle}:any){
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
        <Additional>
          <img src={logo} alt="Logo"className={Logo} />
          <DisplayTitle>Join a community of like-minded people.</DisplayTitle>
          <SomeText>Don’t have an accout? <Link onClick={handleToggle}>Log in</Link></SomeText>
        </Additional>
        <Main>
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
        <Button>Sign up</Button>
      </Form>
        </Main>     
      </div>
    </div>
  }


///////////////
// Log In
///////////////

function LogIn({handleToggle}:any){
  //Referencing to SignUpFormState interface
  const [formDate,setFormDate] = useState<LogInFormState>({
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
      email:'',
      password:''
    })
  }


  return <div className={container}>
    <div className={box}>
      <Additional>
        <img src={logo} alt="Logo"className={Logo} />
        <DisplayTitle>Join a community of like-minded people.</DisplayTitle>
        <SomeText>Don’t have an accout? <Link onClick={handleToggle}>Sign up</Link></SomeText>
      </Additional>
      <Main>
        <Title>Log in</Title>
      <Form action="POST" onSubmit={handleSubmit}>
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
      <Link >Forgot your password?</Link>
      <Button>Log in</Button>
    </Form>
      </Main>     
    </div>
  </div>
}




  export default RegistrationForm;