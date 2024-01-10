import { styled } from '@linaria/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FileRejection, useDropzone } from 'react-dropzone'

import addFileIcon from '@assets/add-file-icon.svg'
import UploadFileText from '@components/uploadFile/UploadFileText'
import DropzoneBtn from '@components/uploadFile/DropzoneBtn'
import { useDispatch } from 'react-redux'
import { setHint } from '@redux/slices/hintSlice'
import { getFileExtensionUppercase, getFileNameAndSize } from '@helpers/fileHelper'
import DropzoneSmallText from './DropzoneSmallText'

interface Props {
  file: File | null
  setFile: (file: File) => void
}

const DropzoneContainer = styled.div`
  padding: 24px 20px;
  border-radius: 16px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%23E0E0E0FF' stroke-width='4' stroke-dasharray='11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  background-color: #333;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    padding: 32px;
    gap: 32px;
  }
`

const AddFileIcon = styled.img`
  width: 50px;
  height: 50px;
`
// if we specify which files to accept, we can only setup styles for drag rejection (all files are "rejected" on drag)
const rejectStyle = {
  backgroundColor: '#4f4f4f',
}

const acceptFiles = {
  'text/plain': ['.txt'],
  'application/rtf': ['.rtf'],
  'application/pdf': ['.pdf'],
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
  'application/vnd.openxmlformats-officedocument.presentationml.presentation': ['.pptx'],
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
}

const supportedExtensions = ['TXT', 'RTF', 'PDF', 'DOCX', 'PPTX', 'XLSX']

const supportedExtensionsString = supportedExtensions.join(', ')

const initialMessage = 'You can drag and drop a file to upload'

function UploadFileDropzone({ file, setFile }: Props) {
  const [message, setMessage] = useState(initialMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!file) {
      setMessage(initialMessage)
    }
  }, [file])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) {
      return // because we accept only 1 file at a time. Dragging 2 or more files will cause the acceptedFiles array to be empty
    }
    setFile(acceptedFiles[0])
    setMessage(getFileNameAndSize(acceptedFiles[0]))
  }, [])

  const handleDropRejection = useCallback((fileRejections: Array<FileRejection>) => {
    if (fileRejections.length > 1) {
      return dispatch(setHint({ message: 'Only one file at a time can be uploaded' }))
    }
    fileRejections.forEach((fileRejection) => {
      if (!supportedExtensions.includes(getFileExtensionUppercase(fileRejection.file.name))) {
        return dispatch(
          setHint({
            message: `Only the following file extensions are supported: ${supportedExtensionsString}`,
          }),
        )
      }
    })
  }, [])

  const { getRootProps, getInputProps, open, isDragReject } = useDropzone({
    onDrop,
    noClick: true,
    multiple: false,
    onDropRejected: handleDropRejection,
    accept: acceptFiles,
  })

  const style = useMemo(
    () => ({
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragReject],
  )

  return (
    <DropzoneContainer {...getRootProps({ style })}>
      <input {...getInputProps()} />
      <AddFileIcon src={addFileIcon} alt='' />
      <UploadFileText>{message}</UploadFileText>
      <DropzoneBtn type='button' onClick={open}>
        Browse File
      </DropzoneBtn>
      <DropzoneSmallText>
        Supported files: <br /> {supportedExtensionsString}
      </DropzoneSmallText>
    </DropzoneContainer>
  )
}

export default UploadFileDropzone
