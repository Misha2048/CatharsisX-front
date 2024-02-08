import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

import { api } from '@api/index'
import { FilterParams } from '@helpers/filterTypes'
import { setLibraryList } from '@redux/slices/librarySlice'
import Stillages from '@components/Stillages'
import Page from '@components/Page'

function Library() {
  const dispatch = useDispatch()

  const fetchData = useCallback(async (requestParams?: FilterParams) => {
    const response = await api.catalog(requestParams)
    dispatch(setLibraryList(response.stillages))
  }, [])

  return (
    <Page hasHeader>
      <Stillages title='Library' fetchData={fetchData} filterData={fetchData} dispatch={dispatch} />
    </Page>
  )
}

export default Library
