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
gap:20px;

@media only screen and (max-width: 920px){
  min-height:auto;
  background-color:${secondaryBlackColor};
  padding: 40px 48px 40px;
}

@media only screen and (max-width: 680px) and (orientation: portrait) {
  flex-direction: column;
  max-width: 350px;
}

@media only screen and (max-height: 450px) and (orientation:landscape){
  background-color:${secondaryBlackColor};    
  flex-direction:column;
  padding: 20px 150px 30px
}

@media only screen and (max-width: 450px) and (orientation:portrait) {
  flex-direction:column;
  padding-bottom: 70px;
}
`;

export default GreyContainerBox;