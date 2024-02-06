import { api } from '@api/index'
import Stillages from '@components/Stillages'
import { FilterParams } from '@helpers/filterTypes'
import { setLibraryList } from '@redux/slices/librarySlice'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Page from '@components/Page'

function MyStillages() {
  const dispatch = useDispatch()

  const fetchData = useCallback(async (requestParams?: FilterParams) => {
    const response = await api.stillages.get(requestParams)
    dispatch(setLibraryList(response))
  }, [])

  return (
    <Page hasHeader>
      <Stillages
        title='My stillages'
        fetchData={fetchData}
        filterData={fetchData}
        dispatch={dispatch}
      />
    </Page>
  )
}

export default MyStillages
