import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AxiosProgressEvent } from 'axios'

import UploadFileBody from '@components/uploadFile/UploadFileBody'
import UploadFileForm from '@components/uploadFile/UploadFileForm'
import UploadFileTitle from '@components/uploadFile/UploadFileTitle'
import CloseBtnContainer from '@components/filter/CloseBtnContainer'
import CloseBtn from '@components/CloseBtn'
import UploadFileDropzone from '@components/uploadFile/UploadFileDropzone'
import Input from '@components/Input'
import ModalWindowBtn from '@components/ModalWindowBtn'
import ToolTip from '@components/ToolTip'
import UploadFileText from '@components/uploadFile/UploadFileText'
import { getFileNameAndSize } from '@helpers/fileHelper'
import { api } from '@api/index'
import { setHint } from '@redux/slices/hintSlice'

interface Props {
  shelfId: string
  isShow: boolean
  setIsShow: (value: boolean) => void
}

function UploadFileModal({ isShow, setIsShow, shelfId }: Props) {
  const [file, setFile] = useState<File | null>(null)
  const [fileName, setFileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [percentUploaded, setPercentUploaded] = useState(0)
  const [finishMessage, setFinishMessage] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    if (percentUploaded === 100) {
      setFinishMessage('The content of the file is being checked...')
    }
  }, [percentUploaded])

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFileName(event.target.value)
    },
    [shelfId],
  )

  const hideModalWindow = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      setTimeout(() => {
        setFile(null)
        setFileName('')
        setIsLoading(false)
        setPercentUploaded(0)
      }, 300)
      setIsShow(false)
    },
    [shelfId],
  )

  const onUploadProgress = useCallback(
    (progressEvent: AxiosProgressEvent) => {
      setPercentUploaded(Math.round((progressEvent.loaded * 100) / progressEvent.total!))
    },
    [shelfId],
  )

  const showFileName = useCallback(() => {
    if (fileName) {
      return fileName
    }
    return getFileNameAndSize(file as File)
  }, [shelfId, file, fileName])

  const submitForm = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!file) return

      setIsLoading(true)
      const name = fileName || file.name
      const data = {
        file,
        shelfId,
        fileName: name,
        onUploadProgress,
      }
      const res = await api.files.upload(data)
      if (res.error) {
        setFinishMessage("File wasn't uploaded")
        dispatch(
          setHint({
            message:
              "Could't upload a file. Please check if the file text doesn't contain swear words" +
              ' or contact the administrator.',
          }),
        )
      }
      if (res.message) {
        setFinishMessage("File's been uploaded successfully!")
      }
    },
    [shelfId, file, fileName],
  )

  return (
    <>
      <UploadFileBody show={isShow}>
        <UploadFileForm onSubmit={submitForm}>
          <CloseBtnContainer>
            <CloseBtn size='small' onClick={hideModalWindow} />
          </CloseBtnContainer>
          <UploadFileTitle>Upload file</UploadFileTitle>
          {!isLoading ? (
            <>
              <UploadFileDropzone file={file} setFile={setFile} />
              <Input
                label='File name (optional)'
                type='text'
                value={fileName}
                onChange={handleInputChange}
                name='fileName'
              />
              <ModalWindowBtn type='submit'>Upload</ModalWindowBtn>
            </>
          ) : (
            <div>
              <UploadFileText>{showFileName()}</UploadFileText>
              <UploadFileText>{finishMessage || `Sending... ${percentUploaded}%`}</UploadFileText>
            </div>
          )}
        </UploadFileForm>
      </UploadFileBody>
      <ToolTip />
    </>
  )
}

export default UploadFileModal
