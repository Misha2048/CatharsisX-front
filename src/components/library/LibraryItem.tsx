import { styled } from '@linaria/react'
import { useCallback } from 'react'
import { Link } from 'react-router-dom'

import arrowIcon from '@assets/arrow-right-icon.svg'
import starTransparent from '@assets/star-transparent.svg'
import starFilled from '@assets/star-filled.svg'

interface Props {
  id: string
  name: string
  liked: boolean | undefined
  addToFavourites: (id: string, liked: boolean, name: string) => Promise<unknown>
}

const StyledLibraryItem = styled.li`
  position: relative;
  background-color: #019c56;
  width: 250px;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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

function LibraryItem({ name, id, liked, addToFavourites }: Props) {
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      if (liked === undefined) {
        liked = false
      }
      addToFavourites(id, !liked, name)
    },
    [id, liked],
  )

  return (
    <StyledLibraryItem>
      <StarBtn onClick={handleClick}>
        <img src={liked ? starFilled : starTransparent} alt='' />
      </StarBtn>

      <Title title={name}>{name}</Title>

      <StyledLink to={`/stillage/${id}`}>
        <img src={arrowIcon} alt='go to stillage' />
      </StyledLink>
    </StyledLibraryItem>
  )
}

export default LibraryItem
