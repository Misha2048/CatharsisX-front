import { styled } from '@linaria/react'
import { primaryColor } from './colors'
import { Link as RouteLink } from 'react-router-dom'
const Link = styled(RouteLink)`
  font-size: 14px;
  &,
  &:visited,
  &:link,
  &:active {
    background: none;
    border: none;
    color: ${primaryColor};
    cursor: pointer;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  &:hover {
    filter: brightness(0.9);
  }
`

export default Link
