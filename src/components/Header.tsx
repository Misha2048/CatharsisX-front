import { styled } from '@linaria/react'
import React, { useState } from 'react'
import Logo from './Logo'
import SearchField from './SearchField'
import Button from './Button'
import BurgerIcon from './BurgerIcon'
import OutlinedButton from './OutlinedButton'

const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;

  @media only screen and (max-width: 1024px) {
    gap: 15px;
  }
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
const BurgerMenuContainer = styled.div<{ open: boolean }>`
  display: contents;

  &[open] {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 200px;
    height: 100vh;
    ${HeaderNavigation} {
      flex-direction: column;
    }
    ${ButtonsContainer} {
      width: 100%;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`

const HeaderContainer = styled.header<{ open: boolean }>`
  display: flex;
  gap: 10px;
  padding: 30px 63px;
  justify-content: space-between;
  align-items: center;
  background: #000;
  overflow-x: hidden;

  &[open] {
    width: 100%;
    position: fixed;
    justify-content: center;

    & > img {
      display: none;
    }
  }

  @media only screen and (max-width: 1024px) {
    padding: 30px 15px;
  }
`
const HeaderBurger = styled.div<{open:boolean}>`
  display:none;
  &[open]{
    position: absolute;
    top: 30px;
    right: 30px;
  }
  @media only screen and (max-width: 768px) {
    display: block;
  }
`

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <HeaderContainer open={isOpen}>
      <Logo></Logo>
      <BurgerMenuContainer open={isOpen}>
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
          <OutlinedButton>Sign up</OutlinedButton>
        </ButtonsContainer>
      </BurgerMenuContainer>
      <HeaderBurger open={isOpen}>
        <BurgerIcon open={isOpen} onClick={setIsOpen} />
      </HeaderBurger>
    </HeaderContainer>
  )
}

export default Header
