import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

import { api } from '@api/index'
import { FilterParams } from '@helpers/filterTypes'
import { setLibraryList } from '@redux/slices/librarySlice'
import Stillages from '@components/Stillages'

function Library() {
  const dispatch = useDispatch()

  const fetchData = useCallback(async (requestParams?: FilterParams) => {
    const response = await api.catalog(requestParams)
    dispatch(setLibraryList(response.stillages))
  }, [])

  return (
    <Stillages title='Library' fetchData={fetchData} filterData={fetchData} dispatch={dispatch} />
  )
}

export default Library
