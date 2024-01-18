import { useCallback, useEffect, useState } from 'react'
import { styled } from '@linaria/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import StillageItem from '@components/stillage/StillageItem'
import { RootState } from '@redux/store'
import { clearStillageList, setStillageList } from '@redux/slices/stillageSlice'
import { api } from '@api/index'
import DeleteShelfModal from '@components/stillage/DeleteShelfModal'

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (min-width: 820px) {
    flex-direction: row;
    flex-wrap: wrap;
    li {
      flex: 0 1 48.5%;
    }
  }
  @media screen and (min-width: 1440px) {
    gap: 20px;
  }
`

function StillageList() {
  const { id: stillageId } = useParams()
  const dispatch = useDispatch()
  const shelvesList = useSelector((state: RootState) => state.stillage.list)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [shelfName, setShelfName] = useState('')
  const [shelfId, setShelfId] = useState('')

  const fetchData = useCallback(async () => {
    const shelves = await api.shelves.get({ stillage: stillageId as string })
    if (Array.isArray(shelves)) {
      dispatch(setStillageList(shelves))
    }
  }, [stillageId])

  useEffect(() => {
    fetchData()
    return () => {
      dispatch(clearStillageList())
    }
  }, [])

  const showDeleteModal = useCallback(
    (shelfId: string, shelfName: string) => {
      setShelfId(shelfId)
      setShelfName(shelfName)
      setIsShowDeleteModal(true)
    },
    [stillageId],
  )

  return (
    <>
      <StyledList>
        {shelvesList &&
          shelvesList.map((shelf) => (
            <StillageItem
              key={shelf.id}
              showDeleteModal={() => showDeleteModal(shelf.id, shelf.name)}
            >
              {shelf.name}
            </StillageItem>
          ))}
      </StyledList>
      <DeleteShelfModal
        isShow={isShowDeleteModal}
        setIsShow={setIsShowDeleteModal}
        shelfName={shelfName}
        shelfId={shelfId}
      />
    </>
  )
}

export default StillageList
