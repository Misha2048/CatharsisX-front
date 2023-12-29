import React from 'react'

import StillageContainer from '../components/stillage/StillageContainer'
import StillageHeadingRow from '../components/stillage/StillageHeadingRow'
import StillageHeading from '../components/stillage/StillageHeading'
import FilterBtn from '../components/FilterBtn'
import GreyStillageBox from '../components/stillage/GreyStillageBox'
import StillageList from '../components/stillage/StillageList'
import StillageWrapper from '../components/stillage/StillageWrapper'

function Stillage() {
  return (
    <StillageContainer>
      <StillageWrapper>
        <StillageHeadingRow>
          <StillageHeading>Stillage</StillageHeading>
          <FilterBtn />
        </StillageHeadingRow>
        <GreyStillageBox>
          <StillageList />
        </GreyStillageBox>
      </StillageWrapper>
    </StillageContainer>
  )
}

export default Stillage
