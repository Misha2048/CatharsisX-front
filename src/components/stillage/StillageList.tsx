import { useCallback, useEffect, useState } from 'react'
import { styled } from '@linaria/react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import StillageItem from '@components/stillage/StillageItem'
import { RootState } from '@redux/store'
import { clearStillageList, setStillageList } from '@redux/slices/stillageSlice'
import { api } from '@api/index'
import DeleteShelfModal from '@components/stillage/DeleteShelfModal'
import ShelfModal from '@components/shelf/ShelfModal'
import UploadFileModal from '@components/UploadFileModal'
import { setValue } from '@redux/slices/UserSlice'

interface Props {
  setStillageName: React.Dispatch<React.SetStateAction<string>>
  setStillageUserId: React.Dispatch<React.SetStateAction<string>>
  reduxUserId: string | null | undefined
}

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

function StillageList({ setStillageName, setStillageUserId, reduxUserId }: Props) {
  const { id: stillageId } = useParams()
  const dispatch = useDispatch()
  const shelvesList = useSelector((state: RootState) => state.stillage.list)
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false)
  const [isShowShelf, setIsShowShelf] = useState(false)
  const [isShowUpload, setIsShowUpload] = useState(false)
  const [shelfName, setShelfName] = useState('')
  const [shelfId, setShelfId] = useState('')
  const [shelfUserId, setShelfUserId] = useState('')

  const fetchData = useCallback(async () => {
    if (!reduxUserId) {
      const userData = await api.users.me()
      if (userData.id && userData.email) {
        dispatch(setValue({ id: userData.id }))
      }
    }

    const resp = await api.shelves.get({ stillage: stillageId as string })
    if (resp.stillageName && resp.findShelfsResponse && resp.stillageUserId) {
      setStillageName(resp.stillageName)
      setStillageUserId(resp.stillageUserId)
      dispatch(setStillageList(resp.findShelfsResponse))
    }
  }, [stillageId])

  useEffect(() => {
    fetchData()
    return () => {
      dispatch(clearStillageList())
    }
  }, [])

  return (
    <>
      <StyledList>
        {shelvesList &&
          shelvesList.map((shelf) => (
            <StillageItem
              key={shelf.id}
              shelfId={shelf.id}
              shelfName={shelf.name}
              userId={reduxUserId}
              shelfUserId={shelf.userId}
              setShelfUserId={setShelfUserId}
              setShelfId={setShelfId}
              setShelfName={setShelfName}
              setIsShowShelf={setIsShowShelf}
              setIsShowDeleteModal={setIsShowDeleteModal}
            ></StillageItem>
          ))}
      </StyledList>
      <DeleteShelfModal
        isShow={isShowDeleteModal}
        setIsShow={setIsShowDeleteModal}
        shelfName={shelfName}
        shelfId={shelfId}
      />
      <ShelfModal
        shelfName={shelfName}
        shelfId={shelfId}
        shelfUserId={shelfUserId}
        userId={reduxUserId}
        isShow={isShowShelf}
        setIsShow={setIsShowShelf}
        setIsShowUpload={setIsShowUpload}
      />
      <UploadFileModal isShow={isShowUpload} setIsShow={setIsShowUpload} shelfId={shelfId} />
    </>
  )
}

export default StillageList
