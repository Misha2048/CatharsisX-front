import { styled } from '@linaria/react'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import LibraryItem from '@components/library/LibraryItem'
import { api } from '@api/index'
import { RootState } from '@redux/store'
import { clearLibraryList, setLibraryList, setLiked } from '@redux/slices/librarySlice'
import { setHint } from '@redux/slices/hintSlice'

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

function LibraryList() {
  const dispatch = useDispatch()
  const stillagesList = useSelector((state: RootState) => state.library.list)

  const fetchData = useCallback(async () => {
    const stillages = await api.stillages.get()
    if (Array.isArray(stillages)) {
      dispatch(setLibraryList(stillages))
    }
  }, [])

  useEffect(() => {
    fetchData()
    return () => {
      dispatch(clearLibraryList())
    }
  }, [])

  const addToFavourites = useCallback(async (id: string, liked: boolean, name: string) => {
    await api.stillages.like({ id })
    dispatch(setLiked({ id, liked }))
    if (liked) {
      dispatch(setHint({ message: `${name} was added to favourites` }))
    } else {
      dispatch(setHint({ message: `${name} was removed from favourites` }))
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
            addToFavourites={addToFavourites}
            liked={stillage.liked}
          />
        ))}
    </StyledList>
  )
}

export default LibraryList
