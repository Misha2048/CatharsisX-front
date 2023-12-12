import { styled } from "@linaria/react";
import { primaryColor } from "./colors";

const Link = styled.a`
font-size:12px;
&,
&:visited,
&:link,
&:active{
  background:none;
  border:none;
  color:${primaryColor};
  cursor:pointer;
  text-decoration:none;
  transition:color .3s ease;
}
&:hover{
  filter: brightness(.9);
}
`

export default Link;