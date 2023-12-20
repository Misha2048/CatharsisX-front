import { styled } from "@linaria/react";
import { secondaryBlackColor } from "./colors";

const CenteredContainer = styled.div`
width:100%; 
height:100%;
display:flex;
align-items:center;
justify-content:center;
background-color:${secondaryBlackColor};
overflow-x:hidden;
`;

export default CenteredContainer;