import React from 'react'
import { styled } from '@linaria/react'

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

  @media only screen and (max-width: 768px) {
    display: block;
  }
`
function BurgerIcon({ open, onClick }: any) {
  return <Burger onClick={() => onClick(!open)} open={open} />
}

export default BurgerIcon
