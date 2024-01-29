import LibraryContainer from '@components/library/LibraryContainer'
import StillageWrapper from '@components/stillage/StillageWrapper'
import StillageHeadingRow from '@components/stillage/StillageHeadingRow'
import StillageHeading from '@components/stillage/StillageHeading'
import FilterWithShowBtn from './FilterWithShowBtn'
import GreyLibraryBox from '@components/library/GreyLibraryBox'
import LibraryList from '@components/library/LibraryList'
import { FilterParams } from '@helpers/filterTypes'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'

interface Props {
  title: string
  fetchData: () => Promise<void>
  filterData: (requestParams: FilterParams) => Promise<void>
  dispatch: Dispatch<UnknownAction>
}

function Stillages({ title, fetchData, filterData, dispatch }: Props) {
  return (
    <LibraryContainer>
      <StillageWrapper>
        <StillageHeadingRow>
          <StillageHeading>{title}</StillageHeading>
          <FilterWithShowBtn filterData={filterData} />
        </StillageHeadingRow>
        <GreyLibraryBox>
          <LibraryList fetchData={fetchData} dispatch={dispatch} />
        </GreyLibraryBox>
      </StillageWrapper>
    </LibraryContainer>
  )
}

export default Stillages
