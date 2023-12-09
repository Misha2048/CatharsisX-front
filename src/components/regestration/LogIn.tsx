import React,{useState} from "react";
import Form from "../Form";
import Input from '../Input';
import Button from "../Button";
import Box from "../Box";
import Container from "../Container";
import Link from "../Link";
import Logo from "../Logo";
import MainRegistryContent from "./MainRegistryContent";
import SecondaryText from "../SecondaryText";
import {Title,DisplayTitle} from "../Titles";
import AdditionalRegistryContent from "./AdditionalRegistryContent";

interface LogInFormState {
    email:string;
    password:string;
  }

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
  
  
    return <Container>
      <Box>
        <AdditionalRegistryContent>
         <Logo/>
          <DisplayTitle>Join a community of like-minded people.</DisplayTitle>
          <SecondaryText>Don’t have an accout? <Link onClick={handleToggle}>Sign up</Link></SecondaryText>
        </AdditionalRegistryContent>
        <MainRegistryContent>
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
        </MainRegistryContent>     
      </Box>
    </Container>
  }
  
  
export default LogIn;