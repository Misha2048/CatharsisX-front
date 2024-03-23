import { styled } from '@linaria/react'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'

import arrowIcon from '@assets/arrow-right-icon.svg'
import starTransparent from '@assets/star-transparent.svg'
import starFilled from '@assets/star-filled.svg'
import { api } from '@api/index'
import { setLiked } from '@redux/slices/librarySlice'
import { setHint } from '@redux/slices/hintSlice'
import MuiTooltip from '@components/MuiTooltip'

interface Props {
  id: string
  name: string
  isPrivate: boolean
  liked: boolean | undefined
  color: string
  dispatch: Dispatch<UnknownAction>
}

const StyledLibraryItem = styled.li<{ color: string; isPrivate: boolean }>`
  position: relative;
  background-color: ${(props) => (props.color ? props.color : '#019c56')};
  width: 250px;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &::after {
    position: absolute;
    content: '';
    background-image: url(../../assets/lock-icon.svg);
    background-position: center center;
    background-size: cover;
    width: 24px;
    aspect-ratio: 1;
    top: 24px;
    left: 20px;
    display: ${(props) => (props.isPrivate ? 'block' : 'none')};
  }
`

const StarBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  align-self: flex-end;
  width: 30px;
  height: 30px;
  background-color: transparent;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
  }
  overflow: hidden;
`

const Title = styled.h3`
  min-height: 35px;
  margin-bottom: -3px;
  max-width: 170px;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  word-wrap: break-word;
`

const StyledLink = styled(Link)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 100%;
  }
`

function LibraryItem({ name, id, liked, isPrivate, color, dispatch }: Props) {
  const handleClick = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      await api.stillages.like({ id })
      liked = !liked
      dispatch(setLiked({ id, liked }))
      if (liked) {
        dispatch(setHint({ message: `${name} was added to favourites` }))
      } else {
        dispatch(setHint({ message: `${name} was removed from favourites` }))
      }
    },
    [id, liked],
  )

  return (
    <StyledLibraryItem color={color} isPrivate={isPrivate}>
      <StarBtn onClick={handleClick}>
        <img src={liked ? starFilled : starTransparent} alt='' />
      </StarBtn>

      {name.length > 5 ? (
        <MuiTooltip text={name}>
          <Title>{name}</Title>
        </MuiTooltip>
      ) : (
        <Title>{name}</Title>
      )}

      <StyledLink to={`/stillages/${id}`}>
        <img src={arrowIcon} alt='go to stillage' />
      </StyledLink>
    </StyledLibraryItem>
  )
}

export default LibraryItem
