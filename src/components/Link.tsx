import { styled } from "@linaria/react";
import { primaryColor } from "./colors";
import { Link as RouteLink } from "react-router-dom";
const Link = styled(RouteLink)`
font-size:14px;
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