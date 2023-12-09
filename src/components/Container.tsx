import { styled } from "@linaria/react";
import { secondaryBlackColor } from "./colors";

const Container = styled.div`
width:100%; 
height:100vh;
display:flex;
align-items:center;
justify-content:center;
background-color:${secondaryBlackColor}
`;

export default Container;