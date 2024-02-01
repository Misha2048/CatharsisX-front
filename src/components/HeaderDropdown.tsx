import { styled } from '@linaria/react'
import { PropsWithChildren, useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import arrowDown from '@assets/arrow-down.svg'
import HeaderLink from '@components/HeaderLink'

interface DropdownProps extends PropsWithChildren {
  setBurgerIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface Props {
  isDropdownOpen: boolean
}

const StyledDropdown = styled(HeaderLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    text-decoration: none;
  }
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const ArrowDown = styled.img<Props>`
  display: block;
  width: 14px;
  height: 14px;
  transition: transform 0.3s ease 0s;
  transform: ${(props) => (props.isDropdownOpen ? 'rotate(180deg)' : 'none')};
`

const DropdownBody = styled.ul<Props>`
  background-color: #333;
  margin-top: ${(props) => (props.isDropdownOpen ? '10px' : '0px')};
  border-radius: 5px;
  height: ${(props) => (props.isDropdownOpen ? '89px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;

  li:last-child {
    border: none;
  }

  @media only screen and (min-width: 821px) {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 150px;
    margin-top: 10px;
  }
`

const DropdownLinkContainer = styled.li`
  padding: 15px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  line-height: 1;

  @media only screen and (min-width: 821px) {
    text-align: left;
  }
`

const DropdownLink = styled(Link)`
  color: #fff;
  background-color: transparent;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;

  &:hover {
    text-decoration: underline;
  }
`

function HeaderDropdown({ children, setBurgerIsOpen }: DropdownProps) {
  const navigate = useNavigate()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault()
      setIsDropdownOpen(!isDropdownOpen)
    },
    [isDropdownOpen],
  )

  const navigateTo = useCallback(
    (path: string, event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault()
      setIsDropdownOpen(false)
      setBurgerIsOpen(false)
      navigate(path)
    },
    [],
  )

  const navigateToStillages = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      navigateTo('/stillages', event)
    },
    [],
  )

  const navigateToLikedStillages = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      navigateTo('/stillages/liked', event)
    },
    [],
  )

  return (
    <StyledDropdown>
      <FlexContainer onClick={toggleDropdown}>
        <span>{children}</span>
        <ArrowDown src={arrowDown} alt='show dropdown menu' isDropdownOpen={isDropdownOpen} />
      </FlexContainer>
      <DropdownBody isDropdownOpen={isDropdownOpen}>
        <DropdownLinkContainer>
          <DropdownLink to='/stillages' onClick={navigateToStillages}>
            My Stillages
          </DropdownLink>
        </DropdownLinkContainer>
        <DropdownLinkContainer>
          <DropdownLink to='/stillages/liked' onClick={navigateToLikedStillages}>
            Favourite Stillages
          </DropdownLink>
        </DropdownLinkContainer>
      </DropdownBody>
    </StyledDropdown>
  )
}

export default HeaderDropdown
