import { styled } from "@linaria/react";
import { primaryColor } from "./colors";

const Link = styled.button`
font-size:12px;
&{
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