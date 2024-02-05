import { api } from '@api/index'
import Stillages from '@components/Stillages'
import { FilterParams } from '@helpers/filterTypes'
import { setLibraryList } from '@redux/slices/librarySlice'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

function LikedStillages() {
  const dispatch = useDispatch()

  const fetchData = useCallback(async (requestParams?: FilterParams) => {
    const response = await api.stillages.liked(requestParams)
    dispatch(setLibraryList(response.likedStillages))
  }, [])

  return (
    <Stillages
      title='Favourite stillages'
      fetchData={fetchData}
      filterData={fetchData}
      dispatch={dispatch}
    />
  )
}

export default LikedStillages
