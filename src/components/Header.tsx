import { styled } from '@linaria/react'
import { useCallback, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Logo from './Logo'
import SearchField from './SearchField'
import Button from './Button'
import BurgerIcon from './BurgerIcon'
import OutlinedButton from './OutlinedButton'
import HeaderLink from './HeaderLink'
import HeaderDropdown from './HeaderDropdown'

const HeaderNavigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;

  @media only screen and (max-width: 1024px) {
    gap: 15px;
  }
  @media only screen and (max-height: 360px) {
    gap: 8px;
  }
`
const HeaderLogoContainer = styled.div`
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  flex: 0 0 140px;
  @media only screen and (max-height: 360px) {
    gap: 5px;
  }
`
const BurgerMenuContainer = styled.div<{ open: boolean }>`
  &[open] {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding-top: 20px;
    width: 200px;
    height: 100svh;
    ${HeaderNavigation} {
      flex-direction: column;
    }
    ${ButtonsContainer} {
      width: 100%;
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 820px) {
    display: none;
  }
  @media only screen and (min-width: 821px) {
    display: ${(props) => (props.open ? 'flex' : 'contents')};
  }
`

const BackgroundContainer = styled.div`
  background-color: #000;
`

const MaxWidthContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`

const HeaderContainer = styled.header<{ open: boolean }>`
  display: flex;
  gap: 10px;
  padding: 30px 63px;
  justify-content: space-between;
  align-items: center;
  background: #000;
  /* overflow-x: hidden; */

  &[open] {
    overflow-y: scroll;
    width: 100%;
    height: 100svh;
    position: fixed;
    left: 0;
    top: 0;
    justify-content: center;
    z-index: 1000;
    & > ${HeaderLogoContainer} {
      display: none;
    }
  }
  @media only screen and (max-width: 1024px) {
    padding: 30px 15px;
  }
`
const HeaderBurger = styled.div<{ open: boolean }>`
  display: none;
  &[open] {
    position: absolute;
    top: 30px;
    right: 15px;
  }
  @media only screen and (max-width: 820px) {
    display: block;
  }
  @media only screen and (min-width: 821px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const redirectToLogin = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    navigate('/login')
  }, [])

  const redirectToSignup = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    navigate('/signup')
  }, [])

  const redirectToHome = useCallback((event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    event.preventDefault()
    navigate('/')
  }, [])

  return (
    <>
      <BackgroundContainer>
        <MaxWidthContainer>
          <HeaderContainer open={isOpen}>
            <HeaderLogoContainer onClick={redirectToHome}>
              <Logo></Logo>
            </HeaderLogoContainer>
            <BurgerMenuContainer open={isOpen}>
              <SearchField></SearchField>
              <HeaderNavigation>
                <HeaderLink onClick={() => navigate('/forum')}>Forum</HeaderLink>
                <HeaderLink onClick={() => navigate('/library')}>Library</HeaderLink>
                <HeaderDropdown setBurgerIsOpen={setIsOpen}>My Materials</HeaderDropdown>
                <HeaderLink onClick={() => navigate('/purchases')}>Purchases</HeaderLink>
                <HeaderLink onClick={() => navigate('/price')}>Price</HeaderLink>
                <HeaderLink onClick={() => navigate('/chat')}>Chat</HeaderLink>
              </HeaderNavigation>
              {sessionStorage.getItem('accessToken') && (
                <ButtonsContainer>
                  <Button onClick={redirectToLogin}>Log in</Button>
                  <OutlinedButton onClick={redirectToSignup}>Sign up</OutlinedButton>
                </ButtonsContainer>
              )}
            </BurgerMenuContainer>
            <HeaderBurger open={isOpen}>
              <BurgerIcon open={isOpen} setOpen={setIsOpen} />
            </HeaderBurger>
          </HeaderContainer>
        </MaxWidthContainer>
      </BackgroundContainer>
      <Outlet />
    </>
  )
}

export default Header
