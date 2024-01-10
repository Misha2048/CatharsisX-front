import React from 'react'

import StillageContainer from '@components/stillage/StillageContainer'
import StillageHeadingRow from '@components/stillage/StillageHeadingRow'
import StillageHeading from '@components/stillage/StillageHeading'
import GreyStillageBox from '@components/stillage/GreyStillageBox'
import StillageList from '@components/stillage/StillageList'
import StillageWrapper from '@components/stillage/StillageWrapper'
import FilterWithShowBtn from '@components/FilterWithShowBtn'

function Stillage() {
  return (
    <StillageContainer>
      <StillageWrapper>
        <StillageHeadingRow>
          <StillageHeading>Stillage</StillageHeading>
          <FilterWithShowBtn />
        </StillageHeadingRow>
        <GreyStillageBox>
          <StillageList />
        </GreyStillageBox>
      </StillageWrapper>
    </StillageContainer>
  )
}

export default Stillage
