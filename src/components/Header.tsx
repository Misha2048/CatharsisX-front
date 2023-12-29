import { styled } from '@linaria/react'
import React from 'react'
import Logo from './Logo'
import SearchField from './SearchField'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button'

const HeaderContainer = styled.header`
  display: flex;
  gap: 10px;
  padding: 30px 63px;
  justify-content: space-between;
  align-items: center;
  background: #000;
  overflow-x: hidden;

  @media only screen and (max-width: 1024px) {
    padding: 30px 15px;
  }
  @media only screen and (max-width: 768px) {
  }
  @media only screen and (max-width: 320px) {
  }
`

const HeaderNavigation = styled.nav`
display: flex;
justify-content: center;
align-items: center;
gap: 35px;

@media only screen and (max-width: 1024px){
    gap:15px;
}
@media only screen and (max-width: 1024px){

}
@media only screen and (max-width: 768px){

}
@media only screen and (max-width: 320px){

`
const HeaderLink = styled.button`
  color: #fff;
  font-family: Inter;
  background: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.6px; /* 140% */
  transition: all 0.3s ease;
  text-transform: capitalized;
  white-space: nowrap;
  &:hover {
    text-decoration: underline;
  }
`
const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex: 0 0 140px;
`
function Header() {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <Logo></Logo>
      <SearchField></SearchField>
      <HeaderNavigation>
        <HeaderLink>Forum</HeaderLink>
        <HeaderLink>Library</HeaderLink>
        <HeaderLink>My Materials</HeaderLink>
        <HeaderLink>Purchases</HeaderLink>
        <HeaderLink>Price</HeaderLink>
        <HeaderLink>Chat</HeaderLink>
      </HeaderNavigation>
      <ButtonsContainer>
        <Button>Log in</Button>
        <Button>Sign up</Button>
      </ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header
