import React, { useCallback, useEffect } from 'react'
import { styled } from '@linaria/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import StillageItem from '@components/stillage/StillageItem'
import { RootState } from '@redux/store'
import { clearStillageList, setStillageList } from '@redux/slices/stillageSlice'
import { api } from '@api/index'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 820px) {
    flex-direction: row;
    flex-wrap: wrap;
    li {
      flex: 0 1 48.5%;
    }
  }
  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`

function StillageList() {
  const { id: stillageId } = useParams()
  const dispatch = useDispatch()

  const fetchData = useCallback(async () => {
    const shelves = await api.shelves({ stillage: stillageId })
    if (Array.isArray(shelves)) {
      dispatch(setStillageList(shelves))
    }
  }, [stillageId])

  useEffect(() => {
    fetchData()

    return () => {
      dispatch(clearStillageList())
    }
  }, [])

  const shelvesList = useSelector((state: RootState) => state.stillage.list)

  return (
    <StyledList>
      {shelvesList &&
        shelvesList.map((shelf) => (
          <StillageItem key={shelf.id} id={shelf.id}>
            {shelf.name}
          </StillageItem>
        ))}
    </StyledList>
  )
}

export default StillageList
