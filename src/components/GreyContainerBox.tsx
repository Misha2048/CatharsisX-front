import { styled } from "@linaria/react";
import { blackGreyColor } from "./colors";
import { secondaryBlackColor } from "./colors";

const GreyContainerBox = styled.div`
position:relative;
min-height:450px;
width:720px;
padding: 45px 96px 80px;
background-color:${blackGreyColor};
display:flex;
justify-content:center;
overflow-x:hidden;
gap:20px;

@media only screen and (max-width: 940px){
  min-height:auto;
  background-color:${secondaryBlackColor};
  padding: 40px 48px 40px;
}

@media only screen and (max-width: 680px) and (orientation: portrait) {
  flex-direction: column;
  align-items:center;
  width: 350px;
  scroll:none;
}

@media only screen and (max-height: 450px) and (orientation:landscape){
  background-color:${secondaryBlackColor};    
  flex-direction:column;
  align-items:center;
  padding: 20px 0px 30px
}

@media only screen and (max-width: 450px) and (orientation:portrait) {
  flex-direction:column;
  padding-bottom: 70px;
  padding: 40px 0px 40px;
}
`;

export default GreyContainerBox;