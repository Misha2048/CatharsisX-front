import { styled } from '@linaria/react'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CloseBtn from '@components/CloseBtn'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import ModalTitle from '@components/modalWindow/ModalTitle'
import ModalWindowBtn from '@components/ModalWindowBtn'
import ShelfFile from '@components/shelf/ShelfFile'
import BlackOverlay from '@components/BlackOverlay'
import ModalWindowSpinner from '@components/ModalWindowSpinner'
import { api } from '@api/index'
import { RootState } from '@redux/store'
import { clearFilesList, setFilesList } from '@redux/slices/filesSlice'
import '@assets/muiTooltip.css'

interface Props {
  userId: string | null | undefined
  shelfUserId: string
  shelfName: string
  shelfId: string
  isShow: boolean
  setIsShow: (value: boolean) => void
  setIsShowUpload: (value: boolean) => void
}

const Body = styled.div<{ isShow: boolean }>`
  background-color: #4f4f4f;
  width: calc(100vw - 40px);
  height: calc(100svh - 40px);
  padding: 20px;
  border-radius: 16px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 450;
  transition: all 0.3s;
  visibility: ${(props) => (props.isShow ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isShow ? '1' : '0')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: auto;

  @media screen and (min-width: 768px) {
    width: calc(100vw - 64px);
    height: calc(100svh - 64px);
  }
  @media screen and (min-width: 1440px) {
    width: calc(100vw - 128px);
    height: calc(100svh - 80px);
  }
  @media screen and (min-width: 1441px) {
    width: 1312px;
    height: calc(100svh - 128px);
  }
`

const ShelfName = styled(ModalTitle)`
  align-self: flex-start;
  max-width: 90%;
  line-height: 1.2;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

const ShelfList = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 164px);
  justify-content: center;
  gap: 20px 30px;
`

const SpinnerContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

function ShelfModal({
  shelfName,
  shelfId,
  shelfUserId,
  userId,
  isShow,
  setIsShow,
  setIsShowUpload,
}: Props) {
  const files = useSelector((state: RootState) => state.files.list)
  const dispatch = useDispatch()
  const [isFilesFetched, setIsFilesFetched] = useState(false)

  const fetchFiles = useCallback(async () => {
    if (shelfId) {
      const resp = await api.files.get({ shelfId })
      if (Array.isArray(resp)) dispatch(setFilesList(resp))
    }
    setIsFilesFetched(true)
  }, [shelfId])

  useEffect(() => {
    setIsFilesFetched(false)
    fetchFiles()

    return () => {
      dispatch(clearFilesList())
    }
  }, [shelfId])

  const showUploadModal = useCallback(() => {
    setIsShowUpload(true)
  }, [shelfId])

  const closeShelfModal = useCallback(() => {
    document.body.classList.remove('_lock')
    setIsShow(false)
  }, [shelfId])

  return (
    <>
      <Body isShow={isShow}>
        <ShelfName>{shelfName}</ShelfName>
        <CloseBtnContainer>
          <CloseBtn onClick={closeShelfModal} />
        </CloseBtnContainer>
        {userId && userId === shelfUserId && (
          <ModalWindowBtn onClick={showUploadModal}>Upload File</ModalWindowBtn>
        )}
        {isFilesFetched ? (
          <ShelfList>
            {files.map((file) => (
              <li key={file.id}>
                <ShelfFile id={file.id} fileName={file.name} fileSize={file.size} />
              </li>
            ))}
          </ShelfList>
        ) : (
          <SpinnerContainer>
            <ModalWindowSpinner />
            <ModalTitle>Loading...</ModalTitle>
          </SpinnerContainer>
        )}
      </Body>
      <BlackOverlay show={isShow} onClick={closeShelfModal} />
    </>
  )
}

export default ShelfModal
