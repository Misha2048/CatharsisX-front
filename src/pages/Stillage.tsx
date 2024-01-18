import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'

import StillageContainer from '@components/stillage/StillageContainer'
import StillageHeadingRow from '@components/stillage/StillageHeadingRow'
import StillageHeading from '@components/stillage/StillageHeading'
import GreyStillageBox from '@components/stillage/GreyStillageBox'
import StillageList from '@components/stillage/StillageList'
import StillageWrapper from '@components/stillage/StillageWrapper'
import FilterWithShowBtn from '@components/FilterWithShowBtn'
import { api } from '@api/index'
import { IShelfsRequest } from '@api/intefaces'
import { setStillageList } from '@redux/slices/stillageSlice'
import { RequestParams } from '@helpers/filterTypes'

function Stillage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  // this param will be added to requestParams
  const additionalParams = { stillage: id }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchData = useCallback(async (requestParams: RequestParams) => {
    const resp = await api.shelves.get(requestParams as IShelfsRequest)
    dispatch(setStillageList(resp))
  }, [])

  return (
    <StillageContainer>
      <StillageWrapper>
        <StillageHeadingRow>
          <StillageHeading>Stillage</StillageHeading>
          <FilterWithShowBtn fetchData={fetchData} additionalParams={additionalParams} />
        </StillageHeadingRow>
        <GreyStillageBox>
          <StillageList />
        </GreyStillageBox>
      </StillageWrapper>
    </StillageContainer>
  )
}

export default Stillage
