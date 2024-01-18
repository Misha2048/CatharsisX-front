import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

import FilterWithShowBtn from '@components/FilterWithShowBtn'
import GreyLibraryBox from '@components/library/GreyLibraryBox'
import LibraryContainer from '@components/library/LibraryContainer'
import LibraryList from '@components/library/LibraryList'
import StillageHeading from '@components/stillage/StillageHeading'
import StillageHeadingRow from '@components/stillage/StillageHeadingRow'
import StillageWrapper from '@components/stillage/StillageWrapper'
import { RequestParams } from '@helpers/filterTypes'
import { IStillagesRequest } from '@api/intefaces'
import { api } from '@api/index'
import { setLibraryList } from '@redux/slices/librarySlice'

function Library() {
  const dispatch = useDispatch()

  const fetchData = useCallback(async (requestParams: RequestParams) => {
    const resp = await api.stillages.get(requestParams as IStillagesRequest)
    dispatch(setLibraryList(resp))
  }, [])

  return (
    <LibraryContainer>
      <StillageWrapper>
        <StillageHeadingRow>
          <StillageHeading>Library</StillageHeading>
          <FilterWithShowBtn fetchData={fetchData} />
        </StillageHeadingRow>
        <GreyLibraryBox>
          <LibraryList />
        </GreyLibraryBox>
      </StillageWrapper>
    </LibraryContainer>
  )
}

export default Library
