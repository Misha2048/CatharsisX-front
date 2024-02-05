import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCallback, useState } from 'react'

import StillageContainer from '@components/stillage/StillageContainer'
import StillageHeadingRow from '@components/stillage/StillageHeadingRow'
import StillageHeading from '@components/stillage/StillageHeading'
import GreyStillageBox from '@components/stillage/GreyStillageBox'
import StillageList from '@components/stillage/StillageList'
import StillageWrapper from '@components/stillage/StillageWrapper'
import FilterWithShowBtn from '@components/FilterWithShowBtn'
import { api } from '@api/index'
import { IShelvesRequest } from '@api/intefaces'
import { setStillageList } from '@redux/slices/stillageSlice'
import { FilterParams } from '@helpers/filterTypes'

function Stillage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [stillageName, setStillageName] = useState('')

  // this param will be added to requestParams
  const additionalParams = { stillage: id }

  const filterData = useCallback(
    async (requestParams: FilterParams) => {
      const resp = await api.shelves.get(requestParams as IShelvesRequest)
      dispatch(setStillageList(resp.findShelfsResponse))
    },
    [id],
  )

  return (
    <StillageContainer>
      <StillageWrapper>
        <StillageHeadingRow>
          <StillageHeading>{stillageName}</StillageHeading>
          <FilterWithShowBtn filterData={filterData} additionalParams={additionalParams} />
        </StillageHeadingRow>
        <GreyStillageBox>
          <StillageList setStillageName={setStillageName} />
        </GreyStillageBox>
      </StillageWrapper>
    </StillageContainer>
  )
}

export default Stillage
