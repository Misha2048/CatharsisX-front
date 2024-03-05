import { styled } from '@linaria/react'
import { useCallback, useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import Logo from '@components/Logo'
import Button from '@components/Button'
import BurgerIcon from '@components/BurgerIcon'
import OutlinedButton from '@components/OutlinedButton'
import HeaderLink from '@components/HeaderLink'
import DropdownMenu from '@components/DropdownMenu'
import { checkUserIsLoggedIn } from '@helpers/userHelper'

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
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 15px;
    padding-top: 20px;
    width: 200px;
    max-height: 100vh;
    ${HeaderNavigation} {
      height: 65%;
      flex-direction: column;
      justify-content: space-between;
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
  position: relative;
  z-index: 100;
  box-shadow: 0px 0px 10px 3px #3ec290;
`

const MaxWidthContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;
`

const HeaderContainer = styled.header<{ open: boolean }>`
  display: flex;
  gap: 10px;
  min-height: 100px;
  padding: 26px 63px;
  justify-content: space-between;
  align-items: center;
  background: #000;

  &[open] {
    overflow-y: scroll;
    width: 100%;
    height: 100svh;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    justify-content: center;
    & > ${HeaderLogoContainer} {
      display: none;
    }
  }
  @media only screen and (max-width: 1024px) {
    padding: 26px 15px;
  }
  @media only screen and (max-width: 820px) {
    min-height: 80px;
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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    checkUserIsLoggedIn(setIsUserLoggedIn)
  }, [])

  const handleRedirect = useCallback(
    (path: string, event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault()
      setIsOpen(false)
      setIsDropdownOpen(false)
      navigate(path)
      document.body.classList.remove('_lock')
    },
    [navigate],
  )

  return (
    <>
      <BackgroundContainer>
        <MaxWidthContainer>
          <HeaderContainer open={isOpen}>
            <HeaderLogoContainer onClick={(event) => handleRedirect('/', event)}>
              <Logo></Logo>
            </HeaderLogoContainer>
            <BurgerMenuContainer open={isOpen}>
              {/* TODO delete or show SearchField later */}
              {/* <SearchField /> */}
              <HeaderNavigation>
                <HeaderLink onClick={(event) => handleRedirect('/forum', event)}>Forum</HeaderLink>
                <HeaderLink onClick={(event) => handleRedirect('/library', event)}>
                  Library
                </HeaderLink>
                <DropdownMenu
                  isDropdownOpen={isDropdownOpen}
                  setIsDropdownOpen={setIsDropdownOpen}
                  setBurgerIsOpen={setIsOpen}
                >
                  My Materials
                </DropdownMenu>
                {/* TODO change it later */}
                {/* <HeaderLink onClick={(event) => handleRedirect('/purchases', event)}>
                  Purchases
                </HeaderLink>
                <HeaderLink onClick={(event) => handleRedirect('/price', event)}>Price</HeaderLink> */}
                <HeaderLink onClick={(event) => handleRedirect('/chat', event)}>Chat</HeaderLink>
              </HeaderNavigation>
              {!isUserLoggedIn && (
                <ButtonsContainer>
                  <Button onClick={(event) => handleRedirect('/login', event)}>Log in</Button>
                  <OutlinedButton onClick={(event) => handleRedirect('/signup', event)}>
                    Sign up
                  </OutlinedButton>
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
