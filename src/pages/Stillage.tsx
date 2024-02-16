import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect, useState } from 'react'

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
import Page from '@components/Page'
import { RootState } from '@redux/store'
import { setValue } from '@redux/slices/UserSlice'
import CreateShelf from '@components/stillage/CreateShelf'

function Stillage() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [stillageName, setStillageName] = useState('')
  const [stillageUserId, setStillageUserId] = useState('')
  const reduxUserId = useSelector((state: RootState) => state.user.id)

  // this param will be added to requestParams
  const additionalParams = { stillage: id }

  const filterData = useCallback(
    async (requestParams: FilterParams) => {
      const resp = await api.shelves.get(requestParams as IShelvesRequest)
      dispatch(setStillageList(resp.findShelfsResponse))
    },
    [id],
  )

  const fetchData = useCallback(async () => {
    if (!reduxUserId) {
      const userData = await api.users.me()
      if (userData.id && userData.email) {
        dispatch(setValue({ id: userData.id }))
      }
    }
  }, [id])

  useEffect(() => {
    fetchData()
  }, [id])

  return (
    <Page hasHeader hasTooltip>
      <StillageContainer>
        <StillageWrapper>
          <StillageHeadingRow>
            <StillageHeading>{stillageName}</StillageHeading>
            <FilterWithShowBtn filterData={filterData} additionalParams={additionalParams} />
          </StillageHeadingRow>
          <GreyStillageBox>
            {stillageUserId && reduxUserId && stillageUserId === reduxUserId && <CreateShelf />}
            <StillageList
              reduxUserId={reduxUserId}
              setStillageName={setStillageName}
              setStillageUserId={setStillageUserId}
            />
          </GreyStillageBox>
        </StillageWrapper>
      </StillageContainer>
    </Page>
  )
}

export default Stillage
