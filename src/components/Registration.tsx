import React,{useState} from "react";
import SignUp from "./regestration/SignUp";
import LogIn from "./regestration/LogIn";



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

  export default RegistrationForm;