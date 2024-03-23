import { styled } from '@linaria/react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import { RootState } from '@redux/store'

import LibraryItem from '@components/library/LibraryItem'
import { clearLibraryList } from '@redux/slices/librarySlice'

interface Props {
  dispatch: Dispatch<UnknownAction>
  fetchData: () => Promise<void>
}

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;

  @media screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    gap: 25px 20px;
  }
  @media screen and (min-width: 1024px) {
    gap: 50px 76px;
  }
  @media screen and (min-width: 1440px) {
    gap: 50px 68px;
  }
`

function LibraryList({ fetchData, dispatch }: Props) {
  const stillagesList = useSelector((state: RootState) => state.library.list)

  useEffect(() => {
    fetchData()
    return () => {
      dispatch(clearLibraryList())
    }
  }, [])

  return (
    <StyledList>
      {stillagesList &&
        stillagesList.map((stillage) => (
          <LibraryItem
            key={stillage.id}
            id={stillage.id}
            name={stillage.name}
            dispatch={dispatch}
            liked={stillage.liked}
            color={stillage.color}
            isPrivate={stillage.private}
          />
        ))}
    </StyledList>
  )
}

export default LibraryList
