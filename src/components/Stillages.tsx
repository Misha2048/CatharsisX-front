import LibraryContainer from '@components/library/LibraryContainer'
import StillageWrapper from '@components/stillage/StillageWrapper'
import StillageHeadingRow from '@components/stillage/StillageHeadingRow'
import StillageHeading from '@components/stillage/StillageHeading'
import FilterWithShowBtn from './FilterWithShowBtn'
import GreyLibraryBox from '@components/library/GreyLibraryBox'
import LibraryList from '@components/library/LibraryList'
import { FilterParams } from '@helpers/filterTypes'
import { Dispatch, UnknownAction } from '@reduxjs/toolkit'
import Page from '@components/Page'
import CreateStillage from '@components/stillage/CreateStillage'

interface Props {
  title: string
  hasCreateStillageBtn?: boolean
  fetchData: () => Promise<void>
  filterData: (requestParams: FilterParams) => Promise<void>
  dispatch: Dispatch<UnknownAction>
}

function Stillages({ title, hasCreateStillageBtn, fetchData, filterData, dispatch }: Props) {
  return (
    <Page hasHeader hasTooltip>
      <LibraryContainer>
        <StillageWrapper>
          <StillageHeadingRow>
            <StillageHeading>{title}</StillageHeading>
            <FilterWithShowBtn filterData={filterData} />
          </StillageHeadingRow>
          <GreyLibraryBox>
            {hasCreateStillageBtn && <CreateStillage />}
            <LibraryList fetchData={fetchData} dispatch={dispatch} />
          </GreyLibraryBox>
        </StillageWrapper>
      </LibraryContainer>
    </Page>
  )
}

export default Stillages
