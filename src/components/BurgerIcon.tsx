import { styled } from '@linaria/react'
import { useCallback } from 'react'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Burger = styled.div<{ open: boolean }>`
  position: relative;
  display: none;
  width: 30px;
  height: 3px;
  border-radius: 2px;
  cursor: pointer;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 1);
  transition: all 0.2s ease-in-out;

  &::before,
  &::after {
    content: '';
    opacity: 1;
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
  }

  &::after {
    top: 10px;
    left: 0;
  }

  &::before {
    top: -10px;
    left: 0;
  }

  &[open] {
    background-color: rgba(255, 255, 255, 0);

    &::after {
      transform: translateY(-10px) rotate(-45deg);
    }

    &::before {
      transform: translateY(10px) rotate(45deg);
    }
  }

  @media only screen and (max-width: 820px) {
    display: block;
  }
  @media only screen and (min-width: 821px) {
    display: ${(props) => (props.open ? 'block' : 'none')};
  }
`
function BurgerIcon({ open, setOpen }: Props) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      event.preventDefault()
      const body = document.querySelector('body') as HTMLBodyElement
      body.classList.toggle('_lock')
      setOpen(!open)
    },
    [open],
  )

  return <Burger onClick={handleClick} open={open} />
}

export default BurgerIcon
