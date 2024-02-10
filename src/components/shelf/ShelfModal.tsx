import { styled } from '@linaria/react'
import { useCallback, useEffect, useState } from 'react'

import { IGetFilesResponse } from '@api/intefaces'
import CloseBtn from '@components/CloseBtn'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import ModalTitle from '@components/modalWindow/ModalTitle'
import ModalWindowBtn from '@components/ModalWindowBtn'
import ShelfFile from '@components/shelf/ShelfFile'
import BlackOverlay from '@components/BlackOverlay'
import ModalWindowSpinner from '@components/ModalWindowSpinner'

interface Props {
  shelfName: string
  shelfId: string
  isShow: boolean
  setIsShow: (value: boolean) => void
  setIsShowUpload: (value: boolean) => void
}

const Body = styled.div<{ isShow: boolean }>`
  background-color: #4f4f4f;
  width: calc(100vw - 40px);
  height: calc(100vh - 40px);
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
    height: calc(100vh - 64px);
  }
  @media screen and (min-width: 1440px) {
    width: calc(100vw - 128px);
    height: calc(100vh - 80px);
  }
  @media screen and (min-width: 1441px) {
    width: 1312px;
    height: calc(100vh - 128px);
  }
`

const ShelfName = styled(ModalTitle)`
  align-self: flex-start;
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

function ShelfModal({ shelfName, shelfId, isShow, setIsShow, setIsShowUpload }: Props) {
  const [files, setFiles] = useState<IGetFilesResponse[]>([])
  const [isFilesFetched, setIsFilesFetched] = useState(false)

  const fetchFiles = useCallback(async () => {
    // const resp = await api.files.get(shelfId)
    // setFiles(resp)

    // setFiles([]) // TODO delete it later
    setFiles([
      { fileId: '1', fileName: 'test1.txt', size: 1024, uploadedAt: '01.01.2024' },
      { fileId: '2', fileName: 'test2.rtf', size: 1024, uploadedAt: '01.01.2024' },
      { fileId: '3', fileName: 'test3.pdf', size: 1024, uploadedAt: '01.01.2024' },
      { fileId: '4', fileName: 'test4.docx', size: 1024, uploadedAt: '01.01.2024' },
      { fileId: '5', fileName: 'test5.xlsx', size: 1024, uploadedAt: '01.01.2024' },
      { fileId: '6', fileName: 'test6.pptx', size: 1024, uploadedAt: '01.01.2024' },
    ])
    await new Promise((resolve) => setTimeout(resolve, 2000)) // TODO delete it later
    setIsFilesFetched(true)
  }, [shelfId])

  useEffect(() => {
    fetchFiles()

    return () => {
      setFiles([])
    }
  }, [shelfId])

  const showUploadModal = useCallback(() => {
    setIsShowUpload(true)
  }, [shelfId])

  const closeShelfModal = useCallback(() => {
    setIsShow(false)
  }, [shelfId])

  return (
    <>
      <Body isShow={isShow}>
        <ShelfName>{shelfName}</ShelfName>
        <CloseBtnContainer>
          <CloseBtn onClick={closeShelfModal} />
        </CloseBtnContainer>
        <ModalWindowBtn onClick={showUploadModal}>Upload File</ModalWindowBtn>
        {isFilesFetched ? (
          <ShelfList>
            {files.map((file) => (
              <li key={file.fileId}>
                <ShelfFile fileName={file.fileName} fileSize={file.size} />
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
