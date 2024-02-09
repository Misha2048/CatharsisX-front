import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { api } from '@api/index'
import Stillages from '@components/Stillages'
import { FilterParams } from '@helpers/filterTypes'
import { setLibraryList } from '@redux/slices/librarySlice'

function MyStillages() {
  const dispatch = useDispatch()

  const fetchData = useCallback(async (requestParams?: FilterParams) => {
    const response = await api.stillages.get(requestParams)
    dispatch(setLibraryList(response))
  }, [])

  return (
    <Stillages
      title='My stillages'
      fetchData={fetchData}
      filterData={fetchData}
      dispatch={dispatch}
    />
  )
}

export default MyStillages
