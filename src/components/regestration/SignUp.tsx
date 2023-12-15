import React,{useState} from "react";
import Input from '../Input';
import Button from "../Button";
import CenteredContainer from "../CenteredContainer";
import GreyContainerBox from "../GreyContainerBox";
import Link from "../Link";
import SecondaryText from "../SecondaryText";
import MainRegistryContent from "./MainRegistryContent";
import Form from "../Form";
import {Title,DisplayTitle} from "../Titles";
import AdditionalRegistryContent from "./AdditionalRegistryContent";
import Logo from "../Logo";
import { api } from "../../api";
import { ISignUpRequest } from "../../api/intefaces";
import ToolTip from "../ToolTip";


// interface SignUpFormState {
//     firstname:string;
//     lastname:string;
//     email:string;
//     password:string;
//   }

function SignUp(){
    //Referencing to SignUpFormState interface
    const [formDate,setFormDate] = useState<ISignUpRequest>({
      first_name:'',
      last_name:'',
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

      api.auth.signUp(formDate)
      .then(data=>console.log(data));

      setFormDate({
        first_name:'',
        last_name:'',
        email:'',
        password:''
      })

 
    }
  
    return <CenteredContainer>
      <GreyContainerBox>
        <AdditionalRegistryContent>
          <Logo/>
          <DisplayTitle>Join a community of like-minded people.</DisplayTitle>
          <SecondaryText>Already have an account? <Link href="/login">Log in</Link></SecondaryText>
        </AdditionalRegistryContent>
        <MainRegistryContent>
          <Title>Get Started</Title>
        <Form action="POST" onSubmit={handleSubmit}>
        <Input
        label="Firstname"
        name="first_name"
        type="text"
        value={formDate.first_name}
        onChange={handleChange}
        required />
        <Input
        label="Lastname"
        name="last_name"
        type="text"
        value={formDate.last_name}
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
        </MainRegistryContent>     
      </GreyContainerBox>
      <ToolTip />
    </CenteredContainer>
  }

export default SignUp;