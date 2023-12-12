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

@media only screen and (max-width: 768px){
  background-color:${secondaryBlackColor};
  padding: 40px 48px 40px;
}
@media only screen and (max-width: 450px){
  flex-direction:column;
  padding-bottom: 70px;
}
`;

export default GreyContainerBox;